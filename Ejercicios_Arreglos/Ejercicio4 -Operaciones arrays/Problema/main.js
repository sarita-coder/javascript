// Escribe aquí tu codigo Javascript
function ejercicio_4(){
	var array=[true,5,false,"hola","adios",2];
	alert((((array[4]).length)>((array[5]).length)? "El mayor es hola, ":"el mayor es adios, ")+(array[0])+", "+(array[2])+", suma: "+( array[1] + array[5] )+"resta: "+( array[1]-array[5] )+",producto"+(array[1]*array[5])+"division: "+(array[1] / array[5]))+", resto: "+(array[1]%array[5]);
	alert(JSON.stringify(array));
}
ejercicio_4();


