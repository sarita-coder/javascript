//Escribe aquí tu codigo Javascript
function ejercicio_9() {
	var num=parseInt(prompt("Ingrese un número:"));
	var total="";
	for (var i=0; i<10; i++){
		var multiplo=num*i;
		total+=multiplo+", ";
	}
	return total;
}
var result=ejercicio_9();
alert("Los multiplos son: "+result);
