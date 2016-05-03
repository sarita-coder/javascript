// Escribe aquí tu codigo Javascript
function ejercicio_2(num){
	if(num > 0){
		var factorial=1;
		for(var i= 1; i<=num ; i++){
			factorial=factorial*i;
		}
		return factorial;

	} else {
		alert("Ingrese un mumero mayor a cero. :)");
	}
}
alert("Hola Vamos a calcular el Factorial");
var num = parseInt(prompt("Ingrese el número a calcular"));
var factorial=ejercicio_2(num);
alert("El resultado del factorial del número "+num+" es de: "+factorial);

