var message = "in global";
console.log("global: message= " + message);

var a = function () {
	var message= "inside a";
	console.log("a: message=" + message);

	function b () {
		console.log("b: message= " + message);
	}
	b();
}
a();

function orderChickenWith(sideDish) {
	// if (sideDish == undefined) {
	// 	sideDish = "whatever!";
	// }
	sideDish = sideDish || "whatever!";
	console.log("Chicken with " + sideDish);
}

orderChickenWith("paremesan");
orderChickenWith();

var company = new Object();
company.name = "Facebook";
company.ceo = new Object();
company.ceo.firstName = "Mark";
company.ceo.favColor = "blue";
console.log(company);
console.log("Company CEO name is:" + company.ceo.firstName);
console.log(company["name"]);
company["stock of company"] = 110;
console.log("Stock price is: " + company["stock of company"]);

//Better way: Object literal
var facebook = {
	name : "Facebook",
	ceo: {
		firstName: "Mark",
		favColor: "blue"
	},
	$stock: 110
};

function multiply(x, y) {
	return x * y;
}
console.log(multiply(5,3));
multiply.version= "v.1.0.0";
console.log(multiply.version);

//Function factory
function makeMultiplier(multiplier) {
	var myFunc = function (x) {
		return multiplier *x ;
	};
	return myFunc;
}

var multiplyBy3 = makeMultiplier(3);
console.log(multiplyBy3(10));
var doubleAll = makeMultiplier(2);
console.log(doubleAll(100));

//Passing functions as arguments
function doOperationOn(x, operation) {
	return operation(x);
}
var result = doOperationOn(5, multiplyBy3);
console.log(result);
result = doOperationOn(100, doubleAll);
console.log(result);

// var a =7;
// var b = a;
// console.log("a: " + a);
// console.log("b: " + b);

// b=5;
// console.log("after b update:");
// console.log("a: " + a);
// console.log("b: " + b);
var a = {x: 7};
var b = a;
console.log(a);
console.log(b);

b.x=5;
console.log(a);
console.log(b);

// function changePrimtive(primVal) {
// 	console.log("in changePrimtive...");
// 	console.log("before:");
// 	console.log(primVal);

// 	primVal = 5;
// 	console.log("after:");
// 	console.log(primVal);
// }
// var value= 10;
// changePrimtive(value);
// console.log("after changePrimtive, orig value:");
// console.log(value);

function changePrimtive(objValue) {
	console.log("in changePrimtive...");
	console.log("before:");
	console.log(objValue);

	objValue.x = 5;
	console.log("after:");
	console.log(objValue);
}
var value= { x:10 };
changePrimtive(value);
console.log("after changePrimtive, orig value:");
console.log(value);

// function test() {
// 	console.log(this);
// 	this.myName="Yonatan";
// 	// console.log("Hello Coursera!");
// }
// test();
// console.log(window.myName);
function Circle (radius) {
	this.radius = radius;
}
Circle.prototype.getArea = 
		function () {
			return Math.PI * Math.pow(this.radius,2);
		};
var myCircle = new Circle(10);//new Object()
console.log(myCircle.getArea());
var myOtherCircle = new Circle(20);//new Object()
console.log(myOtherCircle);

//Object Literals and "this"
var literalCircle = { // new Object()
	radius: 10,

	getArea: function () {
		var self = this;
		console.log(this);
		var increaseRadius = function () {
			self.radius=20;
		}
		increaseRadius();
		return Math.PI * Math.pow(this.radius,2);
	}
};
console.log(literalCircle.getArea());

//Arrays
var ary = new Array();
ary[0] = "Yonatan";
ary[1] = 100;
ary[2] = function (name) {
	console.log("Hello " + name);
};
ary[3] = {course: " HTML, CSS, & JS"};
console.log(ary);
console.log(ary[1]);
ary[2]("yoni");

//Short hand array creation 
var names = ["Yonatan", "Jacob", "Joshua"];
names[100] = "Jesse";
for(var i=0; i<names.length; i++) {
	console.log("Hello " + names[i]);
}

var names2 = ["Yonatan", "Jacob", "Joshua"];
var myObj = {
	name: "Yonatan",
	course: "HTML/CSS/JS",
	platform: "Coursera"
};
for (var prop in myObj) {
	console.log(prop + ": " + myObj[prop]);
}

//Closures
function makeMultiplier (multiplier) {
	function b() {
		console.log("multiplier equals " + multiplier);
	}
	b();
	return (
		function (x) {
			return multiplier*x;
		}
	);
}

var doubleAll = makeMultiplier(2);
console.log(doubleAll(10));//its own execution environment