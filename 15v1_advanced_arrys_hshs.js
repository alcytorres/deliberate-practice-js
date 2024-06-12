// Problem 1: Convert Simple Key-Value Pairs
// 1. Convert a hash with simple key-value pairs into an array of hashes, where each key is converted to the id key.

//Example 
// let a = { 1: "apple", 2: "banana" };
// let b = [{id: 1, value: "apple"}, {id: 2, value: "banana"}];

//Solution
// let fruitHash = { 1: "apple", 2: "banana" };
// let fruitArray = [];

// Object.entries(fruitHash).forEach(function ([id, value]) {
//   fruitArray.push({id: parseInt(id), value: value});
// });

// console.log(fruitArray);




// Problem: Convert a hash with simple key-value pairs into an array of hashes, where each key is converted to the id key.
// let abc = { 1: true, 2: false };
// let deh = [{id: 1, value: true}, {id: 2, value: false}];


// let booleanHash = { 1: true, 2: false };
// let booleanArray = [];

// Object.entries(booleanHash).forEach(function ([id, value]) {
//   booleanArray.push({id: parseInt(id), value: value});
// });

// console.log(booleanArray);




// Problem: Convert a hash with simple key-value pairs into an array of hashes, where each key is converted to the id key.

// let a = { 1: "hello", 2: "world" };
// let b = [{id: 1, value: "hello"}, {id: 2, value: "world"}];


// let stringsHash = { 1: "hello", 2: "world" };
// let stringsArray = [];

// Object.entries(stringsHash).forEach(function ([id, value]) {
//   stringsArray.push({id: parseInt(id), value: value});
// });

// console.log(stringsArray);




// Problem: Convert a hash with simple key-value pairs into an array of hashes, where each key is converted to the id key.
// let a = { 1: 100, 2: 200 };
// let b = [{id: 1, value: 100}, {id: 2, value: 200}];





// Problem 2: Convert Nested Arrays
// 2. Convert a hash with nested arrays into an array of hashes, using the keys as the id key.

//Example 
// let a = { 1: ["Alice", 31], 2: ["Bob", 27] };
// let b = [{id: 1, name: "Alice", age: 31}, {id: 2, name: "Bob", age: 27}];


// let people = { 1: ["Alice", 31], 2: ["Bob", 27] };
// let peopleHash = [];

// Object.entries(people).forEach(function ([id, [name, age]]) {
//   peopleHash.push({id: parseInt(id), name: name, age: age});
// });

// console.log(peopleHash);





























// Problem: Convert Multiple Nested Hashes
// Problem: Convert a hash with multiple nested hashes into an array of hashes, using the keys as the id key and adding an extra field.

// Example:
// let a = { 1: { name: "Alice", age: 31 }, 2: { name: "Bob", age: 27 } };
// let b = [{id: 1, name: "Alice", age: 31, active: true}, {id: 2, name: "Bob", age: 27, active: true}];


//Solution
// let a = { 1: { name: "Alice", age: 31 }, 2: { name: "Bob", age: 27 } };
// let b = [];

// Object.entries(a).forEach(function ([id, person]) {
//   person.id = parseInt(id);
//   person.active = true;
//   b.push(person);
// });

// console.log(b);



// Problem: Convert with Nested Arrays and Extra Fields
// Problem: Convert a hash with nested arrays into an array of hashes, using the keys as the id key and adding extra fields.

// Example:
// let a = { 1: ["Alice", 31, "Engineer"], 2: ["Bob", 27, "Designer"] };
// let b = [{id: 1, name: "Alice", age: 31, job: "Engineer", active: true}, {id: 2, name: "Bob", age: 27, job: "Designer", active: true}];


//Solution
// let a = { 1: ["Alice", 31, "Engineer"], 2: ["Bob", 27, "Designer"] };
// let b = [];

// Object.entries(a).forEach(function ([id, [name, age, job]]) {
//   b.push({ id: parseInt(id), name: name, age: age, job: job, active: true });
// });

// console.log(b);





// Problem: Convert with Multiple Levels of Nesting
// Problem: Convert a deeply nested hash into an array of hashes, using the keys as the id key and flattening the nested structure.

// //Example 
// // let a = { 1: { personal: { name: "Alice", age: 31 }, job: "Engineer" }, 2: { personal: { name: "Bob", age: 27 }, job: "Designer" } };
// // let b = [{id: 1, name: "Alice", age: 31, job: "Engineer"}, {id: 2, name: "Bob", age: 27, job: "Designer"}];


// //Solution
// let a = { 1: { personal: { name: "Alice", age: 31 }, job: "Engineer" }, 2: { personal: { name: "Bob", age: 27 }, job: "Designer" } };
// let b = [];

// Object.entries(a).forEach(function ([id, { personal: { name, age }, job }]) {
//   b.push({ id: parseInt(id), name: name, age: age, job: job });
// });

// console.log(b);





