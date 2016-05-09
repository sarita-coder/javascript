// Escribe aquí tu codigo Javascript
function ejercicio_7(){
	var gasolinera={
		total:parseFloat(prompt("Ingrese el Stock")),
		precioGl:parseFloat(prompt("Ingrese el precio por galón")),
		venta:parseFloat(prompt("Ingrese el galon a comprar: ")),
	}
	do{
	gasolinera.venta=parseFloat(prompt("Ingrese el galon a comprar: "));
	var costo=((gasolinera.venta)*gasolinera.precioGl);
	gasolinera.total=(gasolinera.total-gasolinera.venta);
	if(gasolinera.total>0){
		alert("Stock Vacio");
	}
	alert("Costo de la Compra: "+costo+", Stock: "+gasolinera.total);
	}while(gasolinera.total>0);
	
}
ejercicio_7();

