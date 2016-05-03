// Escribe aquí tu codigo Javascript
function ejercicio_6(){
    var resto=null;
    var suma=0;
    var result="";
	for (var i =  1; i <3000; i++) {
		resto=i%11;
		if (resto==0){
			suma=suma+i;
			result+=i+", ";
		}
	}
	alert("Calculo de los multiplos de 11 menores a 3000: \n \n"+result+"\n \n Suma Total de los multiplos de 11: \n"+suma);
}
ejercicio_6();


