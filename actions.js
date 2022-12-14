$('div.block-calculadora > div.container-valores > div').click(function() {
    var keyPressed = $(this).text();
       if(!isNaN(keyPressed)) {
       
          var actualValue = $('#display-numbers').val();
           $('#display-numbers').val(actualValue+keyPressed);
           
       } else {
           if($(this).hasClass('reset')){
               actualValue.val('');
           } else if($(this).hasClass('del')){
               actualValue.val().slice(0, -1);
           } else if($(this).hasClass('igual')){
               //faz o calculo
           } else {
                 if($(this).attr('data-key')){
                     console.log('asdasd');
           var operator = keyPressed;
                     var holdingNumber =  $('#holding-numbers').val();
                     var actualValue = $('#display-numbers').val();
              $('#holding-numbers').val(holdingNumber+actualValue+operator);
              $('#display-numbers').val(''); 
              
         } 
           }
         
           
           
        
           
       }
   });