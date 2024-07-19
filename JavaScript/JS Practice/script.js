// for(let i = 1; i <= 10; i++) {
//     console.log('OUTER LOOP:', i);
//     for(let j = 10; j >= 0; j-=2){
//         console.log('   INNER LOOP', j)
//     }
// }

// const gameBoard = [
//     [ 4, 32, 8, 4],
//     [ 64, 8, 32, 2],
//     [ 8, 32, 16, 4],
//     [ 2, 8, 4, 2 ]
// ];

// let totalScore = 0;
// for(let i = 0; i < gameBoard.length; i++){
//     console.log(gameBoard[i]);
//     let row = gameBoard[i];
//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//     }
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }
// let j = 0;
// while (j <= 5) {
//     console.log(j);
//     j++;
// }

// const target = Math.floor(Math.random() * 10);
// let guess = Math.floor(Math.random() * 10);
// while(guess !== target) {
//     console.log(guess);
//     guess = Math.floor(Math.random() * 10);
// }
// console.log(`Target: ${target} Guess: ${guess}`);
// console.log(`Congrats, you win!`);

// const magicSquare = [
//     [ 2, 7, 6 ],
//     [ 9, 5, 1 ],
//     [ 4, 3, 8 ],
// ];

// for (let i =0; i < magicSquare.length; i++) {
//     let row = magicSquare[i];
//     let sum = 0;
//     for(let j = 0; j < row.length; j++) {
//         console.log(row[j]);
//         sum += row[j];
//     }
//     console.log(`${row} summed to ${sum}`);
// }

// for(let row of magicSquare) {
//     let sum = 0;
//     for(let num of row){
//       sum += num;  
//     }
//     console.log(`${row} summed to ${sum}`);
// }


// const movieReviews = {
//     Arrival : 9.5,
//     Alien : 9,
//     Amelie : 8,
//     'In Bruges' : 9,
//     Amadeus : 10,
//     'Kill Bill' : 8,
//     'Little Miss Sunshine' : 7,
//     Coraline : 8
// };

// // for (let x of movieReviews) {
// //     conasole.log(x);
// // }

// for (let movie of Object.keys(movieReviews)) {
//     console.log(movie, movieReviews[movie]);
// }

// const ratings = Object.values(movieReviews)
// let total = 0;
// for(let r of ratings){
//     total += r;
// }
// total /= ratings.length;
// console.log(total);

//if the condition is true then it'll run

// let rating = 1;

// if (rating === 3) {
//     console.log("You are a superstar!!");
// }
// else if (rating === 2) {
//     console.log("Meets expectations")
// }

// let mama = 1;
// if (mama > 5) {
//     console.log("yo mama so cute...");
// }
// else if (mama === 5) {
//     console.log('YO mama is mid');
// }

// else {
//     console.log('YO mama is uglyyy af');
// }


// let highScore = 1220;
// let userScore = 1067;

// if (userScore >= highScore) {
//     console.log(`Congrats you are the new high score of ${userScore}`);
//     highScore = userScore;
// }

// else if (userScore < highScore) {
//     console.log(`Sorry but your score of ${userScore} is booty flakes and cheese.`);
// }

// let password = "LuckyisthebesteverbetterthanDaniel"

// if (password.length >= 10 || password !== false) {
//     console.log("Your password is valid!");
// }
// else {
//     console.log("Your password is invalid!")
// }

// let password = 'mybussystinks';

// if (password.length >= 8 && password.indexOf(' ') === -1) {
//     console.log('Valid Password');
// }
// else {
//     console.log('Invalid Password')
// }

// let num = 3;

// if(num >= 1 && num <= 10) {
//     console.log('Number is between 1 and 10');
// }
// else {
//     console.log('Please guess a number between 1 and 10');
// }

// let girlfriend = {
//     age : 31,
//     gender : 'female',
//     job : 'sex worker',
//     location : 'New York',
//     name : 'Lindsey',
// }

// if (girlfriend.age <= 18 || girlfriend.age >= 35) {
//     console.log('She is definitely not of age...')
// }
// else {
//     console.log('She is of age');
// }

// if (girlfriend.gender === 'female') {
//     console.log("She's a girl let's goooo.")
// }

// const evenNum = [2, 4, 6, 8,];

// evenNum[1] = 10;

// const patterns = ["stripes", "polka dots", "plaid", "leopard print"];
// const stripes = patterns[0];
// const polkaDots = patterns[1];
// const plaid = patterns[2];
// const leopardPrint = patterns[3];

// let shoppingList = ['cereal', 'cheddar cheese', 'ice'];

// let lottoNums = [45, 23, 11, 45];

// let myCollection = [12, 'dog', NaN, null, true]

// let colors = ['red', 'yellow', 'blue', 'indigo', 'orange', 'pink'];

// shoppingList[1] = 'Sharp Cheese'
// shoppingList[shoppingList.length] = 'Potatoes';

// let topSongs = [
//     'First Time Ever I Saw Your Face',
//     'God Only Knows',
//     'A Day in The LIfe',
//     'Life On Mars',
// ];

// topSongs.push('Fortunate Son');

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [6, 7, 8, 9, 10];

// console.log(array1.concat(array2));

// colors.includes('gray');

// let letters = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G'];

// let animals = ['shark', 'salmon', 'whale', 'bear', 'lizard', 'tortoise'];

// let swimmers = animals.slice(0,3);

// try {
//     throw new TypeError("I don't like you doing that!")
//     //undefined.pop();
// } catch (err) {
//     console.log("what kind of error?", err.name);
//     console.log("what is the message?", err.message);
//     console.log("where did it happen?", err.stack);
    
// }

// function getMonthName(mo) {
//     mo = mo -1; // Adjust month number for array index ( 1 = Jan,)
//     const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 
//     'Sep', 'Oct', 'Nov', 'Dec'];
//     if (months [mo] !== undefined) {
//         return months[mo];
//     } else{

//     }
// }

// function greet() {
//     console.log("Hi!! I LOVE YOU!")
// }

// function diss() {
//     console.log("you are the worst :(")
// }

// function doubleDiss() {
//     diss();
//     diss();
// }

// let funcs = [greet, diss]

// const myFunc = function add(x, y) {
//     return x + y;
// }

// function giveBirth() {
//     console.log("GIVING BIRTH!!!");
//     return function cry() {
//         return "WAAAAAH"
//     }
// }

// function makeMultiplyFunc (num) {
//     return function mult(x) {
//         return num * x;
//     }
// }


// // function repeatThreeTimes(func) {
// //     func();
// //     func();
// //     func();
// // }

// // greet();
// // setTimeout(function() {
// //     console.log("MEOW")
// //     console.log("WOOF")
// //     console.log("OINK")
// // }, 1000)
// // greet();

// function doTwice(func) {
//     func();
//     func();
// }

// doTwice(function(){
//     console.log("STOP BOTHERING ME");
//     console.log("PLEASE GO AWAY");
// })

// // const id = setInterval(diss, 2000);

function countDown (time) {
    let timer = setInterval(function() {
        time --;
        if (time <= 0) {
            clearInterval(timer);
            console.log('DONE!');
        }
        else {
            console.log(time);
        }
    }, 1000)
}

function randomGame () {
    let times = 0;
    let timer = setInterval(function() {
        let num = Math.random();
        times++;
        if (num > .75) {
            clearInterval(timer);
            console.log("It took " + times + " tries.");
        }
    }, 1000)
}