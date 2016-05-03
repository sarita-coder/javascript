// Escribe aquí tu codigo Javascript
function ejercico_10(){
	var i=0;
	var k=0;
	var j=0;
	var h=0;
	do {
		var dni=parseInt(prompt("ingrese # dni:"));
			if(dni>0){
				var edad=parseInt(prompt("Ingrese su edad: "));
				var sexo=prompt("Ingrese su sexo :");
				k=(sexo=='femenino')? +1 :k;
				j=(sexo=='masculino')? +1:j;
				h=(sexo=='masculino')?((edad>=16 && edad<=65)? +1:k ):k;
				i++;
			}
		} while (dni>0);
	return "El total de censo: "+i+"\n Cantidad de varones: "+j+"\n cantidad de mujeres: "+k+" \n hombres mayores a 16 y menores a 65: "+h;
}
var censo=ejercico_10();
alert("Datos del cliente : \n"+censo);

