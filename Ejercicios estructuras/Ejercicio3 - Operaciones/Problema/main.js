// Escribe aquí tu codigo Javascript
function ejercicio_4(num_1,num_2) {
	if(num_1>num_2){
		var suma = num_1 + num_2;
		var resta = num_1 - num_2;
		alert("El resultado de la suma es: "+suma+" Resultado de la resta es: "+resultado);
	} if (num_1===num_2){
		alert("Los números son iguales")
	} if (num_2>num_1){
		var div=num_2/num_1;
		var multi=num_2*num_1;
		alert("El resultado de la division es "+div+" el resultado de la multiplicación es "+multi);
	}
}
alert(" Operaciones Matemáticas");
var num_1=parseFloat(prompt("Ingrese el primer número: "));
var num_2=parseFloat(prompt("Ingrese el segundo número: "));
var operaciones=ejercicio_4(num_1,num_2);




