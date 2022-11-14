      $(document).ready (function() {
						$("#theList tr").addClass("color1");  
			 
						$("#theList tr").hover( function() { $(this).toggleClass("highlight");},
												function() { $(this).toggleClass("highlight");}
											   );
						

				var productos=["Samsung Galaxy Tab 2","Printer HP 250","Camera Canon", "JavaScript Ninja Book","Samsung Galaxy S III White ","Samsung Galaxy S4 Black ","Professional JavaScript Book"];
				
                var precios=["520.00","120.77","340.55","56.77","34.87","9.66","234.77","234.55","67.88","234.88","45.77","43.00"];		
    		    
				
						$("#CrearFila").click(function() {
								productoSeleccionado=productos[Math.floor((Math.random()*6)+1)];				
								precioSelecionado=precios[Math.floor((Math.random()*11)+1)];
						
							   $("tr:last").after("<tr><td>"+productoSeleccionado+"</td> <td>"+precioSelecionado+"</td></tr>");
							   $("tr:last").addClass("color1").hover( function() { $(this).toggleClass("highlight");},
																	  function() { $(this).toggleClass("highlight");}					   );
						});		

								
										
										
			    });
		
		/*http://api.jquery.com/hover/  =) */

				
				
				