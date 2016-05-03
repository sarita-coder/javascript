// Escribe aquí tu codigo Javascript
function lista(n){
	var lista=[];
	for (var i = 1; i <= n; i++) {
 	var a = (prompt("Ingrese el número "+i+" : "));
 	lista.push(a);
 	}
 	alert(JSON.stringify(lista));
}
alert("Creando array de palabras ");
var n = parseInt(prompt("Ingrese las numeros de elementos del array:"));
lista(n);




