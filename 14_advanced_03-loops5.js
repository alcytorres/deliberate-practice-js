// Write nested loops


// # 1. Use a nested loop to convert an array of number pairs into a single flattened array.
// # For example, [[1, 3], [8, 9], [2, 16]] becomes [1, 3, 8, 9, 2, 16].


// let numbers = [[1, 3], [8, 9], [2, 16]];
// let flatArray = [];
// let index1 = 0;
// while (index1 < numbers.length) {
//   let currentPair = numbers[index1];
//   let index2 = 0;
//   while (index2 < currentPair.length) {
//     let currentNumber = currentPair[index2];
//     flatArray.push(currentNumber);
//     index2++;
//   }
//   index1++;
// }

// console.log(flatArray);




// # 2. Use a nested loop with two arrays of strings to create a new array of strings with each string combined.
// # For example, ["a", "b", "c"] and ["d", "e", "f", "g"] becomes ["ad", "ae", "af", "ag", "bd", "be", "bf", "bg", "cd", "ce", "cf", "cg"].


// let strings1 = ["a", "b", "c"];
// let strings2 = ["d", "e", "f", "g"];
// let strings3 = [];
// let index1 = 0;
// while (index1 < strings1.length) {
//   let firstLetter = strings1[index1];
//   let index2 = 0;
//   while (index2 < strings2.length) {
//     let secondLetter = strings2[index2];
//     strings3.push(firstLetter + secondLetter);
//     index2++;
//   }
//   index1++;
// }

// console.log(strings3);



// # 3. Use a nested loop with one array of strings to create a new array that contains every combination of each string with every other string in the array.
// # For example, ["a", "b", "c", "d"] becomes ["ab", "ac", "ad", "ba", "bc", "bd", "ca", "cb", "cd", "da", "db", "dc"].

// let strings1 = ["a", "b", "c", "d"];
// let strings2 = [];
// let index1 = 0;
// while (index1 < strings1.length) {
//   let firstLetter = strings1[index1];
//   let index2 = 0;
//   while (index2 < strings1.length) {
//     let secondLetter = strings1[index2];
//     if (firstLetter !== secondLetter) {
//       strings2.push(firstLetter + secondLetter);
//     }
//     index2++;
//   }
//   index1++;
// }

// console.log(strings2);



// # 4. Use a nested loop to find the largest product of any two different numbers within a given array.
// # For example, [5, -2, 1, -9, -7, 2, 6] becomes 63.
// REDO (Got it Right).

// let numbers = [5, -2, 1, -9, -7, 2, 6];
// let maxProduct = numbers[0] * numbers[1];
// let index1 = 0;
// while (index1 < numbers.length) {
//   let firstNumber = numbers[index1];
//   let index2 = 0;
//   while (index2 < numbers.length) {
//     let secondNumber = numbers[index2];
//     if (firstNumber !== secondNumber) {
//       let currentProduct = firstNumber * secondNumber;
//       if (currentProduct > maxProduct) {
//         maxProduct = currentProduct;
//       }
//     }
//     index2++;
//   }
//   index1++;
// }

// console.log(maxProduct);



// # 5. Use a nested loop to compute the sum of all the numbers in an array of number pairs.
// # For example, [[1, 3], [8, 9], [2, 16]] becomes 39.


// let pairs = [[1, 3], [8, 9], [2, 16]];
// let sum = 0;
// let index1 = 0;
// while (index1 < pairs.length) {
//   let currentPair = pairs[index1];
//   let index2 = 0;
//   while (index2 < currentPair.length) {
//     let currentNumber = currentPair[index2];
//     sum = sum + currentNumber;
//     index2++;
//   }
//   index1++;
// }

// console.log(sum);



// # 6. Use a nested loop with two arrays of numbers to create a new array of the sums of each combination of numbers.
// # For example, [1, 2] and [6, 7, 8] becomes [7, 8, 9, 8, 9, 10].


// let numbers1 = [1, 2];
// let numbers2 =  [6, 7, 8];
// let sumNumbers = [];
// let index1 = 0;
// while (index1 < numbers1.length) {
//   let firstNumber = numbers1[index1];
//   let index2 = 0;
//   while (index2 < numbers2.length) {
//     let otherNumber = numbers2[index2];
//     sumNumbers.push(firstNumber + otherNumber);
//     index2++;
//   }
//   index1++;
// }

// console.log(sumNumbers);



// # 7. Use a nested loop with an array of numbers to compute an array with every combination of products from each number.
// # For example, [2, 8, 3] becomes [4, 16, 6, 16, 64, 24, 6, 24, 9].

// let numbers = [2, 8, 3];
// let products = [];
// let index1 = 0;
// while (index1 < numbers.length) {
//   let firstNumber = numbers[index1];
//   let index2 = 0;
//   while (index2 < numbers.length) {
//     let otherNumber = numbers[index2];
//     products.push(firstNumber * otherNumber);
//     index2++;
//   }
//   index1++;
// }

// console.log(products);


// # 8. Use a nested loop to find the largest sum of any two different numbers within an array.
// # For example, [1, 8, 3, 10] becomes 18.

// let numbers = [1, 8, 3, 10];
// let maxSum = numbers[0] + numbers[1];
// let index1 = 0;
// while (index1 < numbers.length) {
//   let firstNumber = numbers[index1];
//   let index2 = 0;
//   while (index2 < numbers.length) {
//     let otherNumber = numbers[index2];
//     if (firstNumber !== otherNumber) {
//       let currentSum = firstNumber + otherNumber;
//       if (currentSum > maxSum) {
//         maxSum = currentSum;
//       }
//     } 
//     index2++;
//   }
//   index1++;
// }

// console.log(maxSum);


// # 9. Use nested loops with an array of numbers to compute a new array containing the first two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.
// # For example, [2, 5, 3, 1, 0, 7, 11] becomes [3, 7].
//(REDO Challenge Problem)

// let numbers = [2, 5, 3, 1, 0, 7, 11];
// let sum10 = [];
// let index1 = 0;
// while (index1 < numbers.length) {
//   let firstNumber = numbers[index1];
//   let index2 = 0;
//   while (index2 < numbers.length) {
//     let otherNumber = numbers[index2];
//     if (firstNumber !== otherNumber) {
//       let currentSum = firstNumber + otherNumber;
//       if (currentSum === 10) {
//         sum10.push(firstNumber, otherNumber);
//       }
//     }
//     index2++;
//   }
//   index1++;
// }


// console.log(sum10);


//Solution I had to look at this one
// let numbers = [2, 5, 3, 1, 0, 7, 11];
// let result = false;
// let index1 = 0;
// while (index1 < numbers.length) {
//   let currentNumber = numbers[index1];
//   let index2 = 0;
//   while (index2 < numbers.length) {
//     if (index1 !== index2) {
//       let otherNumber = numbers[index2];
//       if (currentNumber + otherNumber === 10 && result === false) {
//         result = [currentNumber, otherNumber];
//       }
//     }
//     index2 += 1;
//   }
//   index1 += 1;
// }
// console.log(result);



// # 10. Use a nested loop to convert an array of string arrays into a single string.
// # For example, [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]] becomes "amanaplanacanalpanama"

// let strings = [["a", "man"], ["a", "plan"], ["a", "canal"], ["panama"]];
// let stringsCombined = "";
// let index1 = 0;
// while (index1 < strings.length) {
//   let firstString = strings[index1];
//   let index2 = 0;
//   while (index2 < firstString.length) {
//     stringsCombined = stringsCombined + firstString[index2];
//     index2++;
//   }
//   index1++;
// }

// console.log(stringsCombined);



