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
            landingAnalytics();

        }
    );

}// sendContactEmail

/**
* Analytics para landing page
**/
function landingAnalytics(){

    dataLayer.push({
        'event' : 'VirtualPageview',
        'virtualPageURL':'/mensaje-lp',
    });

    var contactoIFrame = '<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-WFG9VW" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>';
    $('body').append( contactoIFrame );

}// landingAnalytics
