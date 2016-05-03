// Escribe aquí tu codigo Javascript
function triangulo(){
	var a=parseInt(prompt("Ingresa el lado 1: "));
	var b=parseInt(prompt("Ingresa el lado 2: "));
	var h=parseInt(prompt("Ingresa el lado 3: "));
   	if(((h*h) === ((b*b)+(a*a))) || ((a*a) === ((b*b)+(h*h))) || ((b*b) === ((h*h)+(a*a))) ){
   		alert("El triangulo rectangulo"); 
   	} else if (h==a && h==b){
   		alert("El triangulo es equilatero");
   	}else if (a==b || b==h){
   		alert("El triangulo es isoseles");
   	} else {
   		alert("El triangulo es escaleno");
   	}
}
triangulo();


