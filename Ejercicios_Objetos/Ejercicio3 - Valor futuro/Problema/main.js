// Escribe aquí tu codigo Javascript
function ejercicio_3(){
	var valor_futuro ={
		descrip : ["Valor Presente","Tasa de interés","Periodo","Resultado"],
		valor:[],
	}
	for (var i = 0; i <=2; i++) {
			valor_futuro.valor.push(parseFloat(prompt("Ingresar "+(valor_futuro.descrip[i])+" :")));
	}
	var resultado=(valor_futuro.valor[1]/100+1);
	valor_futuro.valor.push((valor_futuro.valor[0])*Math.pow(resultado,valor_futuro.valor[2]));
	alert("....valor: "+valor_futuro.valor[0]+"\n ....tasa: "+valor_futuro.valor[1]+"% \n ....periodo:"+valor_futuro.valor[2]+"\n ....resultado:"+valor_futuro.valor[3]);
}
ejercicio_3();


