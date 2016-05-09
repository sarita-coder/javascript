// Escribe aquí tu codigo Javascript
function ejercicio_1(){
var meses = {
	nombreMes: ["enero","febrero","marzo","abril","mayo","junio","julio","agosto","setiembre","octubre","noviembre","diciembre"],
	clase: ["Primer trimestre","Segundo Trimestre","Tercer trimestres","Cuarto Trimestre"],
}
var ingresa=prompt("Ingresa mes:").toLowerCase();
	for (var i in meses.nombreMes){
		if(meses.nombreMes[i]==ingresa){
			return (i<=3) ? meses.clase[0] : ((i<=6) ? meses.clase[1] : ((i<=9) ? meses.clase[2]: meses.clase[3]));
		} 
	}
}
alert(ejercicio_1());

