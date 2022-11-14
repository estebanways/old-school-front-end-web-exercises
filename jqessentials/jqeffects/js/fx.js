/* JQ Events */

/* ---------------------------------------------------------------------------
 Examples of Functions on page load
------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 s Examples of Functions on events
------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 Functions on page load
------------------------------------------------------------------------------ */

function animateCarrousel() {
    var $current = $('#photoShow DIV.current');

    if ( $current.length == 0 ) $current = $('#photoShow DIV:last');
   
    var $next =  $current.next().length ? $current.next()
        : $('#photoShow DIV:first');
    
    $current.addClass('last-current');

    $next.css({opacity: 0.0})
        .addClass('current')
        .animate({opacity: 1.0}, 1000, function() {
            $current.removeClass('current last-current');
        });
}

/* ---------------------------------------------------------------------------
 Functions on events
------------------------------------------------------------------------------ */

/* -------------------------------------------------
	Prepare page
 --------------------------------------------------- */

// When the page loads functions list:
 
$(function() {
		    setInterval( "animateCarrousel()", 5000 );
});


$(document).ready(function(){

		//Events to handle (listeners):
		//N/A

});