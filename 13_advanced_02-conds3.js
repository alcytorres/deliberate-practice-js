// Write nested conditionals


// 1.  Write a program that stores a customer's age and a movie's time in two separate variables. Then calculate the price of a movie ticket based on the following conditions:

// If the age is 12 years old or younger, the ticket price is $5.
// If the age is between 13 and 59 years old and the movie is before 6 PM, the ticket price is $7. After 6 PM, the ticket price is $10.
// If the customer is 60 years old or older, the ticket price is $7.


// let age = 23;
// let movieTime = 21;
// let price;

// if (age <= 12) {
//   price = 5; 
// } else if (age >= 13 && age <= 59) { 
//   if (movieTime < 18) {
//     price = 7;
//   } else {
//     price = 10;
//   }
// } else if (age >= 60) {
//   price = 7;
// }

// console.log(`The price of a movie ticket is $${price}`);



// 2. Write a program to store the type of book (regular, reference, or special collection) and the number of days its overdue. Then calculate the fine amount based on the following conditions:

// If the book is a regular book and overdue by up to 7 days, the fine is $1 per day.
// If the book is a regular book and overdue by more than 7 days, the fine is $2 per day.
// If the book is a reference book, there is no fine, regardless of the number of days overdue.
// If the book is a special collection book, the fine is $5 per day, regardless of the number of days overdue.


// let bookType = "special collection";
// let daysOverdue = 30;
// let fine;

// if (bookType === "regular") {
//   if (daysOverdue <= 7) {
//     fine = 1 * daysOverdue;
//   } else {
//     fine = 2 * daysOverdue;
//   } 
// } else if (bookType === "reference") {
//   fine = 0; 
// } else if (bookType === "special collection") {
//   fine = 5 * daysOverdue; 
// }

// console.log(`fine amount: $${fine}`);


// let bookType = "reference";
// let daysOverdue = 30;
// let fine;

// if (bookType === "regular" && daysOverdue <= 7) {
//   fine = 1 * daysOverdue;
// } else if (bookType === "regular" && daysOverdue > 7) {
//   fine = 2 * daysOverdue;
// } else if (bookType === "reference") {
//   fine = 0; 
// } else if (bookType === "special") {
//   fine = 5 * daysOverdue; 
// }

// console.log(`fine amount: $${fine}`);



// 3. Write a program that stores a person's order value and membership level (regular or premium). Then calculate a discount amount based on the following conditions:

// If the total order value is less than $50, there is no discount.
// If the total order value is between $50 and $100, the discount is 5% for regular customers and 10% for premium customers.
// If the total order value is greater than $100, the discount is 10% for regular customers and 15% for premium customers.

// let orderValue = 300;
// let membershipLevel = "regular";
// let discount;

// if (orderValue < 50) {
//   discount = 0;
// } else if (orderValue >= 50 && orderValue <= 100) {
//   if (membershipLevel === "regular") {
//     discount = 5;
//   } else {
//     discount = 10;
//   } 
// } else if (orderValue > 100) {
//   if (membershipLevel === "regular") {
//     discount = 10;
//   } else {
//     discount = 15;
//   }
// }

// console.log(`Discount: ${discount}%`);


// 4. Write a Ruby program that stores the weight of a package and the destination (domestic or international). Then calculate the shipping fee based on the following conditions:

// If the destination is domestic:
// If the weight is less than or equal to 1 kg, the shipping fee is $5.
// If the weight is greater than 1 kg, the shipping fee is $10.
// If the destination is an international shipment:
// If the weight is less than or equal to 1 kg, the shipping fee is $15.
// If the weight is greater than 1 kg, the shipping fee is $25.


// let weight = 10;
// let destination = "domestic";
// let shippingFee;

// if (destination === "domestic") {
//   if (weight <= 1) {
//     shippingFee = 5;
//   } else {
//     shippingFee = 10;
//   }
// } else if (destination === "international") {
//   if (weight <= 1) {
//     shippingFee = 15;
//   } else {
//     shippingFee = 25;
//   }
// }

// console.log(`Shipping fee: ${shippingFee}`);