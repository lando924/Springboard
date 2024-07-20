// array.map(function(x) {
//     return x * 2;
// });

// function expression vs declaration

// this is a declaration
// function greet(){

// }

// this is an expression
// const add = function(x,y) {
//     return x + y;
// }
//cannot be named and can only work as function expressions

const add = (x,y) => {
    return x + y;
};
//regular function expression
[ 2, 3, 6, 78, 99, 104, 23 ].reduce(function(max, currNum) {
	return Math.max(max, currNum);
});
//arrowfunction expression
[ 2, 3, 6, 78, 99, 104, 23 ].reduce((max, currNum) => {
	return Math.max(max, currNum);
})

// *****************************
// ARROW FUNCTION "SHORTCUTS"
// *****************************

//no parens around paremeter if there is one
// [1, 2, 3, 4, 5].forEach(n => {
//     console.log(n * 10);
// });

const greet = () => {
    console.log('HELLLLO!')
};

let nums = [1, 2, 3];

//no need for return if it is implicit with no curly braces
let arrSquared = nums.map(n => n ** 2); // [1, 4, 9]

[1,2,3,4,5,6].filter((num) => num % 2 === 0);

const double = (n) => n * 2;

[2,3,4,5,6,7,8].map((n) => {
    if(n % 2 === 0) {
        return 'even';
    }
    return 'odd';
})

//or

// [2,3,4,5,6,7,8].map((n) => (n % 2 === 0 ? 'even' : 'odd'));

const dailyRainTotals = [
	[ 1.2, 0.35, 2.2 ],
	[ 1.7, 0.6, 0.1 ],
	[ 2.5, 0.9, 1.5 ],
];

dailyRainTotals.map((hourlyRainTotals) => {
    return hourlyRainTotals.reduce((sum, inchesOfRain) => {
        return sum + inchesOfRain;
    });
});

// Arrow Function Gotchas

const makeMath = (num) => {
    return {
        square : num * num,
        double : num * 2,
    };
}

//Arrow Functions % this
const cat = {
    name: 'Bubs',
    meow: function () {
        return `${this.name} says MEOW!`
    }
};

//Recap

