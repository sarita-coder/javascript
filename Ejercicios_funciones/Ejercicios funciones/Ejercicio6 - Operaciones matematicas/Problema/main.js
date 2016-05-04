// Escribe aquí tu codigo Javascript
function ejercicio_6() {
	var a=parseInt(prompt("Ingrese el primer número:"));
	var b=parseInt(prompt("Ingrese el segundo número:"));
	var result=0;
	var resulto="";
	var operacion = parseInt(prompt("Ingrese la operacion a calcular: \n 1. Suma: \n 2. Resta: \n 3. Multiplicación: \n 4. Division: "));
	switch (operacion) {
		case 1 :
			result=a+b;
			break;
		case 2 :
			result=a-b;
			break;
		case 3 :
			result=a*b;
			break;
		case 4 :
			result=a/b;
			break;
		default:
			return "ingrese operación correcto";
	}
	return result;
}
alert("Iniciando la calculadora: ");
alert(ejercicio_6());


