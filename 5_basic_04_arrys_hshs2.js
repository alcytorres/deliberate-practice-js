// Write a hash, read items from a hash, and add new items to existing hash


// # 1. Make a hash to store a person's first name, last name, and email address. Then print each attribute on separate lines.
let person = {firstName: "John", lastName: "Smith", email: "johnsmith@email.com"};
console.log(person.firstName);
console.log(person.lastName);
console.log(person.email);

let person1 = { firstName: "Ada", lastName: "Lovelace", email: "ada.lovelace@email.com" };
console.log(person1["firstName"]);
console.log(person1["lastName"]);
console.log(person1["email"]);


// # 2. Make an array of hashes to store the first name and last name for 3 different people. Then print out the first person's info.
let person2 = [
  { firstName: "Tom", lastName: "Santana"},
  { firstName: "Kevin", lastName: "Rojas"},
  { firstName: "Chester", lastName: "Philips"},
];

console.log(person2[0].firstName);
console.log(person2[0].lastName);


// # 3. Make a hash to store prices for 3 different menu items. Then add a new menu item and price and print the hash to see the result.
let items = {burger: 5, fries: 3, soda: 1};
items["nuggets"] = 3;

console.log(items);

// # 4. Make a hash to store a book's title, author, number of pages, and language. Then print each attribute on separate lines.
let book = {title: "The Adventures of Tom Sawyer", author: "Mark Twain", pages: 200, language: "English"};
console.log(book.title);
console.log(book.author);
console.log(book.pages);
console.log(book.language);


// # 5. Make an array of hashes to store the title and author for 3 different books. Then print out the third book's author.
let books = [
  {title: "To Kill a Mockingbird", author: "Harper Lee"},
  {title: "1984", author: "George Orwell"},
  {title: "The Great Gatsby", author: "Scott Fitzgerald"}
];

console.log(books[2].author);


// # 6. Make a hash to store 3 different states and their capitals. Then add a new state and capital and print the hash to see the result.
let capitals = {California: "Sacramento", Texas: "Austin", Florida: "Tallahassee"};
capitals["Massachusetts"] = "Boston";
console.log(capitals);


// # 7. Make a hash to store a laptop's brand, model, and year. Then print each attribute on separate lines.
let laptop = {brand: "apple", model: "macbook pro", year: 2023 };
console.log(laptop.brand);
console.log(laptop.model);
console.log(laptop.year);


// # 8. Make an array of hashes to store the brand and model for 3 different laptops. Then print out the second laptop's model.
let laptops = [
  {brand: "Microsoft", model: "Surface" },
  {brand: "Apple", model: "MacBook Pro"},
  {brand: "Dell", model: "XPS 13"}
];

console.log(laptops[1].model);

// # 9. Make a hash to store definitions for 2 different words. Then add a new word and definition and print the hash to see the result.



// # 10. Make a hash to store a shirt's brand, color, and size. Then print each attribute on separate lines.
// shirt = {brand: "nike", color: "white", size: "medium"}

