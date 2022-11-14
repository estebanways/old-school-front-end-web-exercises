// Changes the image to the next image on the left/right of a image array
// Author: Alvaro Herrera

function prepareEventHandlers() {

	// Obtains the image Id from HTML
	var myImage = document.getElementById("image");


	//List images 0,1,2,3
	var myImg = [ "images/slide1.jpg", "images/slide2.jpg", "images/slide3.jpg", "images/slide4.jpg"];

    /*
	// Another way to create the array object above
	var myImg= new Array(3)
	myImg[0]= "slide1";		// <--- START array limit
	myImg[1]= "slide2";
	myImg[2]= "slide3";
	myImg[3]= "slide4";     // <--- END array limit
    */

	//Load first indexed image of the image array
	var i = 0;


	// Switches the image backward

	var leftbtn = document.getElementById("left");

	leftbtn.onclick = function() {

		//alert("Hello");

		 // if image index reaches START array limit = 0 STOP decreasing i
		  if(i<1){
		    var l = i
		  } else {
		    // l = (i = i - 1)
		    var l = i-=1;
		  }
		  // Change image to current l = image

		  myImage.setAttribute ("src", myImg[l]);
		  //document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
		  console.log("i:" + i);
		  console.log("l:" + l);

	}


	// Switches the image forward

	var rightbtn = document.getElementById("right");

	rightbtn.onclick = function() {

		//alert("Hello");

		// if image index reaches the END array limit = 3 STOP increasing i
		  if(i>2){
		    var l = i
		  } else {
		    // l = (i =  i + 1)
		    var l = i+=1;
		  }
		  myImage.setAttribute ("src", myImg[l]);
		  //document.imgSrc.src = myImgSrc + myImg[l] + myImgEnd;
		   console.log("i:" + i);
		   console.log("l:" + l);

	}


} // End of prepareEventHandlers()


//When the document laods
window.onload = function() {
prepareEventHandlers();

}
