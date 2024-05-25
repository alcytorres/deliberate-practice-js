// # 1. Start with an array of numbers and create a new array with only the numbers less than 20.
// #    For example, [2, 32, 80, 18, 12, 3] becomes [2, 18, 12, 3].
let numbers = [2, 32, 80, 18, 12, 3];
let smallNumbers = [];
let index = 0;
while (index < numbers.length) {
  if (numbers[index] < 20) {
    smallNumbers.push(numbers[index]);
  } index++; 
}

console.log(smallNumbers);



// # 2. Start with an array of strings and create a new array with only the strings that start with the letter "w".
// #    For example, ["winner", "winner", "chicken", "dinner"] becomes ["winner", "winner"].
let strings = ["winner", "winner", "chicken", "dinner"];
let stringsW = [];
let index1 = 0;
while (index1 < strings.length) {
  if (strings[index1][0] === "w") {
    stringsW.push(strings[index1]);
  } index1++;
}

console.log(stringsW);

// # 3. Start with an array of hashes and create a new array with only the hashes with prices greater than 5 (from the :price key).
// #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}].

let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let expensiveItems = [];
let index2 = 0;
while (index2 < items.length) {
  if (items[index2].price > 5) {
    expensiveItems.push(items[index2]);
  } index2++;
}

console.log(expensiveItems);



// # 4. Start with an array of numbers and create a new array with only the even numbers.
//      For example, [2, 4, 5, 1, 8, 9, 7] becomes [2, 4, 8].
let numbers1 = [2, 4, 5, 1, 8, 9, 7];
let evenNumbers = [];
let index3 = 0;
while (index3 < numbers1.length) {
  if (numbers1[index3] % 2 === 0) {
    evenNumbers.push(numbers1[index3]);
  } index3++;
}

console.log(evenNumbers);


// # 5. Start with an array of strings and create a new array with only the strings shorter than 4 letters.
//      For example, ["a", "man", "a", "plan", "a", "canal", "panama"] becomes ["a", "man", "a", "a"].
let strings1 = ["a", "man", "a", "plan", "a", "canal", "panama"];
let shortStrings = [];
let index4 = 0;
while (index4 < strings1.length) {
  if (strings1[index4].length < 4) {
    shortStrings.push(strings1[index4]);
  } index4++;
}

console.log(shortStrings);


// # 6. Start with an array of hashes and create a new array with only the hashes with names shorter than 6 letters (from the :name key).
// #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "chair", price: 100}, {name: "book", price: 4}].
let items1 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let shortName = [];
let index5 = 0;
while (index5 < items1.length) {
  if (items1[index5].name.length < 6) {
    shortName.push(items1[index5]);
  } index5++;
}

console.log(shortName);

// # 7. Start with an array of numbers and create a new array with only the numbers less than 10.
// #    For example, [8, 23, 0, 44, 1980, 3] becomes [8, 0, 3].
let numbers2 = [8, 23, 0, 44, 1980, 3];
let smallNumbers1 = [];
let index6 = 0;
while (index6 < numbers2.length) {
  if (numbers2[index6] < 10) {
    smallNumbers1.push(numbers2[index6]);
  } index6++;
}

console.log(smallNumbers1);

// # 8. Start with an array of strings and create a new array with only the strings that don't start with the letter "b".
//     For example, ["big", "little", "good", "bad"] becomes ["little", "good"].
let strings2 = ["big", "little", "good", "bad"];
let stringsB = [];
let index7 = 0;
while (index7 < strings2.length) {
  if (strings2[index7][0] !== "b") {
    stringsB.push(strings2[index7]);
  } index7++;
}

console.log(stringsB);

// # 9. Start with an array of hashes and create a new array with only the hashes with prices less than 10 (from the :price key).
// #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes [{name: "pencil", price: 1}, {name: "book", price: 4}].


// # 10. Start with an array of numbers and create a new array with only the odd numbers.
// #     For example, [2, 4, 5, 1, 8, 9, 7] becomes [5, 1, 9, 7].





