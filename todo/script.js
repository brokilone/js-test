$(function () {
   $('#addButton').click(function () {

       var innerText = $('input#name').val();
        if (innerText.length < 1) {
            return false;
        }
            $('p.list').remove();
            var newPoint = $('<li></li>');
            var name = $('<p></p>');
            name.addClass('item-name');
            newPoint.append(name);
            name.text(innerText);
            $('div.list').append(newPoint);
            $('input#name').val("");

            var button = $('<button></button>');
            button.addClass('delete');
            newPoint.append(button);

            var button2 = $('<button></button>');
            button2.addClass('arrow');
            newPoint.append(button2);

            var description = $('textarea').val();
            var desc = $('<p></p>');
            desc.addClass('itemDesc');
            newPoint.append(desc);
            desc.text(description);
            newPoint.append(desc);
            $('textarea').val(" ");
       $('.delete').click(function () {
           $(this).closest('li').remove();
       });
       $('.arrow').click(function() {
        if ($('.itemDesc').css("display") != "none") {
          $('.itemDesc').fadeOut(400);
            $(this).css({transition:'all 0.5s', 
              transform:'rotate(90deg'});
          } else {
            $('.itemDesc').fadeIn(400);
            $(this).css({transition:'all 0.5s', 
              transform:'rotate(0deg'});
          }
       });

   });

   $('textarea').on('focus', function () {
       $(this).val(" ");
   });

})