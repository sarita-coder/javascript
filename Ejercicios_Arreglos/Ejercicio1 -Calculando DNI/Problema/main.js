function ejercicio_1(letras,dni){
	var array =['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','Q','V','H','L','C','K','E','T'];
	dni=((dni>0 || dni<999999999 )? dni: " número invalido ");
	var letra_array=array[dni%23];	
	alert("DNI: "+dni+" letra: "+letra_array+(letras=== letra_array ? ", LETRA VALIDA." : ", LETRA INVALIDA."));
}
var letras=prompt("Ingrese letra");
var dni =(prompt("Ingrese su número de DNI:"));
ejercicio_1(letras,dni);















