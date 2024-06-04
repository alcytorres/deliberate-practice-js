// Map an array to a new array with some computation performed on each item


// # 1. Start with an array of numbers and create a new array with each number times 3.
//      For example, [1, 2, 3] becomes [3, 6, 9].
// let numbers = [1, 2, 3];
// let product = [];
// let index = 0;
// while (index < numbers.length) {
//   product.push(numbers[index] * 3);
//   index++;
// }

// console.log(product);

// // # 2. Start with an array of strings and create a new array with each string upcased.
// // #    For example, ["hello", "goodbye"] becomes ["HELLO", "GOODBYE"].
// let strings = ["hello", "goodbye"];
// let capitalStrings = [];
// let index1 = 0;
// while (index1 < strings.length) {
//   capitalStrings.push(strings[index1].toUpperCase());
//   index1++;
// }
// console.log(capitalStrings);

// // # 3. Start with an array of hashes and create a new array of string values from each hash's :name key.
// // #    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes ["Alice", "Blane"].

// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// let names = [];
// let index2 = 0;
// while (index2 < people.length) {
//   names.push(people[index2].name);
//   index2++;
// }
// console.log(names);


// // # 4. Start with an array of numbers and create a new array with each number plus 7.
// // #    For example, [1, 2, 3] becomes [8, 9, 10].
// let numbers1 = [1, 2, 3];
// let numbers1Sum = [];
// let index3 = 0;
// while (index3 < numbers1.length) {
//   numbers1Sum.push(numbers1[index3] + 7);
//   index3++;
// }
// console.log(numbers1Sum);


// // # 5. Start with an array of strings and create a new array with each string's length.
// // #    For example, ["hello", "goodbye"] becomes [5, 7].
// let strings1 = ["hello", "goodbye"];
// let stringLength = [];
// let index4 = 0;
// while (index4 < strings1.length) {
//   stringLength.push(strings1[index4].length);
//   index4++;
// }

// console.log(stringLength);

// // # 6. Start with an array of hashes and create a new array of number values from each hash's :age key.
// // #    For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [27, 16].
// let people1 = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// let age1 = [];
// let index5 = 0;
// while (index5 < people1.length) {
//   age1.push(people1[index5].age);
//   index5++;
// }

// console.log(age1);

// // # 7. Start with an array of numbers and create a new array with each number divided by 2.
// // #    For example, [1, 2, 3] becomes [0.5, 1.0, 1.5].
// let numbers2 = [1, 2, 3];
// let numbers2Divided = [];
// let index6 = 0;
// while (index6 < numbers2.length) {
//   numbers2Divided.push(numbers2[index6] / 2);
//   index6++;
// }

// console.log(numbers2Divided);


// // # 8. Start with an array of strings and create a new array with each string's first letter only.
// //      For example, ["hello", "goodbye"] becomes ["h", "g"].

let strings = ["hello", "goodbye"];
let firstLetter = [];
let index = 0;
while (index < strings.length) {
  firstLetter.push(strings[index][0]);
  index++;
}

console.log(firstLetter);


// # 9. Start with an array of hashes and create a new array of number values from each hash's :age key times 2.
//     For example, [{name: "Alice", age: 27}, {name: "Blane", age: 16}] becomes [54, 32].

// let people = [{name: "Alice", age: 27}, {name: "Blane", age: 16}];
// let ageHash = [];
// let index = 0;
// while (index < people.length) {
//   ageHash.push(people[index].age * 2);
//   index++;
// }

// console.log(ageHash);

// # 10. Start with an array of numbers and create a new array with each number converted into a string.
//       For example, [1, 2, 3] becomes ["1", "2", "3"].



