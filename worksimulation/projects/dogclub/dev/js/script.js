$(function(){




$("#ajax_home").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("home.html");
});


$("#ajax_training").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("Tatiana/training.html");
});



$("#ajax_contacts").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("naty/contacts.html");
});


$("#ajax_pets").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("naty/pet_services.html");
});


$("#ajax_dogbreeds").click(function(event){
	event.preventDefault(); // this line stop browsing to another site...
	$("#content").load("carlos/dogbreeds.html");
});











/*

// IPad/IPhone
	var viewportmeta = document.querySelector && document.querySelector('meta[name="viewport"]'),
	ua = navigator.userAgent,

	gestureStart = function () {viewportmeta.content = "width=device-width, minimum-scale=0.25, maximum-scale=1.6";},

	scaleFix = function () {
		if (viewportmeta && /iPhone|iPad/.test(ua) && !/Opera Mini/.test(ua)) {
			viewportmeta.content = "width=device-width, minimum-scale=1.0, maximum-scale=1.0";
			document.addEventListener("gesturestart", gestureStart, false);
		}
	};
	
	scaleFix();
	// Menu Android
	if(window.orientation!=undefined){
    var regM = /ipod|ipad|iphone/gi,
     result = ua.match(regM)
    if(!result) {
     $('.sf-menu li').each(function(){
      if($(">ul", this)[0]){
       $(">a", this).toggle(
        function(){
         return false;
        },
        function(){
         window.location.href = $(this).attr("href");
        }
       );
      } 
     })
    }
   } 
  */ 
   
   
   
});

/*
var ua=navigator.userAgent.toLocaleLowerCase(),
 regV = /ipod|ipad|iphone/gi,
 result = ua.match(regV),
 userScale="";
if(!result){
 userScale=",user-scalable=0"
}
document.write('<meta name="viewport" content="width=device-width,initial-scale=1.0'+userScale+'">')


*/