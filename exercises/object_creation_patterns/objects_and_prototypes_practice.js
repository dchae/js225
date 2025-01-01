"use strict";

//1.
let prot = {};

let foo = Object.create(prot);

// 2.
console.log(Object.getPrototypeOf(foo) === prot); // true;

// 3.
console.log(prot.isPrototypeOf(foo)); // true;

// 4.
// Line 5 will return true because `prot` will be found in the
// prototype chain for `foo`.
// Line 6 will return true because the `Object.prototype` object
// will also be found in the prototype chain for foo, since it is
// the prototype for the `prot` object.
