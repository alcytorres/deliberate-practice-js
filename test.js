
//  //Calcualting a value
// function sum(number1, number2) {
//   return number1 + number2
// };

// // let number = sum(100, 23);
// // console.log(number);

// console.log(sum(10, 7))

// let word = "Hello";
// console.log(word)


// Write JavaScript code using the setTimeout function to print 3 lines asynchronously. Use anonymous functions in your setTimeout calls. The output should do the following:
// 1. Wait 2 seconds
// 2. Print out “First task done!”
// 3. Wait another 2 seconds
// 4. Print out “Second task done!”
// 5. Wait another 2 seconds
// 6. Print out “Third task done!”

// setTimeout(function() {
//   console.log('First task done!');
//   setTimeout(function() {
//     console.log('Second task done!');
//     setTimeout(function() {
//       console.log('Third task done!');
//     }, 2000);
//   }, 2000);
// }, 2000);






// // # 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// // #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.
// // # (REDO)
// let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
// let cheapestItem = items[0];
// let index = 0;
// while (index < items.length) {
//   let item = items[index];
//   if (item.price < cheapestItem.price) {
//     cheapestItem = items[index];
//   } index++;
// }

// console.log(cheapestItem);


// Define a simple function
function sayHi() {
  console.log("Hi!");
}
// Assign the function to a variable
let greet = sayHi;

// Call the function using the variable
greet(); // Output: Hi!