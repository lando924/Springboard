
//Logo Maker/Event Listener
// const form = document.querySelector('#logoform');
// const brandInput = document.querySelector('input[name="brandname"]')
// const colorInput = document.querySelector('input[name="color"]')
// const fontInput = document.querySelector('input[name="fontSize"]')
// const results = document.querySelector('#results')



// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newLogo = makeLogo(
//         brandInput.value, 
//         colorInput.value, 
//         fontInput.value
//     );
    
//     results.appendChild(newLogo);
    
//     });

// function makeLogo (text, color, size) {
//     const logo = document.createElement('h2');
//     logo.innerText = text;
//     logo.style.color = color;
//     logo.style.fontSize = size + 'px';
//     return logo;
// }

// document.addEventListener('keypress', function(e){
//    console.log(`You pressed ${e.key}!`)
// })


//Multiple Events
// const removeBtn = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend')
// const input = document.querySelector('input')
// const friendList = document.querySelector('#friend-list')

// friendList.addEventListener("click", function(event) {
//     if (event.target.tagName === "BUTTON") {
//       event.target.parentElement.remove();
//     }

// for (btn of removeBtn){
//     btn.addEventListener('click', function(e){
//         e.target.parentElement.remove();
//     })
// }

// form.addEventListener('submit', function(e){
//     e.preventDefault();
//     const newFriend = document.createElement('li');
//     const removeButton = document.createElement('button')
//     removeButton.innerText = 'Unfriend'
//     newFriend.innerText = input.value;
//     newFriend.appendChild(removeButton);
//     input.value = '';
//     friendList.appendChild(newFriend);

// })

//Event Delegation
const form = document.querySelector('#add-friend')
const input = document.querySelector('#first-name')
const friendList = document.querySelector('#friend-list')


friendList.addEventListener("click", function(event) {
    if (event.target.tagName === "BUTTON") {
      event.target.parentElement.remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.add('best-friend');
        const heart = document.createElement('span');
        heart.innerText = '😍';
        event.target.prepend(heart);
    }
})

form.addEventListener('submit', function(e){
    e.preventDefault();
    const newFriend = document.createElement('li');
    const removeButton = document.createElement('button')
    removeButton.innerText = 'Unfriend'
    
    newFriend.innerText = input.value;
    newFriend.appendChild(removeButton);
    input.value = '';
    friendList.appendChild(newFriend);

})

const ul = document.querySelector('#cars')

ul.addEventListener('click', function(e){
    console.log(e.target.getAttribute('data-id'));
    console.log(e.target.dataset);
})
