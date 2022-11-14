function main () {
	
	//Adds to the element with id='pageContent', the content of the file 'home.html', true = it is asynchronous
	loadXMLDoc('pageContent','home.html', false);

	//These 3 lines set up functionality for the main slideshow in the Home page: (they use the code from sliderManager.js)
	var theSliderManager = new SliderManager(10000);
	theSliderManager.startSliding();
	theSliderManager.setLinksHandlers();

	loadStepsGallery();
	
}

function loadStepsGallery () {

	$('.carousel1').carouFredSel({
		auto: false,
		prev: '.prev',
		next: '.next', 
		width: '100%', 
		items: {
        	visible : {
				min: 1,
       			max: 3
			},
			height: '100%',
		 	width: 110,
		},
		responsive: true,         
		scroll: 1, 
		swipe: {
			onMouse: true, 
			onTouch: true
		}
	});
	 
}      


//window.addEventListener("load", main, false);
//window.addEventListener("load", loadStepsGallery, false);

window.onload = main;