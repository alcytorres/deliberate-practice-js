// # 1. Write a Song class with attributes and reader/writer methods for name, artist, and duration. Then write a method that prints the name, artist, and duration in a single sentence.
class Song {
  constructor(name, artist, duration) {
    this.name = name;
    this.artist = artist;
    this.duration = duration;
  }

  print_info() {
    console.log(`${this.name} is a song by ${this.artist} that is ${this.duration} minutes long.`);
  }
}

let song = new Song("Dancing Queen", "Abba", "3:50");
console.log(song);
song.print_info();


// # 2. Write a Rectangle class with attributes and reader/writer methods for width and height. Then write a method that returns the area of the rectangle.
//REDO this problem 
class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  area() {
    return `Area equals ${this.height * this.width}`;
  }
}

let rectangle = new Rectangle(10, 20);
console.log(rectangle);
console.log(rectangle.area());


// # 3. Write a Person class with attributes and reader/writer methods for name and age. Then write a method that returns the person's name in all capital letters.


// # 4. Write a Coordinate class with attributes and reader/writer methods for latitude and longitude. Then write a method that prints out the latitude and longitude in a single sentence.


// # 5. Write an Account class with attributes and reader/writer methods for name and balance. Then write a method that prints a warning if the balance is below $100.


// # 6. Write a Movie class with attributes and reader/writer methods for title, director, and year. Then write a method that prints out the attributes in a single sentence.
class Movie {
  constructor(title, director, year) {
    this.title = title;
    this.director = director;
    this.year = year;
  }

  print_info() {
    console.log(`${this.title} is a movie by ${this.director} that released in ${this.year}`); 
  }
}

let movie = new Movie("Inception", "Christopher Nolan", 2010);
console.log(movie);
movie.print_info();

// # 7. Write a Car class with attributes and reader/writer methods for make, model, year, and color. Then write a method that returns the make and model as a single sentence in all lowercase letters.
class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
  }

  returnInfo() {
    return `The ${this.model} is a car made by ${this.make}`.toLowerCase();
  }
}

let car = new Car("Tesla", "Model X", 2023, "Red");
console.log(car);
console.log(car.returnInfo());


// # 8. Write a Point class with attributes and reader/writer methods for x, y, and z coordinates. Then write a method that returns true if all 3 numbers are positive, otherwise it returns false.


// # 9. Write a Book class with attributes and reader/writer methods for title, author, and year. Then write a method that returns "Classic" if the book is older than 2000, otherwise it returns "Modern".


// # 10. Write a Plant class with attributes and reader/writer methods for name, size, and price. Then write a method that prints out the attributes in a single sentence.