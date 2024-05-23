// Intro
// let word = "Hello World"
// console.log(word)

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Variables
// let name = "alcy"
// console.log(name);

// let firstName = "alcy";
// let lastName = "torres";
// console.log(firstName, lastName);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//constants

// Results in error: TypeError: Assignment to constant variable.
// const interestRate = 0.3;
// interestRate = 1;
// console.log(interestRate);

// Correct use of Const
// const interestRate = 0.3;
// console.log(interestRate);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Primitive Types = String, Number, Boolean, Underfined, null
// let name = "alcy";
// let number = 23;
// let isApproved = false;
// let firstName = undefined;
// let selectColor = null;

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Dynamic Typing 
let name = "alcy";
let number = 23;
let isApproved = false;
let firstName = undefined;
let selectColor = null;

console.log(typeof name);         // "string"
console.log(typeof number);       // "number"
console.log(typeof isApproved);   // "boolean"
console.log(typeof firstName);    // "undefined"
console.log(typeof selectColor);  // "object"

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Reference Types: Object, Array, Function
//Object
// let name = "alcy";
// let age = 23;
let person = {
  name: "alcy",
  age: 23, 
};
console.log(person);
//=> { name: 'alcy', age: 23 }

// Dot notaion 
// person.name = "John";

//Bracket Notation
// person["name"] = "Mary";

let selection = "name";
person[selection] = "mary"

console.log(person.name);

//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Arrays 
// Note Arrays = Objects
let selectedColors = ["red", "blue"];
selectedColors[2] = "green";
console.log(selectedColors);

console.log(typeof selectedColors);

console.log(selectedColors.length);


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Function
// Note Function = Objects
// Functions are a set of statemetns that perform a task or calcualte a value

// function greet() {
//   console.log("Hello World");
// }

// function greet(name) {
//   console.log("Hello " + name);
// }

// greet("Alcy");
// greet("Mary");

//name is a parameter of the greet function
//"Alcy" is an argument of the greet function

//Adding Multiple Parameters to a Function
function greet(name, lastName) {
  console.log("Hello " + name + ' ' + lastName);
}

greet("Alcy", "Torres");


//–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
//Function: Performing a Task
function greet(name, lastName) {
  console.log("Hello " + name + " " + lastName);
}

 //Calcualting a value
 function square(number) {
  return number * number;
}

// let number = square(2);
// console.log(number);

console.log(square(2));

