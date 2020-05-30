$('[href="#about_me"]').click(function(event) {
    event.preventDefault();
    var id = $(this).attr('href');
     target = $(id).offset().top;

    $('html', 'body').animate({
        scrollTop: target
    }, 600);
})














