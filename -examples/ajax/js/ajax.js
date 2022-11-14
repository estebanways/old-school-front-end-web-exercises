$(function(){
	var wrapper = $("#info");
	$("#recipe").change(function() {
		var optionSelected = $(this).find("option:selected");
		var selected = $(optionSelected).attr("id");
		var recipe = selected + ".html";
		$.ajax("data/html/"+recipe, {
			dataType : 'html',
			success : successFunction,
			error : function(xhr, status, error) {
				alert("An Error happend loading the data.\nError gotten from the server: "+error);
			}
		});
	});
	
	function successFunction(data){
		wrapper.html(data);
	}
});