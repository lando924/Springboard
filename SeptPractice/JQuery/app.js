// $('img').on('mouseleave',() => console.log('leavingtheimage'));

$('img').on('mouseenter', function () {
    $(this).css('border', '5px solid purple')
});

$('img').on('click', function () {
    // $(this).fadeOut(2000, function () {
    //     $(this).remove()
    // })
    $(this).animate({
        opacity: 0.5,
        width: '25px',
    }, 3000, function() {
        $(this).remove()
    })
});

$('#add-input').on('click', function() {
    $('form').append('<input type="text">')
});

$('form').on('focus', 'input', function() {
    $(this).val('MOUTHBREATHERRRR');
})

