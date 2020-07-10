$(function () {
    $('#changebutton')
        .css({
            'margin-left': '20px',
            'margin-bottom': '40px'
        })
        .click( function () {
            $('#column-left h2').remove();
            var newElement = $('<h2></h2>');
            newElement.text('Срочные новости');
            $('#column-left').prepend(newElement)
        });
});