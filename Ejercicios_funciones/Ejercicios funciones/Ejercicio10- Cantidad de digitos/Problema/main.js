// Escribe aquí tu codigo Javascript
function ejercicio_10(numero) {
	 if (numero > 0) {
	 	var resultado=(numero.toString()).length;
	 } else { var resultado="Ingrese número positivo";}
	return resultado; 
}
var numero =parseInt(prompt("Ingrese numero positivo"));
var resultado=ejercicio_10(numero);
alert("Resultado es :"+resultado);


