// function countDown(time) {
//     let timer = setInterval(function(){
//     time--;
//     if(time <= 0) {
//         clearInterval(timer);
//         console.log("DONEEE!!!")
//     }
//     else {
//         console.log(time)
//     };
// }, 1000)
// };

// function randomGame () {
//     let num;
//     let times = 0;
//     let timer = setInterval(function(){
//         num = Math.random();
//         times++;
//         if (num > .75) {
//             clearInterval(timer);
//             console.log("It took " + times + " try/tries.")
//         }
//     }, 1000)
// }

// function randomCharGame () {
//     let chars = 'abcdefghijklmnopqrstuvwxyz';
//     let counter = 0;
//     let timer = setInterval( function() {
//         const randomIndex = Math.floor(Math.random() * chars.length);
//         const randomChar = chars[randomIndex];
//         counter ++;
//         console.log(randomChar);

//         if (randomChar === 'z') {
//             clearInterval(timer);
//             console.log(`It took ${counter} tries to pick 'z'.`);
//         }
//     }, 500)
// }

// function randomCharGame () {
//     let char = 'abcdefghijklmnopqrstuvwxyz';
//     let counter = 0;
//     let timer = setInterval(function() {
//         let randomIndex = Math.floor(Math.random() * char.length);
//         let randomChar = char[randomIndex];
//         counter ++;
//         console.log(randomChar);

//         if (randomChar === 'z') {
//             clearInterval(timer);
//             console.log(`It took ${counter} times to get to 'z'`);
//         }
//     }, 500)
// }

function countDown(num) {
    console.log(num);
    let timer = setInterval(function() {
    num--;
    if (num === 0) {
        clearInterval(timer);
        console.log('0! Times up playa!!!');
    } else {
        console.log(`${num}`);
    }
    }, 1000)
}

function randomGame() {
    let counter = 0;
    let timer = setInterval(() => {
        counter++;
        if (Math.random() > .75) {
            clearInterval(timer);
            console.log(`It took ${counter} tries before we got a number greater than .75`)
        }
    }, 1000);
}