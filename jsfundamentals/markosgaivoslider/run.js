var slider;

function resizeText(value) {
	var txt = document.getElementById("text");
	var size = 80 + value * 5;
	txt.style.fontSize = (size)+"%";
}

function init() {
	slider = new Slider("slider", "horizontal", 80);
	slider.onChange = resizeText;
	slider.setStart(4);
	slider.show();
}

window.onload = init;
