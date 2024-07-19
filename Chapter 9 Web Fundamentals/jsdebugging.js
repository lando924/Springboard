// function hasEnoughFundsToBuy(price, qty, balance) {
//     const subtotal = price * qty;
//     //a tiny bit of insight to identify issue if there is one
//     console.log("subtotal:", subtotal);
//     console.log("balance", balance);
//     if (subtotal <= balance) {
//         return 'YOU HAVE ENOUGH MONEY'
//     }
//     return 'SORRY, YOU NEED MORE MONEY TO BUY THAT'
// };

// hasEnoughFundsToBuy(10, 5, 60);

// hasEnoughFundsToBuy(200.3, 3, 600.9)

let grades = [99, 98, 76, 54, 66, 90, 81];
let sum = 0
//debugger; //can bring you to breakpoint
for (let i = 0; i <= grades.length; i++) {
    sum += grades[i];
    console.log('i', i),
    console.log('grade', grades[i]),
    console.log('sum',sum)
};
let avg = sum / grades.length;

//grades[7] is undefined hence the NaN. 

//debugger;


try {
    functionThatDoesNotExist();
} catch {
    console.log("OH NO ERROR!!!!")
}
console.log("did we make it?");

try {
    alkjdsadf();
} catch (e) {
    console.log("OHNOOOERROR!")
    console.log(e);
}
console.log("did we make it?");


function displayInitials(user) {
    let firstNameLetter;
    let lastNameLetter;
    try {
        firstNameLetter = user.firstName[0].toUpperCase();
        lastNameLetter = user.lastName[0].toUpperCase();
    } catch (e) {
        return "Invalid input!";
    }
    return `Hello ${firstNameLetter}.${lastNameLetter}`;
}

//Throwing Errors
console.log("I AM BEFORE THE ERROR")
// throw "I AM THE ERROR!!!"
console.log('I AM AFTER THE ERROR');

try {
    throw "I AM THE ERROR"
} catch (e) {
    console.log("there was an error...", e)
}

console.log("an error is coming...");

try {
    throw new Error("Oh no!");
} catch (err) {
    console.log("what kind of error?", err.name);
    console.log("what is the message?", err.message);
    console.log("where did it happen?", err.stack);
}