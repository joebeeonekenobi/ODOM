var requireThereToBe;
requireThereToBe = Emitter;

O = function(elementTag){

	/*

		o = new O('div');

	*/

	if (this===window){
		throw new Error("OElement Error, this===window. Call constructor with 'new' keyword.")
	}

	var o = this;

	o.element = document.createElement(elementTag);

	o.OeditProperties = function(json){

		for(var j in json){

			o.element[j] = json[j];
		}

		return o;
	}

	o.Ostyle = function(json){

		for(var j in json){

			o.element.style[j] = json[j];
		}

		return o;
	}

	return o;
}