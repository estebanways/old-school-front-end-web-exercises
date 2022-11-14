$(function(){
	var wrapper = $("#info");
	
	$("#send").click(function(e) {
		e.preventDefault();
		var data = $("#data-form").serialize();
		console.log(data);
		var url = $("#data-form").attr("action");
		$.get(url, data, completed);
	});
	
	function completed(data){
		wrapper.html("<p>Hello "+ data +"</p>");
	}
});