// # 1. Start with an array of numbers and compute the sum of all the numbers.
// #    For example, [5, 10, 8, 3] becomes 26.
let numbers = [5, 10, 8, 3];
let sum = 0;
let index = 0;
while (index < numbers.length) {
  sum = sum + numbers[index];
  index++; 
}

console.log(sum);


// # 2. Start with an array of strings and combine them all into a single string.
//     For example, ["volleyball", "basketball", "badminton"] becomes "volleyballbasketballbadminton".
let sports = ["volleyball", "basketball", "badminton"];
let sportsCombined = "";
let index1 = 0;
while (index1 < sports.length) {
  sportsCombined = sportsCombined + sports[index1];
  index1++;
}

console.log(sportsCombined);



// # 3. Start with an array of hashes and compute the sum of the prices (from the :price key).
// #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes 105.

let items = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let sum1 = 0;
let index2 = 0;
while (index2 < items.length) {
  sum1 = sum1 + items[index2].price;
  index2++;
}

console.log(sum1);

// # 4. Start with an array of numbers and compute the the minimum number.
// #    For example, [5, 10, 8, 3, 9] becomes 3.

// Solution WITHOUT intermediatry 'current value' variable
// let numbers1 = [5, 10, 8, 3, 9];
// let minimumNumber = numbers1[0];
// let index3 = 0;
// while (index3 < numbers1.length) {
//   if (numbers1[index3] < minimumNumber) {
//     minimumNumber = numbers1[index3];
//   } 
//   index3++;
// }

// console.log(minimumNumber);


// Solution with intermediatry 'current value' variable
let numbers1 = [5, 10, 8, 3, 9];
let minimumNumber = numbers1[0];
let index3 = 0;
while (index3 < numbers1.length) {
  let currentValue = numbers1[index3];
  if (currentValue < minimumNumber) {
    minimumNumber = currentValue;
  } 
  index3++;
}

console.log(minimumNumber);


// # 5. Start with an array of strings and compute the total length of all the strings.
// #    For example, ["volleyball", "basketball", "badminton"] becomes 29.
let sports1 = ["volleyball", "basketball", "badminton"];
let sum2 = 0;
let index4 = 0;
while (index4 < sports1.length) {
  sum2 = sum2 + sports1[index4].length;
  index4++;
}

console.log(sum2);


// # 6. Start with an array of hashes and find the hash with the lowest price (from the :price key).
// #    For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "pencil", price: 1}.
// # (REDO this is a great problem)
let items1 = [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}];
let lowPriceHash = items1[0];
let index5 = 0;
while (index5 < items1.length) {
  let item1 = items1[index5];
  if (item1.price < lowPriceHash.price) {
    lowPriceHash = item1;
  } index5++;
}

console.log(lowPriceHash);


// # 7. Start with an array of numbers and compute product of all the numbers.
//      For example, [5, 10, 8, 3] becomes 1200.
let numbers2 = [5, 10, 8, 3];


// # # 8. Start with an array of strings and combine them all into a single string, separated by dashes.
//        For example, ["volleyball", "basketball", "badminton"] becomes "-volleyball-basketball-badminton-".



// # # 9. Start with an array of hashes and find the hash with the shortest name (from the :name key).
//        For example, [{name: "chair", price: 100}, {name: "pencil", price: 1}, {name: "book", price: 4}] becomes {name: "book", price: 4}.




// # 10. Start with an array of numbers and compute the maximum number.
//       For example, [5, 10, 8, 3] becomes 10.

