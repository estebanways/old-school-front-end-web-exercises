$(document).ready(function(){
	
	//This selector switch (add and remove) the class "current" for the list items by clicking on them.
	
	$('ul li a').on('click', function(){
    	$(this).parent().addClass('current').siblings().removeClass('current');
	});

});