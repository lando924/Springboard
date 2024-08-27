$('img').on('click', function() {
    // $(this).fadeOut(3000, function () {
    //     $(this).remove();
    // }); 
    $(this).animate({
        opacity: 0.3,
        width: '50px',

    }, 3000, function() {
        $(this).remove();
    })
})

//no loop

$('img').on('mouseenter', function() {
    $(this).css('border', '10px solid purple')
});

$('a').on('click', function() {
    console.log('I clicked on this bishhh');
})

// $('img').on('click', function() {
//     $(this).remove();
// });

$('#add-input').on('click', function() {
    $('form').append('<input type="text"/>');
})

$('form').on('focus', 'input', function() {
    $(this).val('BAMBOOZLED');
})
