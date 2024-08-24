// const cat = {
//     name: 'Blue',
//     breed: 'Scottish Fold',
//     dance: function(dance) {
//         console.log('THIS IS: ', this);
//         console.log(`Meow, I am ${this.breed} and I like to ${dance}!`)
//     },
//     play : function(...toys) {
//         for (let toy of toys) {
//             console.log(`${this.name} plays with ${toy} `);
//         }
//     }
// };



// class Cat {
//     constructor(name, breed) {
//         this.name = name;
//         this.breed = breed;
//     }
//     dance(danceType){
//         console.log('THIS IS:', this);
//         console.log(`Meow, I am a ${this.breed} and I like to ${danceType}`);
//     }
// }

// const rocket = new Cat ('rocket', 'tabby');
// rocket.dance('tango');
// const rocketDance = rocket.dance;

// cat.dance('salsa');
// const bluesDance = cat.dance;
// bluesDance('salsa');

// function whatIsThis() {
//     console.log('this =', this);
// }

// const myObj = {
//     func : whatIsThis,
//     color : 'purple'
// };

// const blueDance = cat.dance;
// blueDance.call(cat, 'jitterbug');


// const dog = {
//     breed: 'Black Lab',
//     name: 'Elton',
// };


// blueDance.call(dog, 'hip hop dance');

// cat.dance.call(window, 'salsa');
// cat.dance('salsa')

// function printThis() {
//     console.log('THIS ======>', this);
// }

// printThis.call(cat);

//call function example
// cat.play.call(dog, 'bone', 'my cat', 'my dick');
// cat.play()

//Bind
const blue = {
    name: 'Blue',
    breed: 'Scottish Fold',
    dance: function(dance) {
        console.log('THIS IS: ', this);
        console.log(`Meow, I am ${this.breed} and I like to ${dance}!`)
    },
    play : function(...toys) {
        for (let toy of toys) {
            console.log(`${this.name} plays with ${toy} `);
        }
    },
    greet() {
        alert(`${this.name} SAYS MEOW!`)
    }
};

document.querySelector('#btn-1').addEventListener('click', blue.greet.bind(blue))

const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg) {
    alert("Secret message is " + msg);
}

btnA.addEventListener('click', popUp.bind(null, 'Button A Says Hi'));
btnB.addEventListener('click', popUp.bind(null, 'Button B Says Hi'));
btnC.addEventListener('click', popUp.bind(null, 'Button c Says Hi'));

btnA.addEventListener('click', function () {
    popUp('BUTTON A SAYS HI!')
})

// const rocket = {
//     name: 'Rocket',
//     breed: 'Himalayan'
// };


// const bDance = blue.dance;
// const boundDance = bDance.bind(blue)

// const rocketDance = blue.dance.bind(rocket);

// const dog = {
//     name: 'Tyson',
//     breed: 'Mini Aussie',
//     dance: rocketDance
// }

// const blueDisco = blue.dance.bind(blue, 'disco');
// const playsWithSocks = blue.play.bind(blue, 'left sock', 'right sock');

// function applySalesTax(taxRate, price) {
//     return price + price * taxRate;
// }

// const applyCATax = applySalesTax.bind(null, 0.0725);
// const applyMSTax = applySalesTax.bind(null, 0.0625);

// const bobsMembership = {
//     name : 'Bob',
//     total : 250
// };


// const jillsMembership = {
//     name: 'Jill',
//     total: 899
// }

// function collectMonthlyFee (fee) {
//     const remaining = this.total - fee;
//     this.total = remaining;
//     return this.name + ' remaining balance:' + remaining;
// }

// const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5)
// const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35)


const greeter = {
    msg: 'I like chickenz',
    sayHi: () => {
        console.log(this)
        alert(this.msg)
    },
    // waitAndGreet: function (delay) {
    //         console.log(this)
    //         let callback = function () {
    //             console.log(this);
    //             alert(this.msg);
    //         };
    //         setTimeout(callback.bind(this), delay)
    //     }
    // }
    waitAndGreet: function (delay) {
        setTimeout(() => {
            alert(this.msg);
        }, delay);
    }
};
