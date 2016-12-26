var Esfera = function(radio) {
	this.radio = radio;

	// funcion que calcula el volumen
	this.calcVolumen = function() {
		return Math.PI * this.radio * this.radio;
	};
};