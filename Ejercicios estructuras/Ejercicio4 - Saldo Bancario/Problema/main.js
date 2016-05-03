// Escribe aquí tu codigo Javascript
function ejercico_4(){
	var result=" ";
	do {
		var numero_cuenta=parseInt(prompt("ingrese # cta :"));
			if(numero_cuenta>0){
				var nombre=prompt("Ingrese su nombre: ");
				var saldo=parseInt(prompt("Ingrese su saldo actual : "));
				result+="El numero_cuenta"+numero_cuenta+", Nombre : "+nombre+", Estado de cuenta"+(saldo > 0 ? " Acreedor" : ( saldo === 0 ? " Nulo ":" Deudor"))+"\n";
			}
		} while (numero_cuenta>0);
	return result;
}
var saldo_bco=ejercico_4();
alert("Datos del cliente : \n"+saldo_bco);

//(saldo > 0 ? " Acreedor" : " Deudor")