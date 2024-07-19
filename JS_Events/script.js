
const p = document.querySelector('p');

p.addEventListener('click', function(e){
    console.log(e.type);
});
p.addEventListener('mousedown', function(e){
    console.log(e.type);
});

const pizza = document.querySelector('h1');

pizza.addEventListener('click', function(){
    console.log("You clicked me in a not so nice place...")
})

function makeBodyPurple() {
    document.body.style.backgroundColor = 'purple';
}

const btn = document.querySelector('#teal');
btn.onclick = function () {
    makeBodyPurple('teal');
};


const greenBtn = document.querySelector('#green');

greenBtn.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

const gold = document.querySelector('#gold');

gold.addEventListener('dblclick', function() {
    document.body.style.backgroundColor = 'gold';
})
