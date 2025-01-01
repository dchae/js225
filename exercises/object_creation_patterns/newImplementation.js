"use strict";

function _new(Constructor, ...args) {
  let obj = Object.create(Constructor.prototype ?? {});
  console.log("instanceof? ", obj instanceof Constructor);
  let returnValue = Constructor.apply(obj, args);
  return typeof returnValue === "object" ? returnValue : obj;
}

// constructor function
// constructor function
function Person(firstName, lastName = "") {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return (this.firstName + " " + this.lastName).trim();
  };
}

let john = _new(Person, "John", "Doe");
let jane = new Person("Jane");

console.log(john); // Person { firstName: "John", ...}
console.log(jane); // Person { firstName: "Jane", ...}

console.log(john.fullName()); // "John Doe"
console.log(jane.fullName()); // "Jane"

console.log(john.constructor); // function Person(..)
console.log(jane.constructor); // function Person(..)

console.log(john instanceof Person); // true
console.log(jane instanceof Person); // true
