// function makeBodyPurple() {
//     document.body.style.backgroundColor = 'purple';
// };


// function makeBody(color) {
//     document.body.style.backgroundColor = color;
// }



// const btn = document.querySelector('#teal');
// btn.ondblclick = function() {
//     makeBody('teal');
// };

// // options above are not ideal 

// const h1 = document.querySelector('h1');
// btn.onclick = function() {
//     h1.style.color = 'cyan';
// };


// const poopBtn = document.querySelector('#poop');

// poopBtn.addEventListener('click', function() {
//     makeBody('brown');
// });

//DOMContentLoaded, Load events vidEO

// document.addEventListener('DOMContentLoaded', function() {
// alert('DOM Content Loaded');    
// const btn = document.querySelector('button');

// btn.addEventListener('click', function() {
//     console.log("Look at my vaggginee");
// });
// });


// window.addEventListener('load', function(){
//     console.log('FULLY LOADED');
// });

//Event Objects
// const p = document.querySelector('p');

// p.addEventListener('click', function(e) {
//     console.log(e.type);
// });

// p.addEventListener('mouseup', function(e) {
//     console.log(e.type);
// });

// Mouse Color Map

// body tag mouse hove event, rgb 0, 0, 0
//window.innerwidth, winner.innerheight

// const body = document.querySelector('body');

// const mouseMap = () => {
//     document.addEventListener('mouseover', function(e) {
//         console.log(e);
//     })
// };

// //Math was the hard part of this problem
// document.addEventListener('mousemove', function(e) {
//     // console.log(e.pageX, e.pageY);
//     const r = (e.pageX * 255 / window.innerWidth);
//     const b = (e.pageY * 255 / window.innerHeight);
//     console.log(r, 0, b);
//     const color = `rgb(${r}, 0, ${b})`;
//     document.body.style.backgroundColor = color;
//     console.log(color);
// });


// const form = document.querySelector('#monkeyform');
// form.addEventListener('submit', function(e) {
//     e.preventDefault();
//     console.log('YOU SUBMITTED THE FORM!')
//     alert('It works dummy...')
// });

// document.querySelector('input[type="checkbox"')

//Logo Creator Demo

// const form = document.getElementById('form');
// const brandName = document.getElementById('name');
// const brandColor = document.getElementById('color');
// const brandSize = document.getElementById('range');
// const result = document.getElementById('result')

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newLogo = logoMaker(brandName.value, brandColor.value, brandSize.value);
//     result.appendChild(newLogo);
// });

// function logoMaker (text, color, size) {
//     const logo = document.createElement('div');
//     logo.innerText = text;
//     logo.style.color = color;
//     logo.style.fontSize = size + 'px';
//     return logo;
// };


// Key Events

// document.addEventListener('keypress', function(e){
//     console.log("Key Pressed");
//     console.log(e);
// // });

// document.addEventListener('keydown', function(e){
//     console.log(e);
// })

// document.querySelector('input').addEventListener('keydown', function(e){
//     console.log("KEY DOWN", e.key);
// });
// document.querySelector('input').addEventListener('keypress', function(e){
//     console.log("KEY PRESS", e.key);
// });

// Multiple Events
// const removeButtons = document.querySelectorAll('li button');

// for (let btn of removeButtons) {
//     btn.addEventListener('click', function(e) {
//         e.target.parentElement.remove();
//     });
// };

// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Remove';
//     removeBtn.addEventListener('click', function(e) {
//         e.target.parentElement.remove();
//     }); 
//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeBtn);    
//     input.value = '';
//     friendList.appendChild(newFriend);
// });

//Event Delegation 

// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list');

// friendList.addEventListener('click', function(e){
//     if (e.target.tagName === 'BUTTON') {
//         e.target.parentElement.remove();
//     } else if (e.target.tagName === 'LI') {
//         e.target.classList.add('best-friend');
//         const smile = document.createElement('span');
//         smile.innerHTML = '&#9786;';
//         e.target.prepend(smile);

//     }
// })

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     console.log(input.value);
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     removeBtn.innerText = 'Remove';
//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeBtn);    
//     input.value = '';
//     friendList.appendChild(newFriend);
// });

//Data Attributes

// const ul = document.querySelector('#cars');
// ul.addEventListener('click', function(e) {
//     console.log(e.target.getAttribute('data-id'));
//     console.log(e.target.dataset);
//     console.log(e.target.dataset.year);
//     e.target.dataset.year = '2020';
// });

const colorSelection = document.querySelector('#colors');

colorSelection.addEventListener('click', function(e) {
    document.body.style.backgroundColor = e.target.dataset.hex;
})