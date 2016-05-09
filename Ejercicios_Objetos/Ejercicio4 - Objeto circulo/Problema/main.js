// Escribe aquí tu codigo Javascript
function ejercicio_4(){
	var circulo = {
		radio: parseFloat(prompt("Ingrese el radio del circulo:")),
   		 area: function(radio){
        return (Math.PI*Math.pow(this.radio,2))  
    	},
    	longitud: function(radio){
        return  (2*Math.PI*this.radio)
    	}
	}
	alert("Área: "+circulo.area().toFixed(3)+" Longitud: "+circulo.longitud().toFixed(3));
}
ejercicio_4();
