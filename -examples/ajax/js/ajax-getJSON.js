$(function(){
	var wrapper = $("#info");
	var url = "data/specials.json";
	
	$("#send").click(function(e) {
		e.preventDefault();
		$.getJSON(url, completed);
	});
	
	function completed(data){
		$.each(data.recipes, function(i, p) {
			var img = $("<img/>", {
				id: p.id,
				title: p.title,
				src: p.image
			});
			
			wrapper.append("<p>"+p.text+"</p>").append(img);
		});
	}
});