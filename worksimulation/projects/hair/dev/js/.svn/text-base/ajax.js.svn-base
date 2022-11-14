
//Function that allows ajax functionality, receives the parameters:
//IdOfElementToBeChanged = string, the id of the element where the content is going to be inserted, for example "pageContent"
//link = string, url of the file where the content that is going to be added is. For example, "home.html"
//isAsynchronous = boolean, indicates whether or not the content is added asynchronously

function loadXMLDoc(IdOfElementToBeChanged, link, isAsynchronous){
  var xmlhttp;
  if (window.XMLHttpRequest){
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp=new XMLHttpRequest();
  }else{
    // code for IE6, IE5
    xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }

  xmlhttp.onreadystatechange=function(){
    if (xmlhttp.readyState==4 && xmlhttp.status==200){
      document.getElementById(IdOfElementToBeChanged).innerHTML=xmlhttp.responseText;
    }
  }
  xmlhttp.open("GET",link, isAsynchronous);
  xmlhttp.send();
}
