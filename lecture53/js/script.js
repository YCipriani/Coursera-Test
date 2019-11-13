//DOM manipulation
// console.log(document.getElementById("title"));
// console.log(document instanceof HTMLDocument);
// function sayHello() {
// 	this.textContent = "Said it!";
// 	var name = document.getElementById("name").value
// 	var message = "<h2>Hello " + name + "!</h2>";

// 	document.getElementById("content").innerHTML=message;

// 	if (name === "student") {
// 		var title = document.querySelector("#title").textContent;
// 		title += " & Lovin' it!"
// 		document.querySelector("#title").textContent = title;
// 	}
// 	// document.getElementById("content").textContent=message;
// }

// //Unobstrusive event binding
// document.querySelector("button").addEventListener("click", sayHello);
// document.querySelector("button").onclick = sayHello;

//linking this file in head of HTML
document.addEventListener("DOMContentLoaded", 
	function (event) {
		function sayHello() {
			console.log(event);
			this.textContent = "Said it!";
			var name = document.getElementById("name").value
			var message = "<h2>Hello " + name + "!</h2>";

			document.getElementById("content").innerHTML=message;

			if (name === "student") {
				var title = document.querySelector("#title").textContent;
				title += " & Lovin' it!"
				document.querySelector("#title").textContent = title;
			}
			// document.getElementById("content").textContent=message;
		}

		//Unobstrusive event binding
		document.querySelector("button").addEventListener("click", sayHello);

		document.querySelector("body").addEventListener("mousemove", 
			function (event) {
				if (event.shiftKey === true) {
					console.log("x: " + event.clientX);
					console.log("y: " + event.clientY);
				}
				// console.log("x: " + event.clientX);
				// console.log("y: " + event.clientY);
			}
		);

		}
);