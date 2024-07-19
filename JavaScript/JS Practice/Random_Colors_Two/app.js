function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}

const h1 = document.querySelector('h1');


setInterval(function(){
    letters.style.color = randomRGB();

}, 500);


const letters = document.querySelectorAll('.letter');



setInterval(function (){
    for(let letter of letters){
        letter.style.color = randomRGB();
    }
},500)


// for (let i = 1; i <= 10; i++){
//     console.log('OUTER LOOP:', i);
//     for(let j = 10; j >= 0; j-=2) {
//         console.log('     INNER LOOP:', j)
//     }
// }

// const gameBoard = [
//     [ 4, 32, 8, 4 ],
//     [ 64, 32, 8, 2 ],
//     [ 8, 32, 16, 4 ],
//     [ 2, 8, 4, 2 ],
// ];

// let totalScore = 0;
// for (let i = 0; i < gameBoard.length; i++){
//     let row = gameBoard[i];
//     console.log(row);
//     for(let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     };
// }

// let subreddits = [ 'soccer', 'popheads', 'cringe', 'books'];


// for (let sub of subreddits) {
//     console.log(sub);
// }

// for ( let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// }

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let i = 0;

// while (i <= 10) {
//     console.log(i)
//     i++;
// };

// for (let i = 0; i <= 20; i += 2) {
//     console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//     console.log(i)
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`)
// }

// function isValidPassword (password, username) {
//     if (password.length < 8) {
//         return false;
//     } 
//     else if (password.indexOf(' ') !== -1) {
//         return false;
//     }
//     else if (password.includes(username)) {
//         return false;
//     }
//     else {
//         return true;
//     }

// }

// function averageNum(arr) {
//     let sum = 0
//     for (let i = 0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum/arr.length;
//     return avg;
// }

// function isPangram(str) {
//     let lowerStr = str.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (!lowerStr.includes(char)) {
//             return false;
//         }
//     }
//     return true;
// }

// function difference (x,y) {
//     return x - y;
// };

// function product (x,y) {
//     return x * y;
// };

// function printDay (x) {
//     if (x < 1 || x > 7) {
//         return undefined;
//     } if (x === 1) {
//         return 'Sunday'
//     } if (x === 2) {
//         return 'Monday'
//     } if (x === 3) {
//         return 'Tuesday'
//     } if (x === 4) {
//         return 'Wednesday'
//     } if (x === 5) {
//         return 'Thursday'
//     } if (x === 6) {
//         return 'Friday'
//     } if (x === 7) {
//         return 'Saturday'
//     }
// };

// function lastElement (arr) {
//     if (arr === 0) {
//         return undefined;
//     }
//     return arr[arr.length-1];
// }
    
// function numberCompare (x,y) {
//     if (x === y) {
//         return ('Numbers are equal')
//     }
//     else if (x > y) {
//         return ('First is greater')
//     }
//     else {
//         return ('Second is greater')
//     }
// };

// function singleLetterCount (str, char) {
//     let lowerStr = str.toLowerCase();
//     let lowerChar = char.toLowerCase();
//     let counter = 0;

//     for (let i = 0; i < lowerStr.length; i++) {
//         if (lowerStr[i] === lowerChar) {
//             counter ++ 
//         }
//     }
//     return counter;
// };

// function multipleLetterCount (str) {
//     let lowStr = str.toLowerCase();
//     let obj = {};

//     for (let i = 0; i < lowStr.length; i++) {
//         if (obj[lowStr[i]] === undefined) {
//             obj[lowStr[i]] = 1;
//         } else {
//             obj[lowStr[i]]++;
//         }
//     }
//     return obj;
// }

// function arrayManipulation (arr, comm, loc, val) {
//     if (comm === 'remove' && loc === 'end') {
//         return arr.pop();
//     } else if (comm === 'remove' && loc === 'beginning') {
//         return arr.shift();
//     } else if (comm === 'add' && loc === 'beginning') {
//         arr.unshift(val);
//         return arr;
//     } else if (comm === 'add' && loc === 'end') {
//         arr.push(val);
//         return arr;    
//     }
// };

// function isPalindrome(str) {
//     let lowStr = str.toLowerCase();
//     if (lowStr === lowStr.split('').reverse().join('')) {
//         return true;
//     } else {
//         return false;
//     }
// }

// //Rock Paper Scissor


// function RPS () {

//     function determineComputerChoice(num) {
//         if (num <= .33) {
//             return 'rock';
//         } else if (num <= .66) {
//             return 'paper';
//         } else {
//             return 'scissor'
//         }
//     };
    
//     let userChoice = prompt("Choose rock / paper or scissor").toLowerCase();
//     let compChoice = determineComputerChoice(Math.random());

//     let answer = ['rock', 'paper', 'scissor'];

//     if (!userChoice || answer.indexOf(userChoice) === -1) {
//         return "Please select a valid option"
//     }

//     if (userChoice === compChoice) {
//         return 'Tie';
//     }

//     else if (userChoice === 'paper' && compChoice === 'scissor') {
//         return 'Scissor beats paper, You lose!';
//     } 
//     else if (userChoice === 'rock' && compChoice === 'paper') {
//         return 'Paper beats rock, You lose!';
//     } 
//     else if (userChoice === 'scissor' && compChoice === 'rock') {
//         return 'Rock beats scissor, You lose!';
//     } 

//     else {
//         return 'You win!'
//     };

// }

