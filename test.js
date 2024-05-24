
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



setTimeout(function() {
  console.log('First task done!');
  setTimeout(function() {
    console.log('Second task done!');
    setTimeout(function() {
      console.log('Third task done!');
    }, 2000);
  }, 2000);
}, 2000);