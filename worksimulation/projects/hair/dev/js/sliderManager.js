/*----------------------------------------------------------------------------------------------------------------
------------------------------------------------Class SliderManager------------------------------------------------
----------------------------------------------------------------------------------------------------------------*/
//Author: Sergio Valverde B.
//This class handles the image slider, with an automatic cycle or manually switching to a specific slide

	function SliderManager(timeBetweenSlides){
		this.currentSlide = 1;
		this.intervalID;

		//Customizable:
		this.waitingTimeBetweenSlides = timeBetweenSlides;	
		//Time between each automatic call to switch to the next slide (used in setInterval)
	}

	//Moves the slider to the image indicated by theSlideNumber (starting from 1, not zero)
	//The parameter isExternalCall should be false if the function is called as part of the automatic setInterval cycle,
	//or true if its called by one of the links at the bottom-left of the slider
	SliderManager.prototype.moveToSlideNumber = function(theSlideNumber, isExternalCall) {
		
		var images = $('.slideshow img'),
			textAreas = $('.slideshow .text');

		//Step 1: Hide the text of the current slide
		textAreas.not(':eq(' + (theSlideNumber - 1) + ')').animate({opacity: 0}, 1000);

		//Step 2: Switch the image of the current slide for the image of the next slide
		setTimeout(function () {
			//Animates opacity to 1 for the chosen slider img and opacity to 0 for the rest
			images.not(':eq(' + (theSlideNumber - 1) + ')').animate({opacity: 0}, 1000);
			images.eq(theSlideNumber - 1).animate({opacity: 1}, 1000);
		}, 1000);
		
		
		//Step 3: Show the text of the new slide
		setTimeout(function () {
			textAreas.eq(theSlideNumber - 1).animate({opacity: 1}, 1000);
		}, 2000);
		


		this.currentSlide = theSlideNumber;

		//Updates the links' active class
		$('.slideshow .linksContainer a').removeClass('active').eq(theSlideNumber - 1).addClass('active');


		//If the call was from one of the links (not part of the automatic cycle), the cycle should reset,
		//starting from the new current slide
		if (isExternalCall){ 
			clearInterval(this.intervalID);
			this.startSliding;
		}
	};

	//Moves the slider to the next image from the current one
	SliderManager.prototype.nextSlide = function() {
		
		var theNextSlide;
		if ( this.currentSlide < $('.slideshow img').length){
			theNextSlide = this.currentSlide + 1;
		}else{
			//if the current slide image is the last one, the next one should be the first one
			theNextSlide = 1;
		}

		this.moveToSlideNumber(theNextSlide, false);
	};

	//Starts the automatic image sliding cycle
	SliderManager.prototype.startSliding = function() {
		this.intervalID = setInterval( (function (self) {
			return function () {
				self.nextSlide();
			}
		})(this), this.waitingTimeBetweenSlides);
	};

	SliderManager.prototype.setLinksHandlers = function() {
		var links = $('.slideshow .linksContainer a');

		for (var i = 0; i < links.length; i++){
			$(links[i]).on('click', (function (self, counter) {
				return function () {
					self.moveToSlideNumber(counter + 1, true);
					self.startSliding();
					return false;
				}
			})(this, i) );
		}
	};

/*----------------------------------------------------------------------------------------------------------------
---------------------------------------------End of Class SliderManager--------------------------------------------
----------------------------------------------------------------------------------------------------------------*/