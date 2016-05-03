// Escribe aquí tu codigo Javascript
function hola(palabra){
	var result="";
	switch (palabra) {
		case "casa":
			result="house";
			break;
		case "mesa":
			result="table";
			break;
		case "perro":
			result="dog";
			break;
		case "gato":
			result="cat";
			break;
		default:
			result="Ingrese de nuevo no se encontro dicha palabra";
			break;
	}
	return result;
}
alert("Traduciendo palabras: gato, perro, casa, mesa. ");
var palabra=prompt("Ingrese la palabra a traducir: ");
alert("Palabra a traducir:\n "+palabra+" significa: "+hola(palabra));

