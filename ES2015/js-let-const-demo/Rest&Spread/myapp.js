// function max () {
// console.log(arguments)
// };

// function sum () {
//     const args = Array.from(arguments);
//     return args.reduce((sum, val) => {
//         return sum + val;
//     });
// };

// const max = () => {
//     console.log(arguments);
// };

// const max = function() {
//     const args = Array.from(arguments);
//     return args.reduce((max, currVal) => {
//         return currVal > max ? currVal:max;
//     }, 0);
// };

// function sum(...nums) {
//     return nums.reduce((sum, n) => sum + n);
// }

// const sumAll = (...values) => {
//     if(!values.length) return undefined;
//     return values.reduce((sum, n) => sum + n);
// };

// function makeFamily(parent1, parent2, ...kids) {
//     return {
//         parents: [parent1, parent2],
//         children: kids.length ? kids : 0
//     };   
// }

const filterByType = (type, ...val) => {
    return val.filter(v => typeof v === type);
}

// //Gotcha
// function printStuff(a,b,...rest) {

// }

const numbs = [4, 5, 88, 123, 92, 34];

const things = [23, 45, true, false, 'hello', 'goodbye', undefined];


filterByType('string', ...things)

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette.slice();
const paletteCopy = ['sky blue', ...palette, 'grass green'];






const greenTeas = [ 'snow jasmine', 'fragrant leaf' ];
const oolongTeas = [ 'honey orchid', 'winter sprout' ];
const herbalTeas = [ 'african solstice', 'marshmallowroot' ];
const coffees = [ 'guatemala red cat', 'snow leopard blend' ];

const allTeas = [...greenTeas, ...oolongTeas, ...herbalTeas]

const withCaffeine = [...coffees, ...oolongTeas, ...greenTeas, 'Earl Gray'];

const vowels = 'aeiou';
const vowelArr = [...vowels, 'sometimes y'];

const tea = {
	type   : 'oolong',
	name   : 'winter sprout',
	origin : 'taiwan'
};

// const tea2 = {...tea};

const teaData = {
	steepTime : '30s',
	brewTemp  : 175,
	origin    : 'japan'
};

const teaTin = {...tea, price: 22.99};

const newTea = {...tea, name: 'golden frost'};

const fullTea ={ ...tea, ...teaData};

const colors = ['red', 'orange', 'blue'];
const dummyObj = { ...colors, ...'CAT'};



const shoppingCart = [
	{
		name     : 'honey orchid',
		quantity : 2,
		price    : 13.5
	},
	{
		name     : 'african solstice',
		quantity : 4,
		price    : 25.99
	}
];

const cartCopy = [ ...shoppingCart ];


