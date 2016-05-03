// Escribe aquí tu codigo Javascript
alert("Creando array con los mesese del Año");
function lista(){
	var lista=[];
	for (var i = 1; i <= 12; i++) {
 	var a = (prompt("Ingrese el nombre del mes "+i+" : "));
 	lista.push(a);
 	}
 	alert(JSON.stringify(lista));
}
lista();



