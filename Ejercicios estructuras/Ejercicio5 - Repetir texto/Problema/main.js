// Escribe aquí tu codigo Javascript
function ejercicio_5(texto,repetir){
	var result="";
	for(var i=1;i<=repetir;i++){
		result+=texto+" "+i+"\n";
	}
	return result;
}
var texto=prompt("Ingrese el texto a repetir: ");
var repetir=parseInt(prompt("Número de veces a repetir: "));
alert(ejercicio_5(texto, repetir));


