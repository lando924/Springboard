const imgs = document.querySelectorAll('img');

// for (let img of imgs) {
//     console.log(img.getAttribute('src'))
// }

let src = imgs[0].getAttribute('src');

for (let img of imgs) {
img.setAttribute('src', src);
}

const quote = document.querySelector('blockquote');
quote.setAttribute('class', 'section-title')

