var currentPos = 0;
var intervalHandle;

function beginAnimate() {
   document.getElementById("join").style.position = "absolute"
   document.getElementById("join").style.left = "0px"
   document.getElementById("join").style.top = "100px"
   // Cause the animateBox function to be called
   // SetInterval is the repeating TIMER. Is going to call the animateBox() function about 50 times a second.
   intervalHandle = setInterval(animateBox, 50);
}



// The function Is going to be called 50 times a second to move the box from left to right
function animateBox() {
   // Set new position (current position = current position + 5)

   currentPos +=5;
   document.getElementById("join").style.left = currentPos + "px";


   //
   if ( currentPos > 900) {
       // clear interval (so the function doesn't get called anymore)
       clearInterval(intervalHandle);
        // pull of the styles that I applied inside function beginAnimate
        // so the box recovers its initial state as in the html
        // and jumps back to the bottom
        // reset custom inline styles
        document.getElementById("join").style.position = "";
        document.getElementById("join").style.left = "";
        document.getElementById("join").style.top = "";

   }
};



window.onload = function() {
   setTimeout(beginAnimate,5000);
};