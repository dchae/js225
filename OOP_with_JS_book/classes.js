"use strict";

// 1.
class Smartphone {
  constructor(brand, model, releaseYear) {
    this.brand = brand;
    this.model = model;
    this.releaseYear = releaseYear;
  }

  checkBatteryLevel() {
    return `${this.model} has ${Math.ceil(Math.random() * 100)}% battery remaining.`;
  }

  displayInfo() {
    return `${this.brand} ${this.model} (${this.releaseYear})`;
  }
}

let iphone12 = new Smartphone("Apple", "iPhone 12", 2020);
let galaxyS21 = new Smartphone("Samsung", "Galaxy S21", 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21

// 2. We can determine whether an object is an instance of a class
// by using the `instanceof` operator. We can also just log the object.
// e.g.;

let fakeIphone = { brand: "Apple", model: "iPhone 12", releaseYear: 2020 };
console.log(fakeIphone instanceof Smartphone); // false
console.log(iphone12 instanceof Smartphone); // true

console.log(iphone12); // Smartphone {...}
console.log(fakeIphone); // {...}

// 3.
class Vehicle {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
  }

  accelerate() {
    console.log("Accelerating...");
  }

  decelerate() {
    console.log("Decelerating...");
  }
}

class Car extends Vehicle {
  constructor(color, weight, licenseNumber) {
    super(color, weight);
    this.licenseNumber = licenseNumber;
  }

  honk() {
    console.log("HONK!");
  }
}

class Boat extends Vehicle {
  constructor(color, weight, homePort) {
    super(color, weight);
    this.homePort = homePort;
  }

  dropAnchor() {
    console.log("Dropping anchor...");
  }
}

class Plane extends Vehicle {
  constructor(color, weight, airline) {
    super(color, weight);
    this.airline = airline;
  }

  takeOff() {
    console.log("Taking off...");
  }

  land() {
    console.log("Landing...");
  }
}

let car = new Car("red", 3300, "BXY334");
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

console.log(car instanceof Vehicle);
console.log(boat instanceof Vehicle);

console.log(car instanceof Car);
console.log(boat instanceof Car);
