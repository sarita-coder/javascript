// Escribe aquí tu codigo Javascript
function ejercicio_6(){
	var imc ={
		peso: parseFloat(prompt("Ingrese Peso: ")),
		talla: parseFloat(prompt("Ingrese Talla: ")),
	}
	var imc_result=(imc.peso/(Math.pow(imc.talla,2)));
	alert("Datos:\n "+"peso: "+imc.peso+"\n talla:"+imc.talla+"\n Resultado IMC: "+imc_result.toFixed(2));
}
ejercicio_6();



