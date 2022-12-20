$('div.block-calculadora > div.container-valores > div').click(function () {
    var keyPressed = $(this).text();
    if (!isNaN(keyPressed)) {

        var actualValue = $('#display-numbers').val();
        $('#display-numbers').val(actualValue + keyPressed);

    } else {
        if ($(this).hasClass('reset')) {
            $('#display-numbers').val('');

        } else if ($(this).hasClass('del')) {
            var actualValue = $('#display-numbers').val();
            var newEreased = actualValue.slice(0, -1);
            $('#display-numbers').val(newEreased);
        } else if ($(this).hasClass('igual')) {
            var holdingNumber = $('#holding-numbers').val();
            var actualValue = $('#display-numbers').val();
            if (holdingNumber && actualValue) {
                var operator = keyPressed;
                var holdingNumber = $('#holding-numbers').val();
                var actualValue = $('#display-numbers').val();
                $('#holding-numbers').val(holdingNumber + actualValue + operator);
                $('#display-numbers').val('');
               console.log(Math.sqrt(holdingNumber));

            } else {
                alert('Necessário um operador entre números');

            }
        } else {
            if ($(this).attr('data-key')) {

                var operator = keyPressed;
                var holdingNumber = $('#holding-numbers').val();
                var actualValue = $('#display-numbers').val();
                $('#holding-numbers').val(holdingNumber + actualValue + operator);
                $('#display-numbers').val('');

            }
        }





    }
});