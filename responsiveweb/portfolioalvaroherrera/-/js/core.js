(function($) {
	$(document).ready(function() {
		// Slides!
		if (screen.width > 480) {
			$.getScript("-/js/carousel.js", function() {
				$.get("-/ajax/slides.html", function(data) {
					var $el = $(".welcome .slides"),
						sId = "welcome-slides"
						sNav = [
							'<ul class="slide-nav">',
							'<li><a class="prev" href="#' + sId + '">Previous</a></li>',
							'<li><a class="next" href="#' + sId + '">Next</a></li>',
							'</ul>'
						].join("");

					$el
						.append(data)
						.wrapInner('<div class="slidewrap"><div id="' + sId + '" class="slider"></div></div>')
						.find(".slidewrap")
							.append(sNav)
							.carousel({
								slide: '.figure',
								speed: 300
							});
				});
			});
		}
	});
})(jQuery);
