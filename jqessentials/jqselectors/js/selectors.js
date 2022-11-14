/* Some selector functions */


/* 1. Select all of the div elements that have a class of "module". */

function selDivsClassModule(){
	var divsClassModule = $("div.module");
	for(var i = 0; i < divsClassModule.length; i++){
		console.log(divsClassModule[i]);
	}
}


/* 2. Come up with three selectors that you could use to get the third item in
 the #myList unordered list. */

 // 2.1
function findThirdItemA(){
	console.log($("#myList li").get(2));
}

// 2.2
function findThirdItemB(){
	console.log($("#myList li#myListItem"));
}

// 2.3
function findThirdItemC(){
	console.log($("#myListItem"));
	alert("This is the best finder option of the three due to the id reduces the search process");
}


/* 3. Select the label element for the search input using an attribute selector and print the element. */

// 3.1
function findSearchLabelA(){
	console.log($('label[for="q"]'));
}

// 3.2
function findSearchLabelB(){
	console.log($('#search label[for="q"]'));
}


/* 4. Figure out how many elements on the page are hidden (hint: .length). */

// 4.1
// IMPORTANT: body:hidden will look for hidden in the body
// IMPORTANT: body :hidden will look for hidden in the whole document (Pending to check if includes hidden
// like in the inputs, i.e: <input> type="hidden" atributes visible at the end of the html code)
function countHidden(){
	console.log("The amount of hidden elements is: " + $("body:hidden").length);
}

//4.2
function countHiddenB() {
	// Carefully use body:hideen OR body :hidden
	var  hiddenattrs = $("body :hidden");
	//console.log (hiddenattrs);
	for ( var i = 0; i < hiddenattrs.length; i++) {
		// Code place
		// To see the hidden attributes in the console
		console.log(hiddenattrs[i]);
	}
	console.log (i);

}


/* 5. Figure out how many image elements on the page have an alt attribute. */

// See selector number 3
// A Function like this is good to check the loss of atributes and values of tags
function countImageWithAltAttr(){
	console.log("The amount of image elements with the alt attribute is: " + $('img[alt]').length);
}


 /* 6. Select all of the odd table rows in the table body. */


// 6.1 Example with 1 table in the html. How many tables are in the html?

function countBodyTables(){
	console.log("The amount of tables in the body is:" + $("table").length);
}

//6.2 Ok I know there's just a table. Now the result:
function findTbodyOddTableRows(){
	var elements = $("tr:odd");
	var values = "Odd elements\n";
	for(var i = 0; i < elements.length; i++){
		//values = ( values + html code of elements)
		values += $(elements.get(i)).html() + "\n";
	}
	alert(values);
}


/* 7. Select all the input elements with type 'submit' and print its current value */

	function typeSubmitInputElements(){
		var elements = $("body :submit");
		var values = "Submit input elements\n";
		for(var i = 0; i < elements.length; i++){
			//values = ( values + attribute Value= of elements)
			values += $(elements.get(i)).val() + "\n";
		}
		alert(values);
	}