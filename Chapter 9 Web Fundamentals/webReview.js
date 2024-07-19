// let x = 20;

// if (x > 10) {
//     console.log("x is greater than 10");
// } else if (x === 20) {
//     console.log("x is equal to 10");
// } else {
//     console.log('x is less than 10');
// };

// function compareHeight(h) {
//     if (h > 5.10) {
//         console.log("You're above average guy.")
//     } else {
//         console.log("You're pretty short guy...")
//     }
// };

// answer = 25;

// x > answer ? console.log('too high') : console.log("too low");

// let guess = 15;

// let correctGuess = (guess === 15) ? "you're correct" : "Incorrect";

// console.log(correctGuess);

// //? is a ternary operator

// let random = Math.random();

// if (random > 0.5) {
//     console.log("Over 0.5")
// } else {
//     console.log("Under 0.5")
// };

// let friends = ["Courtney", "Huff", "Mike", "Sam", "Staples"];

// for (let i = 1; i <= 10; i += 2) {
//     console.log(i);
// };

// for (let i = 2; i <= 50; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i<=friends.length; i++) {
//     console.log(friends[i]);
// };

// for (let friend of friends) {
//     console.log(friend);
// };



// function loop() {
//     let str = "pancakes";
//     let includesK = false;
//     for (let i = 0; i< str.length; i++) {
//     if (str[i] === 'k') {
//         includesK = true;
//     }
//     }
// };

// let reversed = '';

// for (let i = friends.length - 1; i>= 0; i--) {
//     reversed += friends[i] + " ";
// };

// let examScores = [98, 77, 84, 91, 57, 66];

// for (let i = 0; i < examScores.length; i++) {
//     console.log(i, examScores[i]);
// }

// const myStudents = [
//     {
//         firstName: 'Isiah',
//         grade: 25
//     },
//     {
//         firstName: 'Cody',
//         grade: 99
//     },
//     {
//         firstName: 'Sam',
//         grade: 87
//     },
//     {
//         firstName: 'Jericho',
//         grade: 69
//     },
//     {
//         firstName: 'TJ',
//         grade: 55
//     },

// ];

// // for(let i = 0; i < myStudents.length; i++) {
// //     let student = myStudents[i];
// //     console.log(student);
// //     // console.log(`${myStudents[i].first}`)
// // }

// let total = 0;

// for(let i = 0; i < myStudents.length; i++) {
//     let student = myStudents[i];
//     total += student.grade;
// }
// console.log(total/myStudents.length);



// for (let i = 0; i < friends.length; i++) {
//     console.log([i]);
// };

// for(let i = 2; i < friends.length; i++) {
//     console.log(friends[i]);
// };

// for (let num = 1; num <= 20; num++) {
//     console.log(`${num} x ${num} = ${num * num}`);
// };

// let word = 'stressed';
// let reversedWord = ""
// for (let i = word.length-1; i >= 0; i--) {
//     reversedWord += word[i];
// };

// for (let i = 1; i <= 10; i++) {
//     console.log("OUTER LOOP:", i);
//     for (let j = 10; j >= 0; j -= 2) {
//         console.log('   Innerloop:', j);
//     }
// };

// let gameBoard = [
//     [ 4, 32, 8, 4],
//     [ 64, 8, 32, 2],
//     [ 8, 32, 16, 4],
//     [ 2, 8, 2, 8]
// ];

// let totalScore = 0;
// for (let i = 0; i <gameBoard.length; i++) {
//     let row = gameBoard[i];
//     for (let j = 0; j < row.length; j++) {
//         totalScore += row[j];
//     }
// }

// let k = 0;
// while (k <= 20) {
//     console.log(k);
//     k++;
// };

// let j = 0;
// while(j <=5) {
// console.log(j);
// j++;
// }

// const target = Math.floor(Math.random() * 10);
// let guesss = Math.floor(Math.random() * 10);

// while(guesss !== target){
//     console.log("Guess: " + guesss);
//     console.log("Answer: " + target);
//     guesss = Math.floor(Math.random() * 10);
// };
// console.log(`Target: ${target} Guess: ${guesss}`);


// const targetNumber = 6;
// let currentRoll = '';

// while(currentRoll !== targetNumber) {
//     currentRoll = Math.floor(Math.random() * 6) + 1;
//     console.log("Current roll:" , currentRoll);
// }
// console.log("Target number reached! Game over. ");

// //for of loop
// //for (variable of iterable) {
// //     statement
// // }

// let subreddits = ['soccer', 'popheads', 'cringe', 'books']
// ;
// for (let i = 0; i < subreddits.length; i ++) {
//     console.log(subreddits[i]); 
// };

// for (let sub of subreddits){
//     console.log(sub);
// };

// for(let char of 'cockadoodledoo') {
//     console.log(char.toUpperCase());
// };

// const arsenal = {
//     players: ['Walcott', 'Fabregas', 'Arshavin', 'Gabriel', 'Saliba'],
//     manager: "Arteta",
//     stadium: 'Emirates',
//     titles: 3,
// };

// for (let ars of arsenal.players) {
//     console.log(ars);
// };

// const magicSquare = [
//     [2,7, 6],
//     [9, 5, 1],

// ]


// for (i = 0; i <= 10; i++) {
//     console.log(i);
// };

// let start = 0;
// while (start <= 10){
//     console.log(start);
//     start++;
// };

// for (i = 0; i <= 20; i += 2) {
//     console.log(i);
// };

// let starter = 1;
// while (starter <= 20){
//     console.log(starter);
//     starter+=2;
// };

// for (i = 10; i >= 0; i--) {
//     console.log(i);
// };

// function fizzBuzz(n) {
//     // Write your code here
    
//     let result = [];
    
//     for (let i = 0; i <= n; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             result.push("FizzBuzz");
//         } else if (i % 3 === 0) {
//             result.push("Fizz");
//         } else if (i % 5 === 0) {
//             result.push("Buzz");
//         } 
//         else {
//             result.push(i);
//         }
//     }
//     return result;
// };

// function grumpus() {
//     console.log("I love you.")
//     console.log("I hate you.")
//     console.log("I wuv you.")
// };

// for (let i = 0; i <= 50; i++) {
    //     grumpus();
    // };
    
// function diceRoll (){
//    let roll = Math.floor(Math.random() * 6) + 1;
//    console.log(roll);
// };

// function rollDice(n) {
//   for (let i = 0; i <= n; i++) {
//     diceRoll();
//   } 
// // };

// function square(num) {
//     console.log(num * num);
// };
// //the order does matter
// function sum(x,y) {
//    return x + y;
// };

// function divide (a, b) {
//     console.log(a / b);
// };

// function isValidPassword(password,username) {
//     if (password.length < 8 || password.indexOf(' ') !== -1 || password.indexOf(username) !== -1){
//         return false;
//     }
//     return true;
// };

// function avg(arr) {
//     let sum = 0;
//     //loop over each num
//     for(let num of arr){
//         sum += num;
//     }
//     //add them together
//     //divide by number of nums

//     return sum / arr.length;
//     }

// function isPangram(str) {
//     let alpha = 'abcdefghijklmnopqrstuvwxyz';
//     let sent = str.toLowerCase;

//     let result = sent.includes(alpha);

//     return result;
// };

// function isPangram(str) {
//     let lowerCased = str.toLowerCase();
//     for (let char of 'abcdefghijklmnopqrstuvwxyz') {
//         if (lowerCased.indexOf(char) === -1) {
//             return false;
//         }
//     }
//         return true;
// };

// function pick(arr) {
//     const idx = Math.floor(Math.random() * arr.length);
//     return arr[idx];
// }

// function getCard() {
//     const values = 
//     ['2','3','4','5','6','7','8','9','10','J',
//     'Q','K','A'];
    
//     const suits = [ 'clubs', 'spades', 'hearts', 'diamonds'];

//     return { value: pick(values), suit: pick(suits) };

// }

// //difference
// function difference(x,y) {
//     return x - y;
// };

// //product
// function product(x,y) {
//     return x * y;
// };

// //printDay
// function printDay(x) {
//     if (x === 1) {
//         console.log('Sunday');
//     } else if (x === 2) {
//         console.log('Monday');

//     } else if (x === 3) {
//         console.log('Tuesday');
//     } 
//      else if (x === 4) {
//         console.log('Wednesday'); 
    
//     } else if (x === 5) {
//         console.log('Thursday');
 
//     } else if (x === 6) {
//         console.log('Friday');
//     } 
//      else if (x === 7) {
//         console.log('Saturday');
//     } else {
//         return ;
//     }
// };

// //lastElement
// function lastElement(arr) {
//     if (arr.length === 0){
//         return undefined;
//     } else {
//         return arr[arr.length - 1];
//     }
// };

// //numberCompare
// function numberCompare(x,y) {
//     if (x === y) {
//         return "Numbers are equal"
//     } else if (x > y) {
//         return "First is greater"
//     } else {
//         return "Second is greater"
//     }
// };

// //singleLetterCount
// function singleLetterCount(str, letter) {
//     let lowerStr = str.toLowerCase();
//     let lowerLetter = letter.toLowerCase();
//     let counter = 0;

//     for (i = 0; i <= lowerStr.length; i++) {
//         if (lowerStr[i] === lowerLetter){
//             counter ++;
//         }
//     }
//     console.log(counter);
// };

// multipleLetterCount 
// function multipleLetterCount(str){
//     str = str.toLowerCase();
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         console.log({obj},str[i]);
//         let currentLetter = str[i];
//         obj[currentLetter] = (obj[currentLetter] || 0) + 1;
      
//     }
//     console.log({truth: obj['f'], falsey: obj['z']})
//     return obj;
// };

// //arrayManipulation
// function arrayManipulation(arr, comm, loc, val) {
//     if (comm === "remove" && loc === "end") {
//         let remove = arr.pop();
//         return remove;
//     } else if (comm === "remove" && loc === "beginning") {
//         let beginning = arr.shift();
//         return beginning;
//     } else if (comm === "add" && loc === "beginning") {
//         let beginning = arr.unshift(val);
//         return arr; 
//     } else if (comm === "add" && loc === "end") {
//         let addition = arr.push(val);
//         return arr;
//     } 
// };

// //isPalindrome wrong

// function isPalindrome(str) {
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
// }

// //Rock Paper Scissor

// function rps() {
//     function determineComputer(num) {
//         if (num <= .33) return "rock";
//         else if(num <= .66) return "paper";
//         return "scissor";
//     } 
//     let userChoice = prompt("Choose rock/ paper or scissor").toLowerCase();

// }

// [1, 2, 3, 4]

// function findMax(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     let max = arr[0];
//     for (let i = 1; i <= arr.length; i++) {
//         console.log({max})
//         if (arr[i] > max) {
//             console.log({max, currNbr:arr[i]})
//             max = arr[i];
//         } 
//     }
//     return max;
// };

// function findMin(arr) {
//     if (arr.length === 0) {
//         return null;
//     }
//     let min = arr [0];
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) {
//             min = arr[i];
//         }
//     }
//     return min;
// }



// function extractEvenNumbers(arr) {
//     let result = arr.slice();
//     result = result.filter(num => num % 2 === 0);
//     return result;
// }

// const cities = ["San Francisco", "New York", "Chicago", "Miami", "Dallas"];
// for (let i = 0; i < cities.length; i++) {
//     console.log(cities[i]);
// };

// for (let i = cities.length-1; i >= 0; i--){
//     console.log(cities[i]);
// };

// function bestCity() {
//     for (let city of cities) {
//     return city;
//     }
// };



//Sum of Array: I got wrong , wrong syntax 540
//Write a function that takes an array of numbers and returns the sum of all the numbers.

// function sum(arr) {
//     total = 0;
//     for (let i = 0; i < arr.length; i++) {
//          total += arr[i]      
//     }
//     return total;
// };

// //Even Numbers: correct 2nd try no solution
// //Write a function that takes an array of numbers
// //and returns a new array containing only the even numbers.
// function evensOnly(arr) {
//     evens=[];
//     for (let i = 0; i < arr.length; i++) {
//        if (arr[i] % 2 === 0) {
//         evens += arr[i];
//        }
//     }
//     return evens;
// };

// //Object Properties:
// //Create an object representing a person with properties like name, age, and city. 
// //Write a function to print out all the properties of that person.
// // let person = {name: "Orlando", age: 31, city: "Bethpage"};

// // function me(obj) {
// //     return obj;
// // };

// //Factorial Function:
// // Write a function that takes an array and returns a 
// // new array with the elements in reverse order.
// function factorial(num) {
//     let result = 1;
//     for (let i = num; i >= 1; i--) {
//         result *= [i];
//     }
//     return result;
// };

// //Reverse Array:
// //Write a function that takes 
// //an array and returns a new array with the elements in reverse order.
// function reverseArray(arr) {
//     reverse = [];
//     for (let i = arr.length -1; i >= 0; i--) {
//         reverse.push(arr[i]);
//     }
//     return reverse;
// };

// //Object Looping: help me with this
// // Create an object with several key-value pairs. Write a loop 
// // to iterate through the object and print each key-value pair.
// let person = {name: "Orlando", age: 31, city: "Bethpage", gender: "M"};

// function loop(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             console.log(`${key}: ${person[key]}`);
//         }
//     }
// };

// //Fibonacci Sequence
// //Write a function that generates the first n numbers in the Fibonacci 
// // sequence.


// function fibonacci(n) {
//     let result = [0,1];
//     for (let i = 2; i < n; i++) {
//         result.push(result[i - 1] + result[i - 2]);
//     }
//     return result;
// };

// //While Loop
// //Write a while loop that prints the numbers from 1 to 10.


// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// };

// // const target = Math.floor(Math.random() * 10);
// // let guess = Math.floor(Math.random() * 10);
// // while(guess !== target) {
// //     console.log(`Target: ${target} Guess: ${guess}`);
// //     guess = Math.floor(Math.random() * 10);
// // };
// // console.log(`Target: ${target} Guess: ${guess}`);
// // console.log("Congrats on being a stud!");


// //Object Array
// //Create an array of objects, where each object represents
// //a person with properties like name, age, and city. 
// //Write a function to print out the names of all people in the array.

// let classRoom = [
//     {
//         name: "Paco",
//         age: 14,
//         city: "New York"
//     },
//     {
//         name: "Suzy",
//         age: 16,
//         city: "Boston"
//     },
//     {
//         name: "Santi",
//         age: 11,
//         city: "Dallas"
//     },
//     {
//         name: "Roberto",
//         age: 14,
//         city: "Miami"
//     },
// ];

// function latinoGang(arr) {
//     for(let i = 0; i < classRoom.length; i++){
//         console.log(arr[i].name);
//     }
// };


// //Multiplication Table:
// //Write a function that takes a number as input and prints its 
// //multiplication table up to 10.

// function multiplicationTable(num) {
//     for (let i = 1; i <= 10; i++) {
//         let result = num * i;
//         console.log(`${num} * ${i} = ${result}`);
//     }
// };

// let arr = ['a', 'b', 'c', 'd', 'e'];

// for (let n of arr) {
//     console.log(n);
// };

// for (let n in arr) {
//     console.log(n);
// };

// // Problem: Calculate the Sum of Array Elements
// // Write a function that takes an array of numbers as an argument and 
// //returns the sum of all the elements in the array.

// function calculateSum(arr) {
//     let sum = 0
//     for (let num of arr) {
//         sum += num;
//     } 
//     return sum;
// };

// // Problem: Count Vowels in a String

// // Write a function that takes a string as an argument and returns the 
// //count of vowels (a, e, i, o, u) in that string.

// function countVowels(str) {
//     let vowelCount = 0;
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     for (let char of str.toLowerCase()) {
//         if (vowels.includes(char)) { 
//         vowelCount ++;
//         }
//     }
//     console.log(`There's ${vowelCount} many vowels in hurrr.`); 
// };

// // Problem: Find the Maximum Element in an Array

//  Write a function that takes an array of numbers as an argument and returns the maximum 
//  element in the array. Use a for...of loop to iterate through the array and 
//  compare elements to find the maximum.

// function findMax(arr) {
//     let max = arr[0];
//     for (let num of arr) {
//         if (num > max) {
//             max = num;
//         }
//     }
//     return max
// };


// //loop through objects, for in loops, for of loops,

// let people = {name: "Orlando", age: 31, city:"Dallas", gender: "Male"};

// let dogs = {}

// let matrix = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
//   ]
  
//   for (let i = 0; i < matrix.length; i++) {
//     let subArr = matrix[i];
  
//     for (let j = 0; j < subArr.length; j++) {
  
//       console.log(subArr[j]);
//     }
//   }

// Arrays, Objects, Functions Mastery Questions

// let myArray = ['apple', 'orange', 'banana'];

// //myArray[1];

// //myArray[2] = 'grape';

// function loopyDoop(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         console.log([i]);
//     }
// };


// // let newArray = myArray;

// let myObject = {name: 'John', age: 25};
 
// // myObject.age = 26

// // let newObject = myObject;

// for (let key in myObject) {
//     console.log(key, myObject[key]);
// };

// console.log([] === []); //it's false 

// function add (a, b) {
//     return a + b;
// }

// let calculator = {multiply: function(x,y){
//     return x * y;
//     }
// };

// let nfl = {miami:'dolphins', kc:'chiefs',dallas:'cowboys'};

// function loopydoopy() {
//     for (let key in nfl) {
//         console.log(key);
//         }
// };

// function logPropertyNames() {
//     for(let propertyName in nfl) {
//         console.log(propertyName);
//     }
// };

// function myDogsBro() {
//     for(let teams in nfl) {
//         console.log(teams);
//     }
// }

// for(let key in nfl) {
//     console.log(nfl[key]);
// }

//  let plStandings = {first:'Arsenal', second:'Chelsea', third:'Man United'};

// for(let key in plStandings) {
//     console.log(key, plStandings[key]);
// };

// let subjects = {first:'Math', second: 'Social Studies', third: 'Gym'};

// for (let key in subjects) {
//     console.log(key, subjects[key]);
// };

// for (let sub in subjects) {
//     console.log(subjects[sub]);
// };

// for (let sub in nfl) {
//     console.log(sub, nfl[sub])
// };

// for (let key of Object.keys(nfl)) {
//     console.log(key, nfl[key]);
// }

// for (let key of Object.keys(plStandings)) {
//     console.log(plStandings[key]);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log('Outer Loop:', i);
//     for (let j = 10; j >= 0; j-=2){
//         console.log('   Inner Loop:', j)
//     }
// };

// for ( let i = 10; i >= 1; i--) {
//     console.log(i);
//     for (let j = 1; j <=10; j++) {
//         console.log('    ', j);
//     }
// };

// const gameBoard = [
//     [4, 32, 32,4],
//     [8, 8, 32,4],
//     [4, 4, 64,2],
//     [16, 8, 32,64]
// ];

// function totalScore() {
//     let score = 0;
//     for (let i = 0; i < gameBoard.length; i++) {
//         let row = gameBoard[i];
//         for(let j = 0; j < row.length; j++){
//         score += row[j];
//         }
//     }
//     return score;
// }
// //         for (let j = 0; j <= j.length; j++) {
// //             let score = [j++]
// //         }
// //     }
// // }

// //while loops

// let k = 0;
// while(k <= 5) {
//     console.log(k);
//     k++;
// };

//guessing game that random number game

// const randomNum = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);

// while (guess !== randomNum) {
//     console.log('This is my guess: ', guess);
//     guess = Math.floor(Math.random() * 10);
//     console.log('This is the answer: ', randomNum);
// }
// console.log(`Target:${randomNum} Guess: ${guess}`)
// console.log(`CONGRATS YOU WIN!!`);

// let subreddits = ['soccer', 'basketball', 'baseball', 'football'];

// for (let i = 0; i < subreddits.length; i++) {
//     console.log(subreddits[i]);
// };

// for (let sub of subreddits) {
//     console.log(sub);
// }

// for (let char of 'cockadoodledoo'){
//     console.log(char.toUpperCase());
// }

// for (let char of 'Arsenal'){
//     console.log(char);
// }


// const magicSquare = [
//     [2, 7, 6],
//     [9, 5, 1],
//     [3, 4, 8],
// ];

// for (let i = 0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j < row.length; j++) {
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// };

// for(let row of magicSquare) {
//     let sum = 0;
//     for(let num of row){
//         sum += num;
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// const words1 = ['mail', 'milk', 'bath', 'black'];
// const words2 = ['box', 'shake', 'tub', 'berry'];

// for (let i = 0; i < words1.length; i++) {
//     console.log(`${words1[i]}${words2[i]}`);
// }


// let userInput = prompt("Enter a positive integer please:");

// let number = parseInt(userInput);

// if (Number.isInteger(number) && number > 0) {
//     let countdown = number;
//     while (countdown >= 1) {
//         console.log(countdown);
//         countdown --;
//     }
    
// };

// let whatIsAnObject = {
//     one: "One",
//     two: "Two",
//     three: "Three"
// }

// let whatIsAnArray = ['this', 'is', 'an', 'array'];



// for (let i = 0; i < whatIsAnArray.length; i++) {
//     console.log(whatIsAnArray[i]);
// }

// for (let key in whatIsAnObject) {
//     console.log(key, whatIsAnObject[key]);
// };

// const city = {
//     name: "San Francisco",
//     state: "California",
//     population: 871000,
//     bridges: 2
//   }
  
//   for (let key in city) {
//     console.log(key, city[key]);
//   }
  
//   // For...of loops don't work on objects!

// const movieReviews = {
//     Arrival: 9.5,
//     Alien:   9,
//     Amelie: 8,
//     'In Bruges': 9,
//     Amadeus: 10,
//     'Kill Bill': 8.5,
//     'Step Brothers': 9,
//     Caroline: 7.5
// };

// for (let x of movieReviews) {
//     console.log(x);
// };
//doesn't work duh

// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// };

// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews);
// let total = 0;
// for (let r of ratings){
//     total += r;
// }
// let avg = total / ratings.length;
// console.log(avg);

// function sumMultiples (num) {
//     result = 0;
//     for (let i = 0; i <= num; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i;
//         }
//     }
//     return result;
// };

// function palindrome(str) {
//     return str.toLowerCase().split('').reverse().join('') === str.toLowerCase();
// };

// function fizzBuzz () {
//     let arr = [];
//     for (let i = 1; i <= 100; i++) {
//         if (i % 3 === 0 && i % 5 === 0) {
//             arr.push('FizzBuzz');
//         }
//         else if (i % 3 === 0) {
//             arr.push('Fizz');
//         } else if (i % 5 === 0) {
//              arr.push('Buzz'); 
//         } else {
//             arr.push(i);
//         }
//     }
//     return arr;
// };

// function anagram (str1, str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     } else if (str1.toLowerCase().split('').sort().join('') === str2.toLowerCase().split('').sort().join('')) {
//         return true;
//     } else {
//         false;
//     }
// };

// let arr = ['a', 'b', 'c', 'd'];

// for (let n of arr) {
//   // what will n be?
//   console.log(n);
// }


// for (let n in arr) {
//   // what will n be?
//   console.log(n);
// }

// let calculator = {
//     add(num1, num2) {
//         return num1 + num2;
//     },
//     subtract(num1, num2) {
//         return num1 - num2;
//     },
// }

// const square = 2 * 19

// function triangle(y) {
//     return y * y;
// }

// arr = [2, 3, 5, 2, 4, 6]

// let i = 0;

// while (i < arr.length) {
//     console.log(arr[i]);
//     i++;
// }

// let matrix = [
//     ['a', 'b', 'c'],
//     ['d', 'e', 'f'],
//     ['g', 'h', 'i'],
// ];

// for (let i = 0; i < matrix.length; i++) {
//     let subArr = matrix[i];
//     for (let j = 0; j < subArr.length; j++) {
//         console.log(subArr[j]);
//     }
// }

// let z = 0;

// while (z <= 10) {
//     console.log([z]);
//     z++;
// };

// k = 20;

// while (k < arr.length) {
//     console.log([k]);
//     k++
// }

// function printReceipt (product, qty, price) {
//     return `${product} * ${qty} = ${qty * price}`
// };

//  let colors = ['red', 'teal', 'cyan', 'yellow'];
// //  for (let i = 0; i < colors.length; i++) {
// //     console.log(colors[i]);
// //  }
// for (let color of colors) {
//     console.log(color);
// };

// for (let color of colors) {
//     console.log(color);
// };

// for (let i of colors) {
//     console.log(i);
// }

// for (let char of "PURPLE RAIN") {
//     console.log(char);
// }

// const chicken = {
//     name: 'Lady Gray',
//     age: 4,
//     color: 'Black',
// };

// for (let prop in chicken) {
//     console.log(prop, chicken[prop]);
// }

//isPalindrome

// function isPalindrome(arr) {
//     if (arr === arr.split('').reverse().join('')) {
//         return true;
//     } else {
//         return false;
//     };
// };

