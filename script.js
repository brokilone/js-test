$(function () {
    function disableScroll(){
        $('html, body').on('mousewheel', function () {
            $(this).css('overflow', 'hidden');
        });
    }
    function enableScroll(){
        $('html, body').on('mousewheel', function () {
            $(this).css('overflow', 'auto');
        });
    }
    $('#changebutton')
        .css({
            'margin-left': '20px',
            'margin-bottom': '40px'
        })
        .click( function () {
            $('#popup-container').fadeIn(400, disableScroll);
            $('#popup').animate({
                width: '200px',
                height: '300px'
            }, 400);
        });

    $('#popup-container').click( function (event) {
        if (event.target == this) {
            $(this).fadeOut(400, enableScroll);
            $('#popup').animate({
                width: 0,
                height: 0
            }, 400);
        }
    })
});