
function Contact(){
//
}

Contact.prototype.validateForm = function(){

/****************Efectos Inputs*****************/


$(function(){

	$(".button").append("<strong></strong>")
});

		/*Name Validation*/

		$("#name").focus(function(){
		    var x=document.forms["myForm"]["fname"].value;
			if (x=="Name:") {
		      $(this).val("");
			}
			$("p").remove(".pname");

			
		  });

		 $("#name").blur(function(){
			var x=document.forms["myForm"]["fname"].value;
			if (x==null || x=="") {
			$(this).val("Name:");
				  var message=$("<p></p>").text("*This field is required.");
				  message.addClass("pname")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});				  
				  $("#name").after(message);
	  			  return false;
			 }			 	    
		 });


		/*E-mail Validation*/

		 $("#email").focus(function(){
		    var x=document.forms["myForm"]["femail"].value;
			if (x=="E-mail:") {
		      $(this).val("");
			}
			$("p").remove(".pemail");
		  });

		 $("#email").blur(function(){
			var x=document.forms["myForm"]["femail"].value;
			if (x==null || x=="") {
			$(this).val("E-mail:");
				  var message=$("<p></p>").text("*This field is required.");
				  message.addClass("pemail")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#email").after(message);
	  			  return false;
			 }	

			 if ( !(/\w{1,}[@][\w\-]{1,}([.]([\w\-]{1,})){1,3}$/.test(x)) ) {			
				  var message=$("<p></p>").text("*This is not a valid email address.");
				  message.addClass("pemail")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#email").after(message);
	  			  return false;
			 }	

		 });



		/*Phone Validation*/

		 $("#phone").focus(function(){
		    var x=document.forms["myForm"]["fphone"].value;
			if (x=="Phone:") {
		      $(this).val("");
			}
			$("p").remove(".pphone");
		  });


		 $("#phone").blur(function(){
			var x=document.forms["myForm"]["fphone"].value;
			
			if (x==null || x=="") {
			$(this).val("Phone:");
				  var message=$("<p></p>").text("*This field is required.");
				  message.addClass("pphone")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#phone").after(message);
	  			  return false;
			 }		

			if (isNaN(x)) {			
				  var message=$("<p></p>").text("*This is not a valid phone number.");
				  message.addClass("pphone")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#phone").after(message);
	  			  return false;
			 }	

			 if ( !(/^\d{11}$/.test(x))) {			
				  var message=$("<p></p>").text("*This is not a valid phone number. This number must be 11 digits ");
				  message.addClass("pphone")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#phone").after(message);
	  			  return false;
			 }	
		 });


		/*Message Validation*/

		 $("#message").focus(function(){
		    var x=document.forms["myForm"]["textito"].value;
			if (x=="Message:") {
		      $(this).val("");
			}
			$("p").remove(".pmessage");
		  });

		 $("#message").blur(function(){
			var x=document.forms["myForm"]["textito"].value;
			if (x==null || x=="") {
			$(this).val("Message:");
				  var message=$("<p></p>").text("*This field is required.");
				  message.addClass("pmessage")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});	
				  $("#message").after(message);
	  			  return false;
			 }	

			if (x.length<=15) {			
				  var message=$("<p></p>").text("*The message is too short.");
				  message.addClass("pmessage")
				  message.css({"color":"red","margin-left":"5px", "margin-top":"0","font-size":"11px"});
				  $("#message").after(message);
	  			  return false;
			 }	

		 });


        /*Clear Button*/

			$("#clear").click(function(){
				 $("#name").val("Name:");
				 $("#email").val("E-mail:");
				 $("#phone").val("Phone:");
				 $("#message").val("Message:");
				 $("p").remove(".pname");
				 $("p").remove(".pemail");
				 $("p").remove(".pphone");
				 $("p").remove(".pmessage");
			});  
}