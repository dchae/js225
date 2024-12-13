"use strict";
class Animal {
  constructor(type) {
    this.type = type;
  }

  eat() {
    console.log("I am eating.");
  }
}

class Cat extends Animal {
  constructor(name, color) {
    super();
    this.name = name;
    this.color = color;
  }

  whoAmI() {
    console.log(`My name is ${this.name}.`, `\nI am a ${this.color} cat.`);
  }
}

let cheddar = new Cat("Cheddar", "ginger");
let cheddarProto = Object.getPrototypeOf(cheddar);
let cheddarProto2 = Object.getPrototypeOf(cheddarProto);
console.log(Object.getOwnPropertyNames(cheddarProto));
// ['constructor', 'whoAmI'];

console.log(Object.getOwnPropertyNames(cheddarProto2));
// ['constructor', 'eat'];

console.log(cheddarProto2 === Animal.prototype); // true

cheddar.whoAmI(); // My name is Cheddar.
// I am a ginger cat.
cheddar.eat(); // I am eating.
