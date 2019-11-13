// var yonatanGreeter = {};
// yonatanGreeter.name = "Yonatan";
// var greeting = "Hello :";
// yonatanGreeter.sayHello = function () {
// 	console.log(greeting + yonatanGreeter.name);
// }

(function (window) {
	var yonatanGreeter = {};
	yonatanGreeter.name = "Yonatan";
	var greeting = "Hello :";
	yonatanGreeter.sayHello = function () {
		console.log(greeting + yonatanGreeter.name);
	}

	window.yonatanGreeter = yonatanGreeter;
})(window);