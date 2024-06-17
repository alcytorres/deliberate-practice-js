//Array
// Adding a value:  array.push(value);
// Modify a value:  array[index] = newValue;

//Hash
// Adding a value:  object[key] = value;
// Modify a value:  object[key] = value;

// Anonymous Functions: Both are EQUAL to each other 
let show = function () {
  console.log('Anonymous function');
};
show();

let test = () => console.log('Anonymous function');
test();


// forEach method
// Executes a provided function once for each array element.
// Use Case: Iterating over an array to perform actions on each element WITHOUT returning a new array.
let array = [1, 2, 3];
array.forEach((element) => {
  console.log(element * 2);
});
// Output: 2 4 6


// map method
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
// Use Case: Transforming each element in an array and returning a NEW ARRAY with the transformed elements, useful for applying a function to every item in the array without mutating the original array.

let numbers = [1, 2, 3];
let tripled = numbers.map(number => number * 3);
console.log(tripled);
// Output: [3, 6, 9]


// Array.prototype.filter()
// Description: Creates a new array with all elements that pass the test implemented by the provided function.
// Primary use case: Filtering elements from an array based on a condition.
let numbers1 = [1, 2, 3, 4, 5, 6];
let evens = numbers1.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6]


// Array.prototype.reduce()
// Description: Executes a reducer function on each element of the array, resulting in a single output value.
// Primary use case: Summarizing or combining values in an array.
let numbers3 = [1, 2, 3, 4];
let sum = numbers3.reduce((total, num) => total + num, 0);
console.log(sum); // 10


Array.prototype.find()


String.prototype.replace()


String.prototype.split()


Array.prototype.push()


Array.prototype.pop()


Object.keys()


// Object.entries
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// Use Case: Converting an object to an ARRAY for easier iteration or manipulation, often used in conjunction with array methods like map or forEach.

let obj = { a: 1, b: 2, c: 3 };
let newArray = Object.entries(obj);
console.log(newArray);
// // Output: [['a', 1], ['b', 2], ['c', 3]]


// parseInt method
// Parses a STRING argument and returns an INTEGER of the specified radix (base).
// Use Case: Converting a string to an integer, often when dealing with user input or parsing data.

let str = "123";
let num = parseInt(str, 10);
console.log(num);
// Output: 123



