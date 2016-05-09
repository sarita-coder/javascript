// Escribe aquí tu codigo Javascript
function ejercicio_5(){
	var identificar = {
		descrip:["guardar","buscar"],
		contactos:[],
		numero:[],
	}
	alert(identificar.descrip[0]+" tu contacto ");
	identificar.contactos.push(prompt("Ingrese el nombre del contacto"));
	identificar.numero.push(prompt("Ingrese número de teléfono:"));
	var buscar=prompt(identificar.descrip[1]+" tu contacto");
	for (var i in identificar.contactos) {
		if(identificar.contactos[i]==buscar){
			var result="El contacto: "+identificar.contactos[i]+", número celular es "+identificar.numero[i];
		}
	}
	return result;
}
alert(ejercicio_5());
