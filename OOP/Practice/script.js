// const color = 'teal';
// const obj = {};

// obj.color = '#3723FF';
// obj[color] = '#3723FF';

// obj[1 + 4 - 2 * 8] = '#3723FF';

// for (let [k,v] of Object.entries(obj)) {
//     console.log(k, v);
// }

// const add = (x,y) => x + y;
// const mult = (x,y) => x * y;
// const square = (x) => x * x;
// const power = (x, y) => x ** y;

// const myMath = {};
// myMath.add = add;
// myMath.mult = mult;
// myMath.square = square;

// function getHypotenuse(a, b) {
//     return Math.sqrt (a ** 2 + b ** 2);
// }
// function getArea(a, b) {
//     return a * b / 2;
// }

// let side1 = 4;
// let side2 = 3;
// const side3 = getHypotenuse(side1, side2);

// const area = getArea(side1, side2);
// side1 = 9;
// side2 = 12;
// getHypotenuse(9, 12);

// const rightTriangle = {
//     a: 9,
//     b: 12,
//     printThis: function(){
//         console.log(this);
//     },
//     getArea: function () {
//         return this.a * this.b / 2;
//     },
//     getHypotenuse: function (){
//         return Math.sqrt(this.a ** 2 + this.b ** 2);
//     },
// };

// function Triangle(a,b) {
//     this.a = a;
//     this.b = b;
    
// };


// Triangle.prototype.getArea = function () {
//     return this.a * this.b / 2;;
// };

// Triangle.prototype.getHypotenuse = function () {
//     return Math.sqrt(this.a ** 2 + this.b ** 2);
// };



// Triangle(5,7); //RETURNS UNDEFINED!!
// //USING THE NEW OPERATOR:
// const tri1 = new Triangle(3,4);
// tri1.getHypotenuse(); //5
// const tri2 = new Triangle(9,12);
// tri2.getHypotenuse(); //15



//Prototype example. Can change array ie. const nums = [1,2,3]
// Array.prototype.push = function (val) {
//     console.log(`You want to add ${val}??`)
//     console.log("Sorry don't feel like it!")
// };

//Classes

// class Triangle {
//     constructor(a,b,c) {
//         console.log("INSIDE TRIANGLE CONSTRUCTOR");
//         for (let side of [a, b, c]) {
//         if(!Number.isFinite(side) || side <= 0) {
//             throw new Error ('Sides must be positive numbers!');
//         }
//     }
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }
//     greet() {
//         console.log('HELLO FROM NEW TRIANGLE!');
//     }
//     display() {
//         console.log(`Triangle with sides of ${this.a}, ${this.b}, and ${this.c}`)
//     }
//     getArea(){
//         const {a,b,c} = this;
//         const s = (a + b + c) / 2;
//         return Math.sqrt(s*(s-a)*(s-b)*(s-c));
//     }
//     isBig() {
//         return this.getArea() > 50;
//     }
// };
// class RightTriangle extends Triangle{
//     constructor(a,b,c) {
//         if (a * a + b * b !== c * c) {
//             throw new Error('Invalid C side for right triangle!')
//         }
//         console.log('INSIDE RIGHT TRIANGLE CONSTRUCTOR');
//         super(a, b, c);
//         this.hypot = c;
//     }
//     isRightTriangle() {
//         return true;
//     }
//     display() {
//         return 'Right ' + super.display();
//     }
// };

// const t1 = new Triangle (3,4,5);
// const t2 = new Triangle (5,9,10);
// const t3 = new Triangle (30,40,50);


class Vehicle {
    constructor (make, model, year) {   
        this.make = make;
        this.model = model;
        this.year = year;
    };
    honk() {
        return 'Beep.'
    };
    toString() {
        return `The vehicle is a ${this.make} ${this.model} from ${this.year}.`
    };
};

class Car extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    };
};
class Motorcycle extends Vehicle {
    constructor (make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    };
    revEngine() {
        return 'VROOM!!!';
    }
};

class Garage {
    constructor (capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    };
    add(newVehicle) {
        if (!(newVehicle instanceof Vehicle)) {
            return "Only vehicles are allowed in here!";
        }
        if (this.vehicles.length >= this.capacity) {
            return "Sorry, we're full.";
        }
        this.vehicles.push(newVehicle);
        return "Vehicle added!";
    }
}

