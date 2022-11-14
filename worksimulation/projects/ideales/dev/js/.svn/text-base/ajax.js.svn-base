/*++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
Site:       Ajax Menu Navigation Test
Author:     Andrea Venegas Esquivel
Updated:    MM/DD/YYYY   -- HH:MM:SS
            08/02/2013       2:16:66 pm
++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++*/

var xmlhttp;

function loadXMLDoc(url, cfunc) {

    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }


    xmlhttp.onreadystatechange = cfunc;
    xmlhttp.open('GET', url, true);
    xmlhttp.send();
}


$("#gallery").click(function() {

    $('#mainContent').hide();
    $('#ajaxbox').show();

    loadXMLDoc("files/gallery.xml", function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("mainContent").innerHTML = xmlhttp.responseText;
            $('#ajaxbox').fadeOut(1200, function() {
                $('#mainContent').fadeIn(1500);
            });
        }
    });
});

$("#contact").click(function() {

    $('#mainContent').hide();
    $('#ajaxbox').show();

    loadXMLDoc("files/contact.xml", function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("mainContent").innerHTML = xmlhttp.responseText;
            var c = new Contact();
            c.validateForm();

            $('#ajaxbox').fadeOut(1200, function() {
                $('#mainContent').fadeIn(1500);
            });
        }
    });
});

$("#home").click(function() {


    loadXMLDoc("files/home.xml", function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            document.getElementById("mainContent").innerHTML = xmlhttp.responseText;

            var c = new Carousel();
            c.init();
            var f = new Flexslider();
            f.init();
        }

    });

});

$("#services").click(function() {

    $('#mainContent').hide();
    $('#ajaxbox').show();

    loadXMLDoc("files/services.xml", function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("mainContent").innerHTML = xmlhttp.responseText;
            $('#ajaxbox').fadeOut(1200, function() {
                $('#mainContent').fadeIn(1500);
            });
        }
    });
});

$("#about").click(function() {

    $('#mainContent').hide();
    $('#ajaxbox').show();
    loadXMLDoc("files/about.xml", function() {

        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            document.getElementById("mainContent").innerHTML = xmlhttp.responseText;
            $('#ajaxbox').fadeOut(1200, function() {
                $('#mainContent').fadeIn(1500);
            });
        }
    });
});
