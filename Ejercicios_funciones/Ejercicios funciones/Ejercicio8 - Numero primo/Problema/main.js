// Escribe aquí tu codigo Javascript
function ejercicio_8() {
	var num = parseInt(prompt("Ingrese el número a calcular:"));
	var result="";
	if (num === 1 || num === 2 ){
		result="Es un numero primo";
	} else {
		for (var i=2; i < num; i++) {
			if(num%i == 0){
				result="No es  un número primo";
				break;
			}else{
				result="Es un primo";
				break;
			}
		}		
	}
	return result;
}
alert(ejercicio_8());


