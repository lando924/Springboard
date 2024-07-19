// const preferences = {
//     fontSize: '10px',
//     favColor: 'purple',
// }

// localStorage.setItem('preferences', JSON.stringify(preferences));

// const { favColor } = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;

//darkmode toggle

const toggleSwitch = document.querySelector('input[type="checkbox"]');


if (localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function(e){
    const {checked} = toggleSwitch;
    if(checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = toggleSwitch.checked ? 'dark' : '';
});
