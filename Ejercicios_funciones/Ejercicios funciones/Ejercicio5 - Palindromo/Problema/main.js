// Escribe aquí tu codigo Javascript
function ejercicio5(){
	var cadena=((((prompt("Ingrese texto al palindromo:").toLowerCase()).split(" ")).join("")).split(""));
	var num=cadena.length;
	var k=0;
	for (var i = 0; i < num; i++) {
		if(cadena[i] == cadena[num-1-i]){
			k++;
		}
		//k=( cadena[i] == cadena[num-1-i] ) ? +1 : k ; 
	}
	return (k == num ? "Es palindromo" : "No es un palindromo");
}
alert(ejercicio5());




