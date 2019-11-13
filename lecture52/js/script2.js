// var yaakovGreeter = {};
// yaakovGreeter.name = "Yaakov";
// var greeting = "Hi :";
// yaakovGreeter.sayHi = function () {
// 	console.log(greeting + yaakovGreeter.name);
// }

(function (window) {
	var yaakovGreeter = {};
	yaakovGreeter.name = "Yaakov";
	var greeting = "Hi :";
	yaakovGreeter.sayHi = function () {
		console.log(greeting + yaakovGreeter.name);
	}

	window.yaakovGreeter = yaakovGreeter;
})(window);