// let age = prompt("Enter Age");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// }

// else if (Number(age) > 18) {
// 	alert("Powering on. Enjoy the ride!");
// }

// else if (Number(age) === 18) {
// 	alert("Congratulaitions on your first year driving. Enjoy the ride!");
// }

// function checkDriverAge(age) {
// var age = prompt("What is your age");

// 	if (Number(age) < 18) {
// 	alert("Sorry, you are too young to drive this car. Powering off");
// }

// else if (Number(age) > 18) {
// 	alert("Powering on. Enjoy the ride!");
// }

// else if (Number(age) === 18) {
// 	alert("Congratulaitions on your first year driving. Enjoy the ride!");
// }

// }

// var checkAge = checkDriverAge();

// console.log(checkAge);


// Function Declaration......

// function sayHello() {
// 	console.log("Hello");
// }

// Function Expression....


// var sayBye = function() {
// 	console.log("Bye");
// }
// sayBye();

// Anonymous Function = When we don't give the function a name but store it inside of a variable. (limited use)

// function multiply(a, b) {
// if (a > 10 || b > 10) {
// 	return "that's too hard";
// } else {
// 	return a*b;
// 	}
// }

// console.log(multiply(5, 20));

// var list = ["tiger", "cat", "bear", "bird"];

// console.log(list[1]);

// var numbers = [1,2,3,4];

// var user = {
// 	name: "John",
// 	age: 34,
// 	hobby: "Soccer",
// 	isMarried: false,
// };

// ------------Facebook Exercise-------------

// var database = [ {
// 	username: "Drake",
// 	password: "1234"
// },

// {
// 	username: "Sally",
// 	password: "5678"
// },

// {
// 	username: "Ingrid",
// 	password: "9101112"
// }
// 	];


// var newsfeed = [ {
// 	username: "Bobby",
// 	timeline: "timeline"
// },
// {
// 	username: "Sally",
// 	timeline: "Javascript is so cool!"
// }
// 	];

// function isUserValid(username, password) {
// 	for (var i=0; i < database.length; i++) {
// 		if (database[i].username === username && 
// 			database[i].password === password) {
// 			return true;
// 		} 
// 	}
// 	return false;
// }

// function signIn(username, password) {
// 	if (isUserValid(username, password)) {
// 		console.log(newsfeed);
// 	} else {
// 		alert("Sorry, wrong username and password!");
// 	}
// }

// var userNamePrompt = prompt("What\'s your username?");
// var passWordPrompt = prompt("What\'s your password?");

// signIn(userNamePrompt, passWordPrompt);



// -----^^^^FACEBOOK EXERCISE^^^^-----



// function declaration
// function newFunction() {

// }

// function expression
// var newFunction = function() {

// };

// expression (denotes a value)
// 1+3;
// var a = 2;
// return true;

// calling or invoking a function
// alert();
// newfunction(param1, param2);

// assigning a variable
// var a = true;

// function vs method
// function thisIsAFunction() {

// }

// var obj = {
// 	thisIsAMethod: function() {

// 	}
// }

// thisIsAFunction()
// obj.thisIsAMethod()


// ----------LOOPS-------------

// var todos = [
// 	"clean room",
// 	"brush teeth",
// 	"exercise",
// 	"study javascript",
// 	"eat healthy"
// ];

// for (var i=0; i < todos.length; i++) {
// 	todos[i] = todos[i] + "!";
// }

// var todosLength = todos.length;

// for (var i=0; i < todosLength; i++) {
// 	todos.pop();
// }

// function logTodos(todo, i) {
// 	console.log(todo, i);
// }

// todos.forEach(logTodos)


// var counterOne = 10;

// while (counterOne > 0) {
// 	console.log(counterOne);
// 	counterOne--
// }

// var counterTwo = 10;
// do {
// 	console.log(counterTwo);
// 	counterTwo--;
// } while (counterTwo > 0);









