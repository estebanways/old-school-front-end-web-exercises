var $toTop = $(".transporter");

function verifyPosition() {
	if($("html").scrollTop() >= 500 || $("body").scrollTop() >= 500) {
		$toTop.fadeIn(400);
	} else {
		$toTop.fadeOut(400);
	}
}

setInterval(verifyPosition, 250);

$toTop.click(function(e) {
	e.preventDefault();
	$("html, body").animate({scrollTop: 0}, 800);
});
