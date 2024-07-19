// Your first function!.3
// function arsenal() {
//     console.log('Saka is the best player');
//     console.log('Declan Rice better be ok');
//     console.log('Raya over Ramsdale');
//     console.log('Saka is the best player');
// }

// arsenal();

// for (let i=0; i < 10; i++) {
//     arsenal();
// }

// Dice Roll Function.4

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice() {
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
//     rollDie();
// }


// intro to arguments

// function greet(nickname) {
//     console.log(nickname)
//     console.log('Hi');
// }

// function greet(nickname) {
//     console.log(`Hi, ${nickname}!`);
// }

// function rollDie() {
//     let roll = Math.floor(Math.random() * 6) + 1;
//     console.log(`Rolled: ${roll}`);
// }

// function throwDice(numRolls) {
//     for(let i = 0; i < numRolls; i++){
//         rollDie();
//     }

// }

// Functions w/ Mulitple Arguments

//num is called parameter

// Function call with arguments 4 and 5
// sum(4, 5); // Outputs 9
// function square(num) {
//     console.log(num * num);
// }

// function sum(x, y) {
//     console.log(x + y);
// }

// function divide(a,b) {
//     console.log(a/b);
// }
//Return 5.8

// function add(x , y) {
//     return x + y;
// }

//once the return is executed everything else doesn't run
// function isPurple(color) {
//     if(color.toLowerCase() === 'purple'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     if(color.toLowerCase() === 'purple'){
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// function isPurple(color) {
//     return color.toLowerCase() === 'purple';
// }

// function containsPurple(arr) {
//     for (let color of arr) {
//         if (color === 'purple' || color === 'magenta') {
//             return true;
//         }
//     }
//     return false;
// }

// passwordValidator Function Challenge #1 

// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

// function isValidPassword(password, username) {
//     if(password.length < 8){
//         return false;
//     }
//     if(password.indexOf(' ') !== -1){
//         return false;
//     }
//     if(password.indexOf(username) !==-1){
//         return false;
//     }
//     return true;
// }

//or you can do it this way...

// function isValidPassword(password, username) {
//     if(
//         password.length < 8 ||
//         password.indexOf(' ') !== -1 ||
//         password.indexOf(username) !==-1
//     ) {
//         return false;
//     }
//     return true;
// }

//Average Function Challenge #2 

// Write a function to find the average value in an array of numbers
//avg([0,50]) //25
//avg([75,76,80,95,100]) //85.2

// function avg(arr) {
//     let total = 0;
//     //loop over each num
//     for (let num of arr) {
//     //add them together
//     total += num;
//     }
//     //divide by number of nums
//     let res = total / arr.length;
//     return res;
// }

//Pangram Function Challenge #3

// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you ignore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

// function isPangram(sentence){
//     let lowerCased = sentence.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if(sentence.indexOf(char) === -1) {
//             return false;
//         }
//     }
//     return true;
// }

// Get Playing Card Function Challenge #4

// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
// ----clubs,spades, hearts, diamonds
//Return both in an object
// function pick(arr){
//     //return random element from arr
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

//     function getCard() {
//     const values = [
//     '2',
//     '3',
//     '4',
//     '5',
//     '6',
//     '7',
//     '8',
//     '9',
//     '10',
//     'J',
//     'Q',
//     'K',
//     'A',
//     ];
    
//     // const valIdx = Math.floor(Math.random() * values.length);
//     // const value = values[valIdx];

//     const value = pick(values);
//     const suits = ['clubs','diamonds','spades','hearts'];
//     const suitsIdx = Math.floor(Math.random() * suits.length);
//     const suit = suits[suitsIdx];
//     return { value: value, suit: suit};
// }

// function difference(a,b) {
//     return a-b;     
// }

// function product(a,b){
//     return a * b
// }

// function printDay(num) {
//    let dates = {
//     1 : "Monday",
//     2 : "Tuesday",
//     3 : "Wednesday",
//     4 : "Thursday",
//     5 : "Friday",
//     6 : "Saturday",
//     7 : "Sunday",
// };
// return dates[num];
// }

// function lastElement(arr) {
//     return arr[arr.length-1];
// }

// function numberCompare(x,y) {
// if (x > y){
//     return "First is greater";
// } else if (y > x) {
//     return "Second is greater";
// }   else {
//     return "Numbers are equal";
// }
// }

// function singleLetterCount(word,letter) {
//     let finalCount = 0;
//     for(let i=0; i< word.length; i++){
//         if(word[i].toLowerCase() === letter.toLowerCase()){
//             finalCount++;
//         }
//     }
//     return finalCount;
// }


// function singleLetterCount(str1, letter){
//     let finalCount = 0;
//     for(let i=0; i< str1.length; i++){
//       if(str1[i].toLowerCase() === letter.toLowerCase()){
//         finalCount++;
//       }
//     }
//     return finalCount;
//   }

//   function countLetter(word, letter) {
//     // Convert both the word and the letter to lowercase for case-insensitive comparison
//     const lowercaseWord = word.toLowerCase();
//     const lowercaseLetter = letter.toLowerCase();
  
//     // Initialize a counter to keep track of the letter count
//     let count = 0;
  
//     // Iterate through the characters of the word
//     for (let i = 0; i < lowercaseWord.length; i++) {
//       // Check if the current character matches the lowercase letter
//       if (lowercaseWord[i] === lowercaseLetter) {
//         count++;
//       }
//     }
  
//     return count;
//   }
  
//   function multipleLetterCount(str1,letter) {
//     const lowercaseWord = str1.toLowerCase();
//     const lowercaseLetter = letter.lowerCase();
//     let count = 0
//     for ( let i = 0; i<lowercase)
//   }

//   function singleLetter() {

//   }


//   let name = 'Orlando Castaneda';
//   let dayOfBirth='5/9/92';
//   first one takes precedence 
//   let favoriteColor = "insert"

// function difference(a,b) {
//     return a-b;
// }

// function product(a,b) {
//     return a*b;
// }

// function printDay(num) {
//     let dates = {
//         1: "Monday",
//         2: "Tuesday",
//         3: "Wednesday",
//         4: "Thursday",
//         5: "Friday",
//         6: "Saturday",
//         7: "Sunday",
//     };
//     return dates[num];
// }

// function lastElement(arr) {
//     return arr[arr.length-1];
// }

// function removeFromString(inputString, startIndex, numCharactersToRemove) {
//     // Check if the start index is valid
//     if (startIndex < 0 || startIndex >= inputString.length) {
//       return inputString; // Return the original string if the start index is invalid
//     }
  
//     // Calculate the ending index for removal
//     const endIndex = startIndex + numCharactersToRemove;
  
//     // Create a new string by concatenating the parts before and after the removed portion
//     const resultString =
//       inputString.slice(0, startIndex) + inputString.slice(endIndex);
  
//     return resultString;
//   }
  
//   // Example usage:
//   const originalString = "Hello, World!";
//   const newString = removeFromString(originalString, 7, 5); // Remove 5 characters starting from index 7
//   console.log(newString); // Output: "Hello!"

// const people = ['Greg', 'Mary', 'Devon', 'James'];

// let Arsenal = {
//     languages: ['English','Spanish', 'Italian', 'German'],

//     isWinning: true,
//     isTheBest: true,
//     rating: 10,
// };

// function execute(string) {
//     const words = string.split(' ');

// }

// // 

// //
// function highlightObjectProperty (obj, str); {
//     const highlight = [];
//     for (let i = 0; i < obj.length; i++); {
//         let highlight 
//     }

//     return highlightObjectProperty
// }

//vscode named code.js haha I love javascript `Script is the worst ${small} and now I have ${180}

