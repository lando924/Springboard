function greet () {
    console.log("heyyy brudda")
};

function diss() {
    console.log('Ya bunz');
}

function repeatThreeTimes(func) {
    func();
    func();
    func();
};

function repeat (num, func) {
    for (let i = 0; i <= num; i++) {
        func();
    }
};

let funcs = [greet, diss];

const myFunc = function add(x, y) {
    return diss();
};

function giveBirth() {
    console.log("GIVING BIRTH!!!");
    return function cry() {
        return "WAHHHHHAHAHHHAHA"
    }
};


function makeMultiplyFunc(num) {
    return function mult(x) {
        return num * x;
    }
};

// const quad = makeMultiplyFunc(4); 
//quad(4) would return 16

//single threaded !!

// greet();
// alert("I AM ALERT!!!");
// diss();


//timers, setTimeout and setInterval


// setTimeout(func, delay);

// greet();
// setTimeout(diss, 3000);
// setTimeout(diss, 1000);
// greet();

// setInterval(function, interval)

// setInterval(diss, 2000)


//anonymous function

// setTimeout(function () {
//     diss();
//     diss();
//     diss();
// }, 1000);

setTimeout(function() {
    let dog = ["Katy","Daniel","Luigi"]
    for (let i = 0; i < dog.length; i++) {
        console.log(dog[i]);
    }
}, 2000);

setTimeout(function () {
    console.log('Meow');
    console.log('Woof');
    console.log('Oink');
},10000);

function doTwice(func) {
    func();
    func();
}

doTwice(diss);

doTwice(function () {
    console.log("Stop bothering me!!!")
    console.log("Please go away brudda!")
})

const printOne = function () {
    console.log(1)
};

//Timers Exercise, countdown

// function countdown(num) {
//     let timer = setInterval(function() {
//         num--;
//         if(num <= 0) {
//             clearInterval(timer);
//             console.log("GAME OVER!!!!")
//         } else {
//             console.log(num);
//         }
//     }, 1000)
// }

function countdown(num) {
    let timer = setInterval(function() {
        num--;
        if (num <= 0) {
            clearInterval(timer);
            console.log("GAME OVER!!!");
        } else {
            console.log(num);
        }
    }, 1000);
}

function randomGame () {
    let counter = 1;
    let timer = setInterval(function (){
        let num = Math.random();
        if (num > .75) {
            clearInterval(timer);
            console.log (`It took ${counter} tries to stop timer!`);
        } else {
            counter ++;
        };
    },1000)
};
