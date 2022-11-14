/* JS script description */

/* ---------------------------------------------------------------------------
 Examples of Functions on page load
------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 s Examples of Functions on events
------------------------------------------------------------------------------ */

/*
// This example to find last child of and element (Works but... wrong?)

nbutton.onclick = function() {

//console.log("you clicked on me!");
//Find the last element of the cascade menu TWO > submenu NO LINK > 'LAST-ITEM'
// (First 'LAST-ITEM' is the number "Five")

var x = document.getElementById("findul").lastChild;
txt = x
console.log(txt);

}

/* 
// This example to find an id of an elment in the DOM

nbutton.onclick = function() {

var x = document.getElementById("here");
txt = x
console.log(txt);

*/

/*
//This example to remove a a class from a serie of li's

function removeClass(className){
        // convert the result to an Array object
        var els = Array.prototype.slice.call(
            document.getElementsByClassName(className)
        );
        for (var i = 0,l = els.length; i < l; i++) {
            var el = els[i];
            el.className = el.className.replace(
                new RegExp('(^|\\s+)' + className + '(\\s+|$)', 'g'),
                '$1'
            );
        }
    }

window.onload = function () {
  removeClass('hey');
};

*/

/* ---------------------------------------------------------------------------
 Functions on page load
------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 Functions on events
------------------------------------------------------------------------------ */

function addButton() {

	//console.log("WTF");

	var nbutton =  document.getElementById("additem");

	//console.log(nbutton);

	nbutton.onclick = function() {
		// Step 1. Create the new element
		var myNewLi = document.createElement("li");
				
		// Step 2. Add the new element(s) to the page
		document.getElementById("findul").appendChild(myNewLi);


		// Step 3. Set up the new created element accordingly:

			// Add and set an attribute to the new element (anchor)
			// At this point the new button is not showing the background color so
			// we are going to add a new class that has a copy of the color
			// in the correspondent css file.
			myNewLi.setAttribute('class', 'newbutton');

			// Add new child element (an anchor) to the new li element
			// (step 1)
			var myNewAnchor = document.createElement("a");

			// (step 2)
			myNewLi.appendChild(myNewAnchor);


			console.log(myNewLi);

			// Add and set an attribute to the new element (anchor)
			// Note: If se the href as index.html the new buttons will dissapear
			// Also if I refresh the page the news buttons will dissapear
			myNewAnchor.setAttribute('href','index.html#');

			// To add the content use innerHTML (You can also add a node manually,
			// check video JS FED1: 24. Creating DOM elements from the Course 
			//JavaScript Essential Training):
			myNewAnchor.innerHTML = "New button"

	}; // End of nbutton.onclick = function()

};   // End of addButton();


function greenSkin() {

// This actions will replace classes, otherwise we can add an next remove classes

	var colorbtn = document.getElementById("green");
	colorbtn.onclick = function() {


			// 1. Change the navigation bar style:
			// Replace the class nav
			var navig =  document.getElementById("nav");
			navig.setAttribute('class', 'nav-green');

			// 2. Change the main menu style:
			// Replace the class .menu of the ul
			var greenswitch = document.getElementById("menu");
			greenswitch.setAttribute('class', 'menu-green');
			//console.log(greenswitch.className);


			// Workaround here
			//At thsi point I could not change just classes bacause
			//the manu is made of css with styles over tag.class,
			// fro example: li.menuhover a, .. etc


			}		//End of  colorbtn.onclick = function()
}		// End of changeSkin()


function yellowSkin() {

// This actions will replace classes, otherwise we can add an next remove classes

	var colorbtn = document.getElementById("yellow");
	colorbtn.onclick = function() {


			// 1. Change the navigation bar style:
			// Replace the class nav
			var navig =  document.getElementById("nav");
			navig.setAttribute('class', 'nav-yellow');

			// 2. Change the main menu style:
			// Replace the class .menu of the ul
			var greenswitch = document.getElementById("menu");
			greenswitch.setAttribute('class', 'menu-yellow');
			//console.log(greenswitch.className);

	}		//End of  colorbtn.onclick = function()
}		// End of changeSkin()


function rushSkin() {

// This actions will replace classes, otherwise we can add an next remove classes

	var colorbtn = document.getElementById("rush");
	colorbtn.onclick = function() {


			// 1. Change the navigation bar style:
			// Replace the class nav
			var navig =  document.getElementById("nav");
			navig.setAttribute('class', 'nav-rush');

			// 2. Change the main menu style:
			// Replace the class .menu of the ul
			var greenswitch = document.getElementById("menu");
			greenswitch.setAttribute('class', 'menu-rush');
			//console.log(greenswitch.className);

	}		//End of  colorbtn.onclick = function()
}		// End of changeSkin()

/* -------------------------------------------------
 Prepare page
 --------------------------------------------------- */

// Functions to call on Page Load:
 
//addTableStyle();


//Functions on Event to Handle:

//When the document laods
window.onload = function() {
	// Name the function "prepareEventsHandlers()"; when there is one Function to call
	// in the script.
	//prepareEventsHandlers();
	addButton();
	greenSkin();
	yellowSkin();
	rushSkin();
	//console.log("hi");
}
