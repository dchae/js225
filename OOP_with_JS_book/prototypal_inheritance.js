"use strict";

function Smartphone(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
}

Smartphone.prototype.checkBatteryLevel = function () {
  console.log(`Battery: 70%`);
};

Smartphone.prototype.displayInfo = function () {
  console.log(`${this.brand} ${this.model} (${this.year})`);
};

let iphone12 = new Smartphone("Apple", "iPhone 12", 2020);
let galaxyS21 = new Smartphone("Samsung", "Galaxy S21", 2021);

iphone12.checkBatteryLevel();
// Apple iPhone 12 has 75% battery remaining.

iphone12.displayInfo();
// 2020 Apple iPhone 12

galaxyS21.checkBatteryLevel();
// Samsung Galaxy S21 has 75% battery remaining.

galaxyS21.displayInfo();
// 2021 Samsung Galaxy S21

function Vehicle(color, weight) {
  this.color = color;
  this.weight = weight;
}

Vehicle.prototype.accelerate = function () {
  console.log("Accelerating...");
};

Vehicle.prototype.decelerate = function () {
  console.log("Decelerating...");
};

function Car(color, weight, licenseNumber) {
  Vehicle.call(this, color, weight);
  this.licenseNumber = licenseNumber;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.honk = function () {
  console.log("HONK!");
};

function Boat(color, weight, homePort) {
  Vehicle.call(this, color, weight);
  this.homePort = homePort;
}

Boat.prototype = Object.create(Vehicle.prototype);
Boat.prototype.constructor = Boat;

Boat.prototype.dropAnchor = function () {
  console.log("Dropping anchor...");
};

function Plane(color, weight, airline) {
  Vehicle.call(this, color, weight);
  this.airline = airline;
}

Plane.prototype = Object.create(Vehicle.prototype);
Plane.prototype.constructor = Plane;

Plane.prototype.takeOff = function () {
  console.log("Taking off...");
};

Plane.prototype.land = function () {
  console.log("Landing...");
};

// let car = new Car("red", 3300, "BXY334");
let car = Object.create(Car.prototype);
car.constructor("red", 3300, "BXY334");

car.accelerate(); // Accelerate
car.honk(); // Honk
car.decelerate(); // Decelerate
console.log(car.color, car.weight, car.licenseNumber);
// red 3300 BXY334

let boat = new Boat("yellow", 12000, "Bahamas");
boat.accelerate(); // Accelerate
boat.decelerate(); // Decelerate
boat.dropAnchor(); // Drop anchor
console.log(boat.color, boat.weight, boat.homePort);
// yellow 12000 Bahamas

let plane = new Plane("blue", 83000, "Southwest");
plane.accelerate(); // Accelerate
plane.takeOff(); // Take off
plane.land(); // Land
plane.decelerate(); // Decelerate
console.log(plane.color, plane.weight, plane.airline);
// blue 83000 Southwest

console.log(car instanceof Vehicle); // true
console.log(boat instanceof Vehicle); // true

console.log(car instanceof Car); // true
console.log(boat instanceof Car); // false
