"use strict";

// 1.
class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.age = age;
  }

  set age(newAge) {
    if (!Number.isInteger(newAge) || newAge <= 0)
      throw RangeError("Age must be a positive integer");

    this.#age = newAge;
  }

  showAge() {
    console.log(this.#age);
  }
}

// let person = new Person("John", 30);
// person.showAge(); // 30
// person.age = 31;
// person.showAge(); // 31
//
// try {
//   // This line should raise a RangeError,
//   // but does not.
//   person.age = -5;
//   person.showAge(); // -5
// } catch (e) {
//   // The following line should run, but won't
//   console.log("RangeError: Age must be positive");
// }

// 2.
class Book {
  #title;
  #author;
  #year;

  constructor(title, author, year) {
    this.#title = title;
    this.#author = author;
    this.year = year;
  }

  get title() {
    return this.#title;
  }

  get author() {
    return this.#author;
  }

  get year() {
    return this.#year;
  }

  set year(yearVal) {
    if (!Number.isInteger(yearVal) || yearVal < 1900)
      throw RangeError("Year must be an integer value, less than 1900.");
    this.#year = yearVal;
  }
}

// let book = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
// console.log(book.title); // The Great Gatsby
// console.log(book.author); // F. Scott Fitzgerald
// console.log(book.year); // 1925
//
// book.year = 1932; // Changing year
// console.log(book.year); // 1932
//
// try {
//   book.year = 1825;
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }
//
// try {
//   let book2 = new Book("A Tale of Two Cities", "Charles Dickents", 1859);
// } catch (e) {
//   console.log(e); // RangeError: Invalid year
// }

// 3.
class BankAccount {
  #balance;

  static #validAmount(amt) {
    return (
      typeof amt === "number" &&
      !Number.isNaN(amt) &&
      Number.isFinite(amt) &&
      amt > 0
    );
  }

  constructor(balance = 0) {
    this.#balance = balance;
  }

  #checkBalance() {
    console.log(`Current Balance: $${this.#balance}`);
  }

  deposit(amt) {
    if (!BankAccount.#validAmount(amt))
      throw RangeError("Invalid deposit amount");
    this.#balance += amt;
    this.#checkBalance();
  }

  withdraw(amt) {
    if (!BankAccount.#validAmount(amt))
      throw RangeError("Invalid withdraw amount");
    if (amt > this.#balance) throw RangeError("Insufficient funds");
    this.#balance -= amt;
    this.#checkBalance();
  }
}

// let account = new BankAccount();
// account.deposit(100);
// account.withdraw(50);
// account.withdraw(100); // RangeError: Insufficient funds

class Rectangle {
  #width;
  #height;

  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  set width(val) {
    if (!(val > 0)) throw RangeError("width must be positive");
    this.#width = +val;
  }

  set height(val) {
    if (!(val > 0)) throw RangeError("height must be positive");
    this.#height = +val;
  }

  get width() {
    return this.#width;
  }

  get height() {
    return this.#height;
  }

  get area() {
    return this.width * this.height;
  }
}

// let rect = new Rectangle(10, 5);
// console.log(rect.area); // 50
//
// rect.width = 20;
// console.log(rect.area); // 100
//
// rect.height = 12;
// console.log(rect.area); // 240
//
// try {
//   rect.width = 0;
// } catch (e) {
//   console.log(e); // RangeError: width must be positive
// }
//
// try {
//   rect.height = -10;
// } catch (e) {
//   console.log(e); // RangeError: height must be positive
// }

// 5.
class MathUtils {
  static add(a, b) {
    return a + b;
  }
  static subtract(a, b) {
    return a - b;
  }
  static multiply(a, b) {
    return a * b;
  }
  static divide(a, b) {
    if (b === 0) throw RangeError("Division by zero");
    return a / b;
  }
}

console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7)); // 42
console.log(MathUtils.divide(20, 5)); // 4
console.log(MathUtils.divide(10, 0)); // RangeError: Division by zero
