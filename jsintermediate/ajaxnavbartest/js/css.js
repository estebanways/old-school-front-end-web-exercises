/* CSS in jQuery */

/* ---------------------------------------------------------------------------
 1. Use the css method and set the opacity to 0.4 to every th element in 
 the table that is at the end of the document. 
 * Point 1 and 2 can be perform when the page is loaded or when somebody 
 clicks in a link, you choose which one.
------------------------------------------------------------------------------*/

function setTableHeaderOpacity(){
		$("th").css("opacity","0.4");
};


/*
// Pasing opacity as a map/object to the function. (Note: We can pass multiple maps/objects)
function setTableHeaderOpacity(){
		$("th").css({ opacity:0.4 });
}
*/


/* ------------------------------------------------------------------------------------------
 2. Create a class(named it as you wish) in the style.css file  (css.css) and add it to
 each odd td element in the table that is at the end of the document. 
 * Point 1 and 2 can be perform when the page is loaded or when somebody 
 clicks in a link, you choose which one.
 ------------------------------------------------------------------------------------------- */

// Verifications:

// How many elemnts exist in the table?
function countElements(){
	console.log("The amount of td hidden elements is: " + $("td").length);
};

// How many odd elemnts exist in the table?
// IMPORTANT: body:hidden will look for hidden in the body
// IMPORTANT: body :hidden will look for hidden in the whole document (Pending to check if includes hidden
// like in the inputs, i.e: <input> type="hidden" atributes visible at the end of the html code)
function countOddElements(){
	console.log("The amount of odd td elements is: " + $("td:odd").length);
};


// HERE IS THE DEAL ABOUT POINT 2:

// Add class to element odds
function addClassOnOddTblDes(){
		$("td:odd").addClass("join");	
};

// Some resources:
// Add class to element odds on click:
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_addclass
// http://stackoverflow.com/questions/2011474/jquery-add-class-to-certain-elements
// Add class to element odds on click using a function:
// http://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_html_addclass_func


//Verifications:

// Determines if any element of the matched set possesses the passed class name, returning TRUE or FALSE;
function hasJoinClass(){
		var truefalse = $("td:odd").hasClass("join"); 
		console.log("Has added table decription new class 'join': " + truefalse);
};


/* ------------------------------------------------------------------------------------------------------
3. Every time the user clicks on an option in the global nav("jQuery Docs", "Sandbox" or "Resources")
 remove the "selected" class from the others and add it to the option clicked by the user.
  (Note: Do not use custom JQuery events)
------------------------------------------------------------------------------------------------------- */

							/* ----- Next Code is not involved but useful ----- */

							/*
							//Remove selected class on click:

							// We must handle the listener event onclick
							function removeSelectedClass(){

									var idTag=$("#nav").find("a");
									console.log (idTag); 

									idTag.click(function(){
										$("li.selected").removeClass("selected");
										//$("this.idTag").addClass("selected");

									 });

							};

							*/
							/* ----- End OF Next Code is not involved but useful ----- */

// We must handle the listener event onclick
function removeAddSelectedClass(){

	var idTag = $("#nav").find("a");

	// A. On click:
	idTag.click(function(){
					console.log (idTag);
					//BAD: console.log ("My anchor array:" + idTag);
					//console.log ("An anchor href by its array index:" + idTag[0]);

							/* ----- Next Code is not involved but useful ----- */

							// Does the first li element have the class "selected"?
								function hasSelectedClass(){
									var truefalse = $("li:first").hasClass("selected");
									console.log("Does the first li element have the class 'selected'?:" + truefalse);
								};
								hasSelectedClass();

							// Get the element index
							i = 0;
							var lis = $("#nav").find("a").get(i);
							console.log("Get the[" + i + "] list element index: " +lis);

							/* ----- End OF Next Code is not involved but useful ----- */


					// Get this (THE CLICKED) element index:
					//UNCOMMENT TO GET INDEX: alert( $("#nav").find("a").index(this) );

							/* ----- Next Code is not involved but useful ----- */

							/*
							// Example about how to get 'this' element on click:
							//$('ul li').on('click', function(e) {
								//alert($(this).index()); 
							//});
							//OR
							//$('ul li').click(function() {
							//alert($(this).index());
							//});
							*/

							
							/*
							// Next function returns the amount of li elements. 
							// Is not needed to count in for cycles, they use:
							// LiElements.length (see below)
							function countListItems(){
								console.log("The amount of li elements is: " + $("#nav").find("a").length);
								// We needed to cut the find string to treat the LENGHT as a number.
								var liElements = $("#nav").find("a");
								// To show the array object (like var lis)
								//console.log(liElements);
								// Next we demonstrate the function is not required, however made by me
								// to demonstrate how functions can return values we would use later to
								// obtain N list Items.
								console.log(liElements.length);
								// Where the function returns its result as a value.
								countListItems == liElements.length;
							};

							//Call the function and log the result
							countListItems();
							console.log(countListItems());

							//We are unable to do something like this:
							N = countListItems();
							*/

							/* ----- End OF Next Code is not involved but useful ----- */

				// C. For li-indexes from 0 to N:

				// Obtain the li array object
				var LiElements = $("#nav").find("a");
				//Logs the li array object in the console
				console.log(LiElements);

							/* ----- Next Code is not involved but useful ----- */

							/*
							//Skip loggin the i index example
							for(var i = 0; i < LiElements.length; i++)
							{
								if (i == $("#nav").find("a").index(this)){
									// skip logging the li-index i
									continue;
								}
								console.log("li-index: " + i);
								console.log("hello");
							}
							*/

							/* ----- End OF Next Code is not involved but useful ----- */

				for(var i = 0; i < LiElements.length; i++)  // B. Count list items:
				{
					// D. If li-index = thisIndex then addclass "Selected":
					// if index equals this button clicked
					if (i == $("#nav").find("a").index(this)){

						// Then add class "Selected" to the clicked li
						// of the nav("jQuery Docs", "Sandbox" or "Resources")
						// with ids "1" , "2" or "3" in the html.
						var selectThis = $("#nav").find("li");
						// Show the object index content in the logs
						console.log("obj:");
						console.log(selectThis[i]);
						// Declare thisis to add the class to the clicked li:
						//We required to adapt next example
						//$("td:odd").addClass("join");
						var thisis = selectThis[i];
						$(thisis).addClass("selected");	
						// Verify and log that the class "selected" has been added to the clicked li
						var truefals = $(thisis).hasClass("selected");
						console.log("Does the current li element have the class 'selected'?: " + truefals);

					}
					// Log the current li-index before start a new for cycle
					//console.log("li-index: " + i);
					//console.log("End of Cycle");

					// E. Else li-index <> then removeclass "Selected":
					// multi tab code section //

					// If we add this code section, the visited link behaviour of the nav menu
					// where all the clicked elements should be red, will look like a multi tab
					// wall because only the current clicked section will be in colored in red
					// and the rest of sections will be in black.
					else {
					var selectThis = $("#nav").find("li");
					console.log("obj:");
					console.log(selectThis[i]);
					var thisis = selectThis[i];
					$(thisis).removeClass("selected");	
					var truefals = $(thisis).hasClass("selected");
					console.log("Does the current li element have the class 'selected'?: " + truefals);
					}
					// End of multi tab code section //

					// Log the current li-index before start a new for cycle
					console.log("li-index: " + i);
					console.log("End of Cycle");

				} 	// End of for Li-Elements

				// Log the selected class added to the li element (node)
				var selectedAddedClass = $(".selected");
						for(var i = 0; i < selectedAddedClass.length; i++){
							console.log(selectedAddedClass[i]);
						}

	}); // End of idTag.click(function()

};	// End of removeAddSelectedClass Function


/* -------------------------------------------------
	Prepare page
 --------------------------------------------------- */

$(document).ready(function(){

		setTableHeaderOpacity();
		//countElements();
		//countOddElements();
		addClassOnOddTblDes();
		hasJoinClass();
		//removeSelectedClass();
		removeAddSelectedClass();
 });


							/* ----- Next Code is not involved but useful ----- */
							/*
							// The snippet works but the function to point 3. is hidden under the event handler.

							function HandleEvent(){
							var idTag=$("#nav").find("a");

							 		
									idTag.click(function(){
										$("li.selected").removeClass("selected");
										$("this.idTag").addClass("selected");
									 });// end handle event
								}

							$(document).ready(function(){

									setTableHeaderOpacity();
									//countElements();
									//countOddElements();
									addClassOnOddTblDes();
									hasJoinClass();

									HandleEvent();

							 });

							*/
							/* ----- End OF Next Code is not involved but useful ----- */
