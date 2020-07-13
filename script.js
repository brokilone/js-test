$(function () {
    // left: 37, up: 38, right: 39, down: 40,
    // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

// modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () { supportsPassive = true; }
        }));
    } catch(e) {}

    var wheelOpt = supportsPassive ? { passive: false } : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    // function disableScroll(){
    //     $('html, body').on('mousewheel', function () {
    //         $(this).css('overflow', 'hidden');
    //     });
    // }
    // function enableScroll(){
    //     $('html, body').on('mousewheel', function () {
    //         $(this).css('overflow', 'auto');
    //     });
    // }
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