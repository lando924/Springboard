// categories is the main data structure for the app; it looks like this:

//  [
//    { title: "Math",
//      clues: [
//        {question: "2+2", answer: 4, showing: null},
//        {question: "1+1", answer: 2, showing: null}
//        ...
//      ],
//    },
//    { title: "Literature",
//      clues: [
//        {question: "Hamlet Author", answer: "Shakespeare", showing: null},
//        {question: "Bell Jar Author", answer: "Plath", showing: null},
//        ...
//      ],
//    },
//    ...
//  ]
let categories = [];
let categoryHistory = [];
let gameCount = 1; // can only play game twice since there's only 14 categories on this API

/** Get NUM_CATEGORIES random category from API.
 *
 * Returns array of category ids
 */
function getCategoryIds() {
    const catIDs = [];
    while (catIDs.length < 6) { // runs until 6 random category IDs have been selected
        let randomID = Math.floor(Math.random()*14); 
        if (catIDs.indexOf(randomID) === -1 && categoryHistory.indexOf(randomID) === -1) { // checks for duplicate ID and previously chosen categories
            catIDs.push(randomID);
            categoryHistory.push(randomID); // stores selection of IDs chosen
        }
    }
    return catIDs;
}

/** Return object with data about a category:
 *
 *  Returns { title: "Math", clues: clue-array }
 *
 * Where clue-array is:
 *   [
 *      {question: "Hamlet Author", answer: "Shakespeare", showing: null},
 *      {question: "Bell Jar Author", answer: "Plath", showing: null},
 *      ...
 *   ]
 */
function getCategory(catId) {
    const catergoryDATA = {}
    catergoryDATA.title = catId.title;
    
    const clueArray = (catId.clues).map(function(value) { // builds clue array with question, answer and showing keys
        const {answer, question} = value;
        return {answer: answer, question: question, showing: null};
    });
    catergoryDATA.clues = clueArray;

    return catergoryDATA;
}

/** Fill the HTML table#jeopardy with the categories & cells for questions.
 *
 * - The <thead> should be filled w/a <tr>, and a <td> for each category
 * - The <tbody> should be filled w/NUM_QUESTIONS_PER_CAT <tr>s,
 *   each with a question for each category in a <td>
 *   (initally, just show a "?" where the question/answer would go.)
 */
async function fillTable(ids) { // CONTINUE HERE: BUILD TABLE OF ?s ************************
    try {
        for (const id of ids) { // requests info about specific category from API
            const catInfo = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/category?id=${id}`); // store value in response, not promise
            categories.push(getCategory(catInfo.data)); // gets question answer info and pushes to main categories array
        }
        for (let i=0; i<=5; i++) { // fill category titles on DOM
            document.querySelector(`#title${i}`).innerText = categories[i].title;
        };
        hideLoadingView();
    } catch (e) {
        alert('Jeopardy categories failed to load from server, please refresh page or try again later.')
    }    
}

/** Handle clicking on a clue: show the question or answer.
 *
 * Uses .showing property on clue to determine what to show:
 * - if currently null, show question & set .showing to "question"
 * - if currently "question", show answer & set .showing to "answer"
 * - if currently "answer", ignore click
 * 
 * table array layout: [x ,y] where x=category, and y=question number
 * */
function handleClick(evt) {
    let cat = evt.id[0];
    let q = evt.id[2];
    if (categories[cat].clues[q].showing === null) { // if showing null
        evt.innerText = categories[cat].clues[q].question;
        categories[cat].clues[q].showing = 'question';
    } else if (categories[cat].clues[q].showing === 'question') { // if showing a question
        evt.innerHTML = categories[cat].clues[q].answer;
        categories[cat].clues[q].showing = 'answer';
    } else {} // otherwise ignore    
}

/** Wipe the current Jeopardy board, show the loading spinner,
 * and update the button used to fetch data.
 */
function showLoadingView() {
    document.querySelector('div').setAttribute('class','loader'); // show loading spinner
    categories = [];
    setupAndStart()
    $('td').text('?'); // sets all rows to question marks
}

/** Remove the loading spinner and update the button used to fetch data. */
function hideLoadingView() {
    document.querySelector('.loader').setAttribute('class','hidden')
}

/** Start game:
 *
 * - get random category Ids
 * - get data for each category
 * - create HTML table
 * */
async function setupAndStart() {
    try {
        const response = await axios.get(`https://rithm-jeopardy.herokuapp.com/api/categories?count=100`); // store value in response, not promise
        const catIDs = getCategoryIds().map(function(value) { // get corresponding category IDs
            return response.data[value].id;
        });
        fillTable(catIDs);
    } catch (e) {
        alert('Jeopardy server failed to respond, please try again later.')
    } 
}

/** On click of start / restart button, set up game. */
const restart = document.querySelector('button');
restart.addEventListener('click', (e) => {
    if (gameCount === 2) {
        alert('Can only play game twice. Please refresh page if you want to play again with the same categories.');
    } else {
        showLoadingView();
        gameCount = 2;
    }    
});

/** On page load, add event handler for clicking clues */
window.addEventListener("load", (event) => {
    showLoadingView() // starts game by default
    document.querySelector('table').addEventListener('click', function(e) {
        handleClick(e.target);
    })
  });