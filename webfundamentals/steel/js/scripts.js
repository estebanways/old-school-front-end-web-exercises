
  
 var imagesArray = ["images/slide1.jpg",   // CREO UN ARRAY CON TODOAS LAS IMAGENES
					"images/slide2.jpg",
					"images/slide3.jpg",
					"images/slide4.jpg",
					"images/slide5.jpg",
					];


var changingImage = document.getElementById("image");    // LLAMO AL ELEMENTO IMAGEN EN EL HTML QUE TIENE EL ID "image"
var imageIndex=0; // ESTO ES UN CONTADOR LO USO PARA LLAMAR LAS IMAGENES DEL ARRAY
	
		function changeImage(){  // ESTA FUNCION CAMBIARA LA IMAGEN CAMBIADO SU ATRIBUTO SRC POR UNA DE LAS DIRECCIONES DE IMAGENES DEL ARRAY
			
			changingImage.setAttribute ("src", imagesArray[imageIndex]);
			imageIndex++;  // INCREMETO 
			if (imageIndex >imagesArray.length-1){  // CUANDO LLEGO A LA ULTIMA IMAGEN VUELVO A 0
			imageIndex=0;
			
			}//if
		}

	
	setInterval(changeImage,4000); // ESTA FUNCION HACE QUE CADA 5 SEGUNDO LA FUNCION CHANGEIMAGE ACTUE
				


