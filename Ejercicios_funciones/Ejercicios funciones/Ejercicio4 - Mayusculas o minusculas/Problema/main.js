// Escribe aquí tu codigo Javascript
function ejercicio4(){
	var texto=prompt("Ingrese la palabra a inspeccionar: ");
	var result="La palabra esta formada por: "+((texto)==texto.toUpperCase()? "Mayúscula": ((texto)==texto.toLowerCase()? "minúscula": "Tiene mayuscula y minuscula"));
	return result;
}
alert(ejercicio4());


