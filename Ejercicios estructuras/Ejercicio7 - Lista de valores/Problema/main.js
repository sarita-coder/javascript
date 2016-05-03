
function lista(){
	var lista=[];
 	for (var i = 1; i <= 3; i++) {
 	var a=parseInt(prompt("Ingrese el número "+i+" : "));
 	lista.push(a);
 	}
 	return lista[0]+lista[1]+lista[2];
}
alert("Calculo de suma de listas:");
alert("Ingrese datos a la primera lista");
var lista_1=lista();
alert("Ingrese datos a la segunda lista");
var lista_2=lista();
alert("Resultado: "+(lista_1 > lista_2 ? "Lista 1 es mayor " : "Lista 2 es mayor "));



