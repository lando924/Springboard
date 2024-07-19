const form = document.querySelector('#monkeyform');
form.addEventListener('submit', function(event){
    event.preventDefault();
    alert("YOU SUBMITTED THE FORM!!!");
});

const formElement = document.querySelector("form");
