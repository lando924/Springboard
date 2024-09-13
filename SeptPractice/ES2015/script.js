//Arrow Functions

// function double(arr) {
//     return arr.map(val => {
//         return val * 2
//     })
// };

const double = arr => arr.map(val => val * 2);


// function squareAndFindEvens(numbers){
//     var squares = numbers.map(num => {
//         return num ** 2;
//     });
//     var evens = squares.filter(square => {
//         return square % 2 === 0;
//     });
//     return evens;
// }


const squareAndFindEvens = numbers => numbers.map(val => val ** 2).filter(square => square % 2 === 0)

//rest/spread Operator Exercises

function filterOutOdds() {
    var nums = Array.prototype.slice.call(arguments);
    return nums.filter(function(num) {
      return num % 2 === 0
    });
};


const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const arr3 = [5, 6, 7];

const arr4 = [...arr1, ...arr2, ...arr3];

function multiplyAll(...nums) {
    return nums.reduce((current, multiple) => current * multiple ,1)
}

// function findMin (...nums) {
//     return (Math.min(...nums));
// }

const findMin = (...nums) => Math.min(...nums)

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(val => val * 2)]

const removeRandom = (items) => {
    let i = Math.floor(Math.random() * items.length);
    return [...items.slice(0, i), ...items.slice(i + 1)];
}

const extend = (array1, array2) => [...array1, ...array2];

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj};
    newObj[key] = val;
    return newObj;
};

const removeKey = (obj, key) => {
    let newObj = {...obj};
    delete newObj[key];
    return newObj;
}

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

const update = (obj, key, val) => {
    const newObj = {...obj};
    newObj[key] = val;
    return newObj;
}

//Object Enhancements Exercise
function createInstructor(firstName, lastName){
    return {
      firstName,
      lastName,
    }
}

let favoriteNumber = 42;

// let instructor = {
//     firstName: 'Colt',
//     [favoriteNumber]: 'That is my favorite!'
// }

let instructor = {
    firstName: "Colt",
    sayHi () {
        return "Hi!";
    },
    sayBye () {
        return this.firstName + ' says bye!!'
    }
}

function createAnimal(species, verb, noise) {
    return {
        species,
        [verb]() {
            return noise;
        }
    };
}


//Destructing Exercise

//Object Destructuring 1

// let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
// let {numPlanets, yearNeptuneDiscovered} = facts;

// console.log(numPlanets); // 8;
// console.log(yearNeptuneDiscovered); // 1846;

//Object Destructing 2

let planetFacts = {
    numPlanets: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets, ...discoveryYears} = planetFacts;
  
console.log(discoveryYears); // {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

//Object Destructuring 3

function getUserData({firstName, favoriteColor="green"}){
    return `Your name is ${firstName} and you like ${favoriteColor}`;
  }
  
  getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // 'Your name is Alejandro and you like purple'
  getUserData({firstName: "Melissa"}) // 'Your name is Melissa and you like green'
  getUserData({}) // 'Your name is undefined and you like green'

//Array Destructuring 1

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // Maya
console.log(second); // Marisa
console.log(third); // Chi

//Array Destructuring 2

let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
    "Raindrops on roses",
    "whiskers on kittens",
    "Bright copper kettles",
    "warm woolen mittens",
    "Brown paper packages tied up with strings"
  ]
  
  console.log(raindrops); // 'Raindrops on roses'
  console.log(whiskers); // 'whiskers on kittens'
  console.log(aFewOfMyFavoriteThings); // ['Bright copper kettles','warm woolen mittens',Brown paper packages tied up with strings']

//Array Destructuring 3

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // [10, 30, 20]

//Assigning Variables to Object Properties

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {a, b} = obj.numbers;

//ES5 Array Swap

// [arr[0],arr[1]] = [arr[1], arr[0]];

//raceResults Function

const raceResults = ([first, second, third, ...rest]) =>({first, second, third, rest});



//Maps and Sets Exercise

// Quick Question #1

new Set([1,1,2,2,3,4]);
// return {1,2,3,4}

// Quick Question #2

[...new Set("referee")].join("")

// 'ref'

// Quick Question #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);

// m {  0: {Array(3) => true}
//      1: {Array(3) => false}

// hasDuplicate
// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

hasDuplicate([1,3,2,1]) // true
hasDuplicate([1,5,-1,4]) // false

const hasDuplicate = arr => new Set(arr).size !== arr.length;

// vowelCount
// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.
vowelCount('awesome') // Map { 'a' => 1, 'e' => 2, 'o' => 1 }
vowelCount('Colt') // Map { 'o' => 1 }

function isVowel(char) {
    return 'aeiou'.includes(char);
};

function vowelCount (str)  {
    const vowelMap = new Map();
    for (let char of str) {
        let lowerCaseChar = char.toLowerCase();
        if (isVowel(lowerCaseChar)) {
            if(vowelMap.has(lowerCaseChar)) {
                vowelMap.set(lowerCaseChar, vowelMap.get(lowerCaseChar) + 1);
            } else {
                vowelMap.set(lowerCaseChar, 1)
            }
        }
    }
    return vowelMap;
};
