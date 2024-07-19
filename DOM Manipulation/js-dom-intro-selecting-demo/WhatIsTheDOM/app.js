// document.getElementById('gallery');

// document.getElementById('muffin')

// let allH3s = document.querySelectorAll('h3');

// for (let i = 0; i < allH3s.length; i++) {
//     allH3s[i].style.color = 'pink'
// };


// const allh2s = document.getElementsByTagName('h2');

// for (let h2 of allh2s) {
//     h2.style.color = 'purple'
//     h2.style.fontSize = '80px'
    
// }

// const allImgs = document.querySelectorAll('img');

// for (let img of allImgs) {
//     img.style.width = '100px';
//     img.style.border = '2px solid green'    
// }

const imgs = document.querySelectorAll('img');

// for (let img of imgs) {
//     console.log(img.getAttribute('src'));
// }

const src = imgs[0].getAttribute('src');
for (let img of imgs) {
    img.setAttribute('src', src);
}

const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title');

const h2 = document.querySelector('h2');

// h2.setAttribute('class', 'big');