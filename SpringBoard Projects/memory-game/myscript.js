const gameContainer = document.getElementById("game");

let flippedCards = [];
//store the cards that have already been matched
let matchedCards = [];
let score = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];

// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want to research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

// let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

// TODO: Implement this function!
function handleCardClick() {
  // check to see if clicking is allowed 
  if (flippedCards.length < 2 && !this.classList.contains("matched") && !this.classList.contains("flipped") ) {
    this.classList.add('flipped');
    this.classList.add('show');
    flippedCards.push(this);
    if (flippedCards.length == 2) {
        setTimeout(checkMatch, 1000)
    } 
  } 




}
function checkMatch() {
    let [card1, card2] = flippedCards;
    if (card1.className === card2.className) {
        card1.classList.add('matched');
        card2.classList.add('matched');
        matchedCards.push(card1, card2);
        score++;
        document.getElementById('score').textContent = score
        if (matchedCards.length == COLORS.length) {
            alert("Congratulations, Game Over!");
        };
    } else {
        card1.classList.remove('flipped');
        card1.classList.remove('show');
        card2.classList.remove('flipped');
        card2.classList.remove('show');
    }
    flippedCards = [];
};

function startGame() {
    gameContainer.innerHTML = '';
    let shuffledColors = shuffle(COLORS);
    createDivsForColors(shuffledColors);
    flippedCards = [];
    matchedCards = [];
    score = 0;
    document.getElementById('score').textContent = score
}

function reset() {
    startGame();
};
// when the DOM loads
// createDivsForColors(shuffledColors);

