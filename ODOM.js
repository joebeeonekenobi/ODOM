
O = function(elementTag){

	if (this===window){
		throw new Error("OElement Error, this===window. Call constructor with 'new' keyword.")
	}

	/*

		o = new O('div');

	*/


	var o = this;

	o.element = document.createElement(elementTag);

	o.properties = function(json){

		for(var j in json){

			o.element[j] = json[j];
		}

		return o;
	}

	o.style = function(json){

		for(var j in json){

			o.element.style[j] = json[j];
		}

		return o;
	}

	o.listen = function(listenTo, func){

		o.element.addEventListener(listenTo, func);

		return o;
	}

	o.stopListening = function(listenTo, func){

		o.element.removeEventListener(listenTo, func);

		return o;
	}

	o.appendTo = function(targetParent){

		if(targetParent instanceof O){

			targetParent.element.appendChild(o.element);
		}
		else if(targetParent instanceof HTMLElement){

			targetParent.appendChild(o.element);
		}
		else{

			console.error({
				"name" : "ODOM Error",
				"Method" : "appendTo",
				"Reason" : "targetParent was not an expected type.",
				"object" : o,
				"target" : targetParent
			})
		}

		return o;
	}

	o.uncouple = function(){

		o.element.remove();

		return o;
	}

	o.addChild = function(targetChild){

		targetChild.appendTo(o);

		return o;
	}

	return o;
}