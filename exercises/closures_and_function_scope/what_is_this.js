"use strict";

const person = {
  firstName: "Rick ",
  lastName: "Sanchez",
  fullName: this.firstName + this.lastName,
};

console.log(person.fullName);
// will log `NaN`
