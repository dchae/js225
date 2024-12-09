"use strict";
// 01.
// Create an object that represents a Cessna 152 aircraft.
// The aircraft should include information that shows its fuel
// capacity of 24.5 gallons and a cruising speed of 111 knots.
// The aircraft should be able to take off and land.

let cessna = {
  fuelCapacity: 24.5,
  cruisingSpeed: 111,

  takeOff() {
    console.log("I'm taking off!");
  },

  land() {
    console.log("Landing now!");
  },
};

// Identify the state and behavior items in this object.
// state => fuelCapacity and cruisingSpeed properties
// behavior => takeOff and land methods

// 02.
function Book(title, author, year) {
  this.title = title;
  this.author = author;
  this.year = year;
}

let neuromancer = new Book("Neuromancer", "William Gibson", 1984);
let doomsday = new Book("Doomsday Book", "Connie Willis", 1992);

console.log(neuromancer);
console.log(doomsday);

// type => Book
// constructor function => Book function
// instance objects => Book objects pointed to by neuromancer and doomsday vars

// 03.
function Album(title, artist, year) {
  this.title = title;
  this.artist = artist;
  this.year = year;
}

let thriller = new Album("Thriller", "Michael Jackson", 1982);
let tdsotm = new Album("The Dark Side of the Moon", "Pink Floyd", 1973);

// type => Album
// constructor function => Album function
// instance objects => Album objs pointed to by thriller and tdsotm vars

// 04.
function Smartphone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;

  this.checkBatteryLevel = function () {
    console.log("Current Battery: 88%");
  };

  this.displayInformation = function () {
    console.log(`${this.brand} ${this.model}. Release Year: ${this.year}`);
  };
}

let iphone = new Smartphone("Apple", "iPhone 12", "2020");
iphone.checkBatteryLevel();
iphone.displayInformation();

let galaxy = new Smartphone("Samsung", "Galaxy S21", "2021");
galaxy.checkBatteryLevel();
galaxy.displayInformation();
