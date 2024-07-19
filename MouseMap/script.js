
document.addEventListener('mousemove', function(e){
    const x = (e.pageX / window.innerWidth);
    const red = Math.round(x * 255);

    const y = (e.pageY / window.innerHeight);
    const blue = Math.round(y * 255 );

    document.body.style.backgroundColor = `rgb(${red}, 0, ${blue})`;



})