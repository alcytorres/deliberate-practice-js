//Array
// Adding a value:  array.push(value);
// Modify a value:  array[index] = newValue;

//Hash
// Adding a value:  object[key] = value;
// Modify a value:  object[key] = value;


// forEach method
// Executes a provided function once for each array element.
// Use Case: Iterating over an array to perform actions on each element WITHOUT returning a new array.
let array = [1, 2, 3];
array.forEach((element) => {
  console.log(element);
});
// Output: 1 2 3


// map method
// Creates a new array populated with the results of calling a provided function on every element in the calling array.
// Use Case: Transforming each element in an array and returning a NEW ARRAY with the transformed elements, useful for applying a function to every item in the array without mutating the original array.

let array1 = [1, 2, 3];
let doubled = array.map((element) => element * 2);
console.log(doubled);
// Output: [2, 4, 6]


// Object.entries
// Returns an array of a given object's own enumerable string-keyed property [key, value] pairs.
// Use Case: Converting an object to an ARRAY for easier iteration or manipulation, often used in conjunction with array methods like map or forEach.

let obj = { a: 1, b: 2, c: 3 };
let entries = Object.entries(obj);
console.log(entries);
// // Output: [['a', 1], ['b', 2], ['c', 3]]


// parseInt method
// Parses a STRING argument and returns an INTEGER of the specified radix (base).
// Use Case: Converting a string to an integer, often when dealing with user input or parsing data.

let str = "123";
let num = parseInt(str, 10);
console.log(num);
// Output: 123


// Anonymous Functions: Both are EQUAL to each other 
let show = function () {
  console.log('Anonymous function');
};
show();

let test = () => console.log('Anonymous function');
test();