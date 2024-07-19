// When a _____ event occurs on _____ element, do this _____

// click
//alert('hi')

// document.addEventListener('mousemove', function(mouseMoveEvent) {
//     const xPercentage = (mouseMoveEvent.pageX / window.innerWidth);
//     const red = Math.round(xPercentage * 255);
    
//     const yPercentage = (mouseMoveEvent.pageY / window.innerHeight);
//     const blue = Math.round(yPercentage * 255);
    
//     document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`;
// })

const removeButtons = document.querySelectorAll('li button');
const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list');

for (let btn of removeButtons) {
    btn.addEventListener('click', function(event) {
        event.target.parentElement.remove();
    });
}

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'UnFriend';
    removeBtn.addEventListener('click',function(event) {
        event.target.parentElement.remove();
    });
    newFriend.innerText = input.value;
    newFriend.appendChild(removeBtn);
    friendList.appendChild(newFriend);
    input.value = '';

})