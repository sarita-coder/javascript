// Escribe aquí tu codigo Javascript
function ejercicio_1 () {
	 var resultado=Infinity;
	 	for (var i = 1; i <= 3; i++) {
	 		var numero=parseInt(prompt("Ingrese número "+":"));
	 		resultado=(numero>resultado) ? resultado :numero;
	 	}
	 	return resultado;
}
alert("El número menor es: "+ejercicio_1());


