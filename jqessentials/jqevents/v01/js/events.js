/* JQ Events */

/* ---------------------------------------------------------------------------
 Examples of Functions on page load
------------------------------------------------------------------------------ */

/*

function setTableHeaderOpacity(){
		$("th").css("opacity","0.4");
};

*/

/* ---------------------------------------------------------------------------
 s Examples of Functions on events
------------------------------------------------------------------------------ */

/* 
//Example to show html element text with Method Click 

function showDivIdHtmlText() {
	$("#dynamic-row").on('click', function() {
		alert($(this).text());
		}
	);  // end of on (click)
};  // end of preventLinkAction

*/

/*
// Example to set a behaviour on mouse hover and mouse leaving a selector.
$("#event-div").on("mouseenter mouseleave", lighlighted);
		});
		function lighlighted(){
			$("#event-div").toggleClass("lighlighted");
*/

/* ---------------------------------------------------------------------------
 Functions on page load
------------------------------------------------------------------------------ */

function addTableStyle() {

		$("td").css("color","green");
		//$("tr").css("background","black");
		console.log("help");
};

/* ---------------------------------------------------------------------------
 Functions on events
------------------------------------------------------------------------------ */


/*
function addTableRow() {

var newTableRow = '<tr></tr>';

var showMe = $("#theList a :last");
//console.log("showMe: " + showMe);

$(showMe).insertAfter();


};  */


/* ---------------------------------------------------------------------------
 Append a new table row Item
------------------------------------------------------------------------------ */

function appendTableRowItem() {

var newTableRow = '<tr class="highlight"><td></td><td></td></tr>';

// Append the new empty tr
$("#theList").append(newTableRow);


var items = ["coffe","coffe", "sugar","amaretto"];

//Select the first empty cell in a table
//var firstEmptyCell = $('table td:empty:eq(0)');
var firstEmptyCell = $('#theList td:empty:eq(0)');
$(firstEmptyCell).append(items[Math.floor(Math.random() * 3) + 1]);

console.log(firstEmptyCell);


//Select the first empty cell in a table
//var firstEmptyCell = $('table td:empty:eq(0)');
var prices = ["3.00","3.00","0.95","9.59"];
var firstEmptyCell = $('#theList td:empty:eq(0)');
$(firstEmptyCell).append(prices[Math.floor(Math.random() * 3) + 1]);

console.log(firstEmptyCell);

};


/* ---------------------------------------------------------------------------
 Repaint the table row on mouse enter (works like hover over)
------------------------------------------------------------------------------ */

//Pending: The new row could add another row on mouse enter (hover over it, try with method hover).
// For example: $("#theList tr").hover( function() { $(this).toggleClass("highlight");},

function useHighlightClass() {

	$("#theList tr").on('mouseenter', function() {

			console.log("entering");

		$(this).addClass("highlight");
		//$(this).toggleClass("highlight");

		// Add row on event 'mouseenter'
		appendTableRowItem();

		}
	)

};


/* ---------------------------------------------------------------------------
 Prevent the defaut action (event) at click on the link
------------------------------------------------------------------------------ */

function preventDefaultLinkAction() {

	//note the e = event declared in the function parameters 
	$("#dynamic-row").on('click', function(e) {

		e.preventDefault();
		alert("The default action was stopped !");


		//Add row on 'click enter'
		appendTableRowItem();

		}
	)
};  // end of preventDefaultLinkAction




/*
// We must handle the listener event onclick
function removeAddSelectedClass(){

	var idTag = $("#nav").find("a");

	// A. On click:
	idTag.click(function(){
				console.log (idTag);
				//BAD: console.log ("My anchor array:" + idTag);
				//console.log ("An anchor href by its array index:" + idTag[0]);

				// Get this (THE CLICKED) element index:
				alert( $("#nav").find("a").index(this) );


					// Shakespeare novel here


			  }); // End of idTag.click(function()

};	// End of removeAddSelectedClass Function

*/




/* -------------------------------------------------
	Prepare page
 --------------------------------------------------- */

 			//When the page loads functions list:
 				//setTableHeaderOpacity();



$(document).ready(function(){

		//Events to handle (listeners):
			//showDivIdHtmlText();
			addTableStyle();
			useHighlightClass();



			preventDefaultLinkAction();


 });


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

