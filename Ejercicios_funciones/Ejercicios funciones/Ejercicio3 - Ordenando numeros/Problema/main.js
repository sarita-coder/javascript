// Escribe aquí tu codigo Javascript
function ejercicio_3(){
	var num1=parseInt(prompt("Ingrese el Número 1:"));
	var num2=parseInt(prompt("Ingrese el Número 2:"));
	var num3=parseInt(prompt("Ingrese el Número 3:"));
	if(num1<num2 && num1<num3){
		var result="ordenando: "+num1+", "+((num2<num3)?num2:num3)+", "+((num3<num2)?num2:num3);
	}
	if(num2<num1 && num2<num3){
		var result="ordenando: "+num2+", "+((num1<num3)?num1:num3)+", "+((num3<num1)?num2:num1);
	}
	if(num3<num1 && num3<num2){
		var result="ordenando: "+num3+", "+((num2<num1)?num2:num1)+", "+((num1<num2)?num2:num1);
	}
	return result;
}
alert(ejercicio_3());
