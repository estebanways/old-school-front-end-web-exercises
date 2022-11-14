/* Menu matic */

/* ---------------------------------------------------------------------------
 Functions on page load
------------------------------------------------------------------------------ */

/* ---------------------------------------------------------------------------
 Functions on events
------------------------------------------------------------------------------ */

function addButton() {
	var nbutton =  document.getElementById("additem");
	nbutton.onclick = function() {
		// Step 1. Create the new element
		var myNewLi = document.createElement("li");
		// Step 2. Add the new element(s) to the page
		document.getElementById("findul").appendChild(myNewLi);
		// Step 3. Set up the new created element accordingly:
			// Add and set an attribute to the new element (anchor)
			myNewLi.setAttribute('class', 'newbutton');
			// Add new child element (an anchor) to the new li element
			// (step 1)
			var myNewAnchor = document.createElement("a");
			// (step 2)
			myNewLi.appendChild(myNewAnchor);
			//console.log(myNewLi);
			// Add and set an attribute to the new element (anchor)
			myNewAnchor.setAttribute('href','index.html#');
			// To add the content use innerHTML:
			myNewAnchor.innerHTML = "NEW BUTTON"
	}; 

};  

function greenSkin() {
	var colorbtn = document.getElementById("green");
	colorbtn.onclick = function() {
			var csslink = document.getElementById("styleswitch");
			csslink.setAttribute('href', 'css/tinydropdown-green.css');
			}
};

function yellowSkin() {
	var colorbtn = document.getElementById("yellow");
	colorbtn.onclick = function() {
			var csslink = document.getElementById("styleswitch");
			csslink.setAttribute('href', 'css/tinydropdown-yellow.css');
			}	
};	

function defaultSkin() {
	var colorbtn = document.getElementById("default");
	colorbtn.onclick = function() {
			var csslink = document.getElementById("styleswitch");
			csslink.setAttribute('href', 'css/tinydropdown.css');
			}
};


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
	defaultSkin();
};
