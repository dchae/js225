"use strict";

function newClass(classObj) {
  function classConstructor() {}

  const parentPrototype = Object.create(Object.getPrototypeOf(classObj) ?? {});
  classConstructor.prototype = Object.assign(parentPrototype, classObj);

  return classConstructor; // function prototype
}

function newInstance(classConstructor, ...args) {
  let instance = Object.create(classConstructor.prototype);
  classConstructor.prototype?.constructor.apply(instance, args);
  return instance;
}

function extend(ParentConstructor, classObj) {
  const prototype = Object.create(ParentConstructor.prototype);
  return Object.assign(prototype, classObj);
}

function callSuper(thisArg, ...args) {
  const prototype = Object.getPrototypeOf(thisArg);
  const parentPrototype = Object.getPrototypeOf(prototype);
  parentPrototype?.constructor.apply(thisArg, args);
}

let Cat = newClass({
  constructor(name, color) {
    this.name = name;
    this.color = color;
  },

  whoAmI() {
    console.log(`My name is ${this.name}.`, `\nI am a ${this.color} cat.`);
  },
});

let HouseCat = newClass(
  extend(Cat, {
    constructor(name, color, owner) {
      callSuper(this, name, color);
      this.owner = owner;
    },

    meow() {
      console.log("Meow!~");
    },
  }),
);

let cheddar = newInstance(Cat, "Cheddar", "ginger");
let whiskers = newInstance(Cat, "Whiskers", "black");

console.log(Object.getPrototypeOf(cheddar) === Cat.prototype); // true
console.log(cheddar.__proto__ === Cat.prototype); // true
console.log(cheddar.whoAmI === whiskers.whoAmI); // true
console.log(cheddar instanceof Cat); // true

console.log("cheddar:");
console.log(cheddar);
console.log(Object.getOwnPropertyNames(cheddar));

let daisy = newInstance(HouseCat, "Daisy", "white", "Alice");
console.log("daisy:");
console.log(daisy);
console.log(Object.getOwnPropertyNames(daisy));
daisy.whoAmI();
daisy.meow();
