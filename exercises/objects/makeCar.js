"use strict";

function Car(rate, brakeRate) {
  this.speed = 0;
  this.rate = rate;
  this.brakeRate = brakeRate;

  this.accelerate = function () {
    this.speed += this.rate;
  };

  this.brake = function () {
    this.speed = Math.max(0, this.speed - this.brakeRate);
  };
}

// let sedan = new Car(8);
// console.log(sedan);
// sedan.accelerate();
// console.log(sedan);
//
// let coupe = new Car(12);
// console.log(coupe);
// coupe.accelerate();
// console.log(coupe);
//
// let hatchback = new Car(9);
// console.log(hatchback);
// hatchback.accelerate();
// console.log(hatchback);

let sedan = new Car(8, 6);
console.log(sedan.speed);
sedan.accelerate();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
sedan.brake();
console.log(sedan.speed);
