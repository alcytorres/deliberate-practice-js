// Convert data from one data type into another

// Tips
//  If converting data into a hash find the key and value 
// Setting a variable === undefined
// If you start of with an array, using a while loop is probably a good idea

// Learn these Methods
// forEach method
// map method
// Object.entries
// parseInt method

//Array
// Adding a value:  array.push(value);
// Modify a value:  array[index] = newValue;

//Hash
// Adding a value:  object[key] = value;
// Modify a value:  object[key] = value;



// 1. Convert an array of arrays into a hash.
// For example, [[1, 3], [8, 9], [2, 16]] becomes {1 => 3, 8 => 9, 2 => 16}.


// let pairs = [[1, 3], [8, 9], [2, 16]];
// let pairsHash = {};
// let index = 0;
// while (index < pairs.length) {
//   let currentPair = pairs[index];
//   let key = currentPair[0];
//   let value = currentPair[1];
//   pairsHash[key] = value;
//   index++;
// }

// console.log(pairsHash);

// Solution
// let pairs = [[1, 3], [8, 9], [2, 16]];
// let pairsHash = {};
// let index = 0;
// while (index < pairs.length) {
//   let key = pairs[index][0];
//   let value = pairs[index][1];
//   pairsHash[key] = value;
//   index++;
// }

// console.log(pairsHash);


// Originally I solved it like this
// let pairs = [[1, 3], [8, 9], [2, 16]];
// let pairsHash = {};
// let index = 0;
// while (index < pairs.length) {
//   pairsHash[pairs[index][0]] = pairs[index][1];
//   index++;
// }

// console.log(pairsHash);



// 2. Convert an array of hashes into a hash using the :id key from the array's hashes as the keys in the new hash.
// For example, [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}] becomes {1 => {id: 1, color: "blue", price: 32}, 2 => {id: 2, color: "red", price: 12}}.


// let items = [{id: 1, color: "blue", price: 32}, {id: 2, color: "red", price: 12}];
// let itemsObject = {};
// let index = 0;
// while (index < items.length) {
//   let currentItem = items[index];
//   let key = currentItem.id;
//   let value = items[index];
//   itemsObject[key] = value;
//   index++;
// }

// console.log(itemsObject);


// 3. Convert a string into a hash with keys for each letter in the string and values for the number of times the letter appears in the string.
// For example, "bookkeeper" becomes {"b" => 1, "o" => 2, "k" => 2, "e" => 3, "p" => 1, "r" => 1}.


// let word = "bookkeeper";
// let letterFrequencies = {};
// let index = 0;
// while (index < word.length) {
//   let letter = word[index];   
//   // If the letter is not already a key in the object, initialize it with a value of 0
//   if (letterFrequencies[letter] === undefined) {
//     letterFrequencies[letter] = 0;
//   }
//   // Increment the count for the letter
//   letterFrequencies[letter]++;
//   index++;
// }

// console.log(letterFrequencies);


// 4. Convert a hash into an array of arrays.
//    For example, {"chair" => 100, "book" => 14} becomes [["chair", 100], ["book", 14]].
//    Note the official solution to this probelm is INCORRECT
//    Research how to solve this problem
//    Anonymous Functions 



//MY SOLUTION:  Answer =  [["chair", 100], ["book", 14]]
// let things = { chair: 100, book: 14 };
// let entries = Object.entries(things);
// console.log(entries);


//OFFICIAL SOLUTION   Answer =  ["chair", 100, "book", 14]
// let things = { chair: 100, book: 14 };
// let namePricePairs = [];
// Object.entries(things).forEach(function ([name, price]) {
//   namePricePairs.push(name, price);
// });
// console.log(namePricePairs);



// 5. Convert a hash into an array of hashes using the keys from each hash as the :id key in each of the array's hashes.
// For example, {321 => {name: "Alice", age: 31}, 322 => {name: "Maria", age: 27}} becomes [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}].
// VERY IMPORTANT PROBLEM 

let a = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
let b = [{id: 321, name: "Alice", age: 31}, {id: 322, name: "Maria", age: 27}];

// let people = { 321: { name: "Alice", age: 31 }, 322: { name: "Maria", age: 27 } };
// let peopleArray = [];

// // Convert the Hash to an Array and Iterate Over Each Entry:
// Object.entries(people).forEach(function ([id, person]) {
//   // Assign the ID to Each Person Object:
//   person.id = parseInt(id);
//   // Add the Modified Object to the Result Array:
//   peopleArray.push(person);
// });

// // Print the Result Array:
// console.log(peopleArray);




// 6. Convert an array of strings into a hash with keys for each string in the array and values for the number of times the string appears in the array.
// For example, ["do", "or", "do", "not"] becomes {"do" => 2, "or" => 1, "not" => 1}.


// let words = ["do", "or", "do", "not"];
// let wordFrequencies = {};
// let index = 0;
// while (index < words.length) {
//   let currentString = words[index];
//   if (wordFrequencies[currentString] === undefined) {
//     wordFrequencies[currentString] = 0;
//   }
//   wordFrequencies[currentString]++;
//   index++;
// }

// console.log(wordFrequencies);



// 7. Convert a hash into a flat array containing all the hash’s keys and values.
// For example, {"a" => 1, "b" => 2, "c" => 3, "d" => 4} becomes ["a", 1, "b", 2, "c", 3, "d", 4].


// let hash = { a: 1, b: 2, c: 3, d: 4 };
// let flattenedArray = [];
// Object.entries(hash).forEach(function ([key, value]) {
//   flattenedArray.push(key);
//   flattenedArray.push(value);
// }); 

// console.log(flattenedArray);


//Same solution but using the => shortcut for anonymous functions
// let hash = { a: 1, b: 2, c: 3, d: 4 };
// let flattenedArray = [];

// Object.entries(hash).forEach(([key, value]) => {
//   flattenedArray.push(key);
//   flattenedArray.push(value);
// });

// console.log(flattenedArray);



// 8. Combine data from a hash with names and prices and an array of hashes with names, colors, and weights to make a new hash.
// For example, {"chair" => 75, "book" => 15} and [{name: "chair", color: "red", weight: 10}, {name: "book", color: "black", weight: 1}] becomes {"chair" => {price: 75, color: "red", weight: 10}, "book" => {price: 15, color: "black", weight: 1}}.

let answer = {
  chair: {price: 75, color: "red", weight: 10}, 
  book: {price: 15, color: "black", weight: 1}
};


// let priceObject = { chair: 75, book: 15 };
// let items = [
//   { name: "chair", color: "red", weight: 10 },
//   { name: "book", color: "black", weight: 1 },
// ];
// let combinedObject = {};
// let index = 0;
// while (index < items.length) {
//   let item = items[index];
//   let name = item.name;
//   let color = item.color;
//   let weight = item.weight;
//   let price = priceObject[name];
//   combinedObject[name] = {price, color, weight};
//   index++;
// }

// console.log(combinedObject);





// 9. Convert an array of hashes into a hash of arrays, using the author as keys and the titles as values.
// For example, [{author: "Jeff Smith", title: "Bone"}, {author: "George Orwell", title: "1984"}, {author: "Jeff Smith", title: "RASL"}] becomes {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}.

// {"Jeff Smith" => ["Bone", "RASL"], "George Orwell" => ["1984"]}


// let books = [
//   { author: "Jeff Smith", title: "Bone" },
//   { author: "George Orwell", title: "1984" },
//   { author: "Jeff Smith", title: "RASL" },
// ];
// let booksObject = {};
// let index = 0;
// while () {

// }

// console.log()



// 10. Given a hash, create a new hash that has the keys and values switched.
// For example, {"a" => 1, "b" => 2, "c" => 3} becomes {1 => "a", 2 => "b", 3 => "c"}.

// let originalObject = { a: 1, b: 2, c: 3 };
// let flippedObject = {};
// Object.entries(originalObject).forEach(function ([key, value]) {
//   flippedObject[value] = key;
// });

// console.log(flippedObject);








