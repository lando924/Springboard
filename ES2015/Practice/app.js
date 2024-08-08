const input = document.querySelector('#google');
const submit = document.querySelector('form')

function written(e) {
    e.preventDefault();
    const inputVal = input.value;
    console.log(inputVal)
    input.value = '';
}

submit.addEventListener('submit', written);
