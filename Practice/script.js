// //1. Creat the follwing variables
// const name = 'Orlando';
// const dayOfBirth = 5;

// //newest variable if it's let or var takes precedence.

let colorResponse = prompt('what is your favorite color?');
console.log('Your favorite color is ' + colorResponse);

if (colorResponse === 'red') {
    console.log('Ya bloody ahole');
} else {
    console.log('Ya fruity mate');
};


// const number = Math.random();
// if (number > .5) {
//     console.log("Over 0.5");
// } else {
//     console.log("Under 0.5");
// };

// let programming = {
//     languages: ['JavaScript', 'Python', 'Ruby'],
//     isChallenging: true,
//     isRewarding: true,
//     difficulty: 8,
//     jokes: 'I queefed'
// };

// for (let i = 0; i <= 10; i++){
//     console.log(i);
// };

// let i = 0;

// while (i < 10) {
//     i++;
//     console.log(i);
// };


// for (let i = 10; i >= 0; i--){
//     console.log(i);
// };

// while (i < 20) {
//     i+=2;
//     console.log(i);
// };


function difference (a, b) {
    return a - b;
};
function product (a, b) {
    return a * b;
};

function printDay (num) {
    if (num === 1) {
        return 'Sunday';
    } else if (num === 2) {
        return 'Monday';
    } else if (num === 3) {
        return 'Tuesday';
    } else if (num === 4) {
        return 'Wednesday';
    } else if (num === 5) {
        return 'Thursday';
    } else if (num === 6) {
        return 'Friday';
    } else if (num === 7) {
        return 'Saturday';
    } else {
        return undefined;
    }
};

function numberCompare (x, y) {
    if (x === y) {
        return "Numbers are equal";
    } else if (x > y) {
        return "First is greater";
    } else {
        return "Second is greater";
    }
};

function lastElement (arr) {
    if (arr === []) {
        return undefined;
    } else {
        return arr.pop();
    }
};

function singleLetterCount(str, char) {
    let counter = 0;
    let lowerStr = str.toLowerCase();
    for (let i = 0; i < lowerStr.length; i++) {
        if (lowerStr[i] === char) {
            counter ++;
        } 
    }
    return counter;
};

function multipleLetterCount(str) {
    let counter = {};
    for (let char of str) {
        if(counter[char]) {
            counter[char]++;
        } else {
            counter[char] = 1;
        }
    }
    return counter;
};

// function wordCount (str) {
//     let result = {};
//     for(let word of str) {
//         if (result[word]) {
//             counter[word]++''
//         } else {
//             result[word] = 1;
//         }
//     }
//     return result;
// }

//arrayManipulation
function arrayManipulation (arr,command,loc, val) {
    if (command === 'remove' && loc === 'end'){
        return arr.pop();
    } else if (command === 'remove' && loc === 'beginning') {
        return arr.shift();
    } else if (command === 'add' && loc === 'beginning') {
        arr.unshift(val);
        return arr;
    }  else if (command === 'add' && loc === 'end') {
        arr.push(val);
        return arr;
    }
};

function isPalindrome (val) {
    let lowerVal = val.toLowerCase();
    if(lowerVal.split('').reverse().join('') === lowerVal) {
        return true;
    } else {
        return false;
    }
};

//Rock, Paper, Scissor

function rps () {
    function computerMath(num) {
        if (num < .33) {
            return 'rock';
        }
        if (num > .33 && num < .66) {
            return 'paper';
        }
        else {
            return 'scissor'
        }
    };
    let userChoice = prompt('Rock, Paper, or Scissor?').toLowerCase();
    let computerChoice = computerMath(Math.random());

    let answers = ['rock', 'paper', 'scissor'];

    if (!userChoice || answers.indexOf(userChoice) === -1) {
        return 'Please input valid choice';
    }
    if (userChoice === computerChoice) {
        return 'Tie!';
    }
    if (userChoice === 'rock' && computerChoice === 'scissor') {
        return `${userChoice} beats ${computerChoice}...user wins!`
    }
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return `${userChoice} beats ${computerChoice}...user wins!`
    }
    if (userChoice === 'scissor' && computerChoice === 'rock') {
        return `${userChoice} beats ${computerChoice}...user wins!`
    }
    else {
        return `${computerChoice} beats ${userChoice}...computer wins!`
    };
}