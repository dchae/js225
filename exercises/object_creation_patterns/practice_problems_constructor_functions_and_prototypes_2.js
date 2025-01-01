"use strict";

//1.
let shape = {
  getType() {
    return this.type;
  },
};

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;
  this.type = "triangle";
}

Triangle.prototype = shape;
Triangle.prototype.constructor = Triangle;

Triangle.prototype.getPerimeter = function () {
  return this.a + this.b + this.c;
};

let t = new Triangle(3, 4, 5);
console.log(t.constructor); // Triangle(a, b, c)
console.log(shape.isPrototypeOf(t)); // true
console.log(t.getPerimeter()); // 12
console.log(t.getType()); // "triangle"

// 2.
const logConstructor = (obj) => console.log(obj.constructor.name);

logConstructor("Hello");
logConstructor([1, 2, 3]);
logConstructor({ name: "Srdjan" });

// 3.
function User(first, last) {
  // if ([global, undefined].includes(this)) {
  if (!(this instanceof User)) return new User(first, last);

  this.name = first + " " + last;
}

let name = "Jane Doe";
let user1 = new User("John", "Doe");
let user2 = User("John", "Doe");

console.log(name); // => Jane Doe
console.log(user1.name); // => John Doe
console.log(user2.name); // => John Doe

// 4.
// function createObject(obj) {
//   const newObj = {};
//   // return Object.setPrototypeOf(newObj, obj);
//   // OR
//   // newObj.__proto__ = obj;
//   // return newObj;
//   // // OR
//   function Temp() {}
//   Temp.prototype = obj;
//   return new Temp();
// }
//
// let foo = {
//   a: 1,
// };
//
// let bar = createObject(foo);
// console.log(foo.isPrototypeOf(bar)); // true

// 5.
let foo = {
  a: 1,
};

Object.prototype.begetObject = function () {
  return Object.setPrototypeOf({}, this);
  // OR
  function Temp() {}
  Temp.prototype = this;
  return new Temp();
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar)); // true

// 6.
function neww(constructor, args) {
  const obj = Object.create(constructor.prototype);
  const returnVal = constructor.prototype.constructor.apply(obj, args);
  return typeof returnVal === "object" ? returnVal : obj;
}

function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.greeting = function () {
  console.log("Hello, " + this.firstName + " " + this.lastName);
};

let john = neww(Person, ["John", "Doe"]);
john.greeting(); // => Hello, John Doe
console.log(john.constructor); // Person(firstName, lastName) {...}
