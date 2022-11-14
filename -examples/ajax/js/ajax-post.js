$(function(){
	var wrapper = $("#info");
	
	$("#send").click(function(e) {
		e.preventDefault();
		var data = $("#data-form").serialize();
		var url = $("#data-form").attr("action");
		$.post(url, data, completed);
	});
	
	function completed(xml){
		$(xml).find("person").each(function() {
			var fName = $(this).find("first-name").text();
			var lName = $(this).find("last-name").text();
			wrapper.html("<p>Hello "+ fName +" "+ lName +"</p>");
		});
	}
});