// function greet() {
//     console.log('Hi, I love you!')
// }
// function diss() {
//     console.log("You're the worst everrr");
// }

// function doubleDiss(){
//     diss();
//     diss();
// }

// let funcs = [greet, diss];

// const myFunc = function add(x, y) {
//     return x + y;
// }


// function giveBirth() {
//     console.log('GIVING BIERTH!!!!')
//     return function cry(){
//         return "WAHHHHH"
//     }
// }

// function makeMultiplyFunc(num) {
//     return function mult(x) {
//         return num * x;
//     }
// }

//SINGLE THREADED!

// greet();
// setTimeout(function() {
//     diss ();
//     diss ();
//     diss ();
// }, 1000);
// greet();

// setTimeout(function() {
//     console.log('Meow I hate cats Woof')
//     console.log('Meow I hate cats Woof')
//     console.log('Meow I hate cats Woof')
// }, 5000);

// function doTwice(func) {
//     func();
//     func();
// }

// doTwice(function() {
//     console.log("stop bothering me")
//     console.log("Wait Come Back ")
// })

// const printOne = function () {
//     console.log(1)
// }



// const id = setInterval(diss, 2000);




// function repeatThreeTimes(func) {
//     func();
//     func();
//     func();
// }

// function repeat(num, func) {
//     for (let i = 0; i < num; i++) {
//         func();
//     }
// };

function countdown(num) {
    if (num > 0) {
        console.log(num);
        setTimeout(function() {
            countdown(num - 1);
        }, 1000) 
    } else {
        console.log('DONE!')
    };
}

function randomGame () {
    let counter = 1;
    let interval = setInterval(function() {
        let random = Math.random()
        if (random <= .75) {
            counter++;
        } else {
            clearInterval(interval);
            console.log(`It took ${counter} tries to get a higher number than .75`);
        }
    }, 1000);
}