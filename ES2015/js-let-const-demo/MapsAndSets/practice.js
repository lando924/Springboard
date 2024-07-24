//forEach and Arrow Function

// const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(val => console.log(val * 2))

//map and Destructuring

const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
  ];

const formattedPeople = people.map(({name, age}) => `Name: ${name}, age: ${age}`)

//filter and Arrow Functions

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
// const evenNumbers = numbers.filter(val => val % 2 === 0);


//some and Spread Operator
const arr1 = [5, 10, 15];
const arr2 = [20, 25, 30];

const newArr = [...arr1, ...arr2];

newArr.some(val => val > 20);

//every and Arrow Functions
const strings = ['apple', 'banana', 'cherry', 'date'];

strings.every(val => val.length > 3);

//find and Object Enhancements
const books = [
    { title: 'Book A', rating: 3.5 },
    { title: 'Book B', rating: 4.7 },
    { title: 'Book C', rating: 4.2 }
  ];

const rating = books.find(({rating}) => rating > 4);

console.log(rating);

//findIndex and arrow functions
// const numbers = [10, 20, 30, 40, 50, 60, 70];

numbers.findIndex(val => val > 50);

//reduce and Destructuring
const transactions = [
    { amount: 100, type: 'credit' },
    { amount: 50, type: 'debit' },
    { amount: 200, type: 'credit' },
    { amount: 150, type: 'debit' }
  ];

const netBalance = transactions.reduce((acc, { amount, type }) => {
    return type === 'credit' ? acc + amount : acc - amount;
}, 0);

console.log(netBalance);

//rest Operator and forEach
function logArguments(...args) {
    args.forEach(val => console.log(val))
};


//Sets and Array Methods:
const numbers = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers)];

const squaredNumbers = uniqueNumbers.map(val => val * val);

console.log(squaredNumbers);