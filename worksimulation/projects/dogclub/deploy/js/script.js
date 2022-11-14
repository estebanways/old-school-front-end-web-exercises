/* -----------------------------------------------
Accenture Teamwork project: Dog Club

Jquery Scripts for menu animation and menu functionality (to load other pages inside divs on index.html)
By: Marcelo Guzman
Last modified: 2013/09/02

----------------------------------------------- */
$(function(){



// -------------------------------------------------------------------

$('#cssmenu li a').hover(function() {

    console.log('Indice: ' + $('#cssmenu li').index());
    $(this).addClass('cssmenu a:hover');
	

	
}, function() {

    if ($(this).hasClass('cssmenu active')==false) {
	console.log("fghfghg");
	$(this).removeClass('cssmenu a:hover');
	}
	
});

// -------------------------------------------------------------------

$('#cssmenu li a').click(function() {
	$('#cssmenu li a').removeClass('cssmenu active');
    $(this).addClass('cssmenu active');

	
});




// -------------------------------------------------------------------


$("#ajax_home").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("home.html");
	$('.flexslider').show();
});


$("#ajax_training").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("training.html");
	$('.flexslider').hide();
});



$("#ajax_contacts").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("contacts.html");
	$('.flexslider').hide();
});


$("#ajax_pets").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("pet_services.html");
	$('.flexslider').hide();
});


$("#ajax_dogbreeds").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("dogbreeds.html");
	$('.flexslider').hide();
  });
	
	  
   
   
});

