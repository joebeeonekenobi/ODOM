main = function(){

	window.y = new O("div");

	window.x = new O("div")
		.style({
			width : "200px",
			height : "300px"
		})
		.appendTo(document.body)
}

window.onload = function(){



	main();
}