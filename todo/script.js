$(function () {


   $('#addButton').on('click', function () {

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

           $('.delete').on('click', function () {
               $(this).closest('li').remove();
           });

            var button2 = $('<button></button>');
            button2.addClass('arrow');
            button2.css({
                transition: 'all 0.5s',
                transform: 'rotate(0deg)'
            });
            newPoint.append(button2);

       $('.arrow').on('click', function () {



           if ( $(this).css('transform') == 'matrix(1, 0, 0, 1, 0, 0)'){
               $(this).css({
                   transition: 'all 0.5s',
                   transform: 'rotate(90deg)'
               });
               var needItem = $(this).parents('li');
               var needBlock = $(needItem).children('.itemDesc').first();
               needBlock.fadeOut(500);
           }
           else  {
               $(this).css({
                   transition: 'all 0.5s',
                   transform: 'rotate(0deg)'
               });
               var needItem = $(this).parents('li');
               var needBlock = $(needItem).children('.itemDesc').first();
               needBlock.fadeIn(500);
           }
       });

            var description = $('textarea').val();
            var desc = $('<p></p>');
            desc.addClass('itemDesc');
            newPoint.append(desc);
            desc.text(description);
            newPoint.append(desc);
            $('textarea').val(" ");



   });

   $('textarea').on('focus', function () {
       $(this).val(" ");
   });

})