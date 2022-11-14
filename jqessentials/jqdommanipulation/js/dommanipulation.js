/* DOM Manipulation */

/*
	EXAMPLES:

	// CSS example to Test the JS file file works
	$("h1").css("opacity","0.4");
	console.log("hello");


	// Insert before example
	var img = $("#img2");
	$("#car1").insertBefore(img);


	// text() example
	function setText(){
		$('.demo-container').text('<b>This is a new text</b>');
	}


	// Remove example
	var elementRemoved;
	function removeContainer(){
		elementRemoved = $(".container").remove();
	}


	//Example to Add many elements to the same container
	// You will concatenate them all into a single string, and then
	// append it to the container instead of appending one by one
	function insertBookmarkBar(){
	var myItems = [], $myList = $('#mylist');
	for(var i=0; i < 100; i++){
		myItems.push('<li>item ' + i + '</li>');
	}
	$myList.append(myItems.join( "" ));


	// Example of append items
	function appendLiItems () {
		var img = $("#img1");
		$("#source").append(img);
	}


	// Achor example:
	//  <a href="#header" title="return to the top of the page">Back to top</a>


	// Example to insert same code (li) N times:
	// This useful example has not anchorItems as the final result below.
	function insertBookmarkBar(){

		// Concatenate every element Item into a single string
		var myItems = [], $navList = $('#nav');

		// We are unable to estimate LiElements.length before Elements are in the DOM
		// Then we need to know how many elemets to insert (3 in this case)
		for(var i=0; i < 6; i++){
			// .push: Inserts chains inside the string
			//myItems.push('<li>item ' + i + '</li>');
			myItems.push('<li></li>');
			console.log
		}

		// Append the complete Item string to the container instead of appending one by one
		// .join:  Separates string chains
		$navList.append(myItems.join( '' ));
		console.log(myItems);

	};  // End of insertBookmarkBar()

	*/


/* ---------------------------------------------------------------------------
Prepare the headers
------------------------------------------------------------------------------ */

/* Remove reset css file after <title> to keep page css */

function removeResetFile() {
	$("link").remove();
};


/* Insert new css before <script> */

function insertLinkTagBeforeScriptTag() {

	// New html
	var newHtml = '<link href="css/style.css" rel="stylesheet" type="text/css" media="all" />';
	console.log (newHtml);

	// Target (tag)
	var script = $("script");

	$(newHtml).insertBefore(script);

};


/* ---------------------------------------------------------------------------
Add bookmarks to html when the page laods. The user will click on an option
to go to the a page section
------------------------------------------------------------------------------ */

// Notes:
// The bookmark structure should be added at the end of the header section (div id=header).
// We will use" insert before" from DOM Manipulation course.
// And use the for cycle of the page # 71 of the mans.
// We will use the nav list (menu) of the previous exercise and add css after <link/>).
// We will be inspired by the JS slider of the Last week assignment, course 3 Web fundamentals 101


/* Add the Bookmark Bar container */

function insertContainerBeforeScriptTag() {

	// New html
	var newHtml = '<div id=\"mylist\"><ul id=\"nav\"></ul></div>';
	console.log (newHtml);

	// Target (tag)
	//var script = $("#intro");

	$(newHtml).insertBefore("#intro");

};


/* Add many elements to the  container */

function insertBookmarkBar(){

	// Concatenate the Bar Anchors in an array
	var anchorItems =  ['<a href="#header" title="Back to the top">Top</a>',
						'<a href="#intro" title="Go to Introduction Section">Introduction</a>', 
						'<a href="#ingredients" title="Go to Ingredients Section">Ingredients</a>', 
						'<a href="#prepare" title="Go to Prepare Section">Prepare</a>', 
						'<a href="#decorate" title="Go to Decorate Section">Decorate</a>', 
						'<a href="#serve" title="return to the top of the page">Serve</a>'];
	console.log(anchorItems[3]);
	console.log(anchorItems);

	// Concatenate every element Item into a single string
	var myItems = [], $navList = $('#nav');

	// We are unable to estimate LiElements.length before Elements are in the DOM
	// Then we need to know how many elemets to insert (6 <a> in this case)
	for(var i=0; i < 6; i++){

		//for(var j=0; j < 6; j++){

				// .push: Inserts chains inside the string (array)
				//myItems.push('<li>item ' + i + '</li>');
				myItems.push('<li>' + anchorItems[i] + '</li>');
				//myItems.push(anchorItems);

		//}

	}

	// Append the complete Item string to the container instead of appending one by one
	// .join:  Separates string chains
	$navList.append(myItems.join( '' ));
	console.log(myItems);

};  // End of insertBookmarkBar()


/* -------------------------------------------------
	Prepare page
 --------------------------------------------------- */

//When the page loads functions list:
removeResetFile();
insertLinkTagBeforeScriptTag();


$(document).ready(function(){

		//Events to handle (listeners):
		insertContainerBeforeScriptTag();
		insertBookmarkBar();

 });
