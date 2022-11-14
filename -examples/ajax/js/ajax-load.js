$(function(){
	var wrapper = $("#info");
	$("#recipe").change(function() {
		var optionSelected = $(this).find("option:selected");
		var selected = $(optionSelected).attr("id");
		var recipe = selected + ".html";
		wrapper.load("data/html/"+recipe);
	});
	
	
	$("#full-content").click(function(e) {
		e.preventDefault();
		wrapper.load("data/html/full-web-page.html");
	});
	
	$("#partial-content").click(function(e) {
		e.preventDefault();
		wrapper.load("data/html/full-web-page.html #wrapper");
	});
});