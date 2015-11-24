var $=jQuery.noConflict();

/**
 * Mandar email para pedir informes
 * @param element form
 */
function sendContactEmail( form ){

    var data = $( form ).serialize();
    console.log( data );
    $.post(
        'php/send_email.php',
        data,
        function( response ){

            var jsonResponse = $.parseJSON( response );
            $('.js-form-container').addClass('hidden');
            $('.js-name').text( jsonResponse.name );
            $('.js-thankyou').removeClass('hidden');

        }
    );

}// sendContactEmail
