"use strict";

// 1.
// function getDefiningObject(object, propKey) {
//   if (!object || Object.hasOwn(object, propKey)) return object;
//
//   const parent = Object.getPrototypeOf(object);
//   return getDefiningObject(parent, propKey);
// }
//
// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// let baz = Object.create(bar);
// let qux = Object.create(baz);
//
// bar.c = 3;
//
// console.log(getDefiningObject(qux, "c") === bar); // => true
// console.log(getDefiningObject(qux, "e")); // => null

// 2.
// function shallowCopy(object) {
//   return Object.assign(Object.create(object), object);
//   // OR
//   let copy = Object.assign({}, object);
//   Object.setPrototypeOf(copy, object);
//   return copy;
//   // Explicitly setting the prototype is less efficient
//
//   // OR
//   let copy = Object.create(Object.getPrototypeOf(object));
//
//   Object.getOwnPropertyNames(object).forEach(
//     (prop) => (copy[prop] = object[prop]),
//   );
//
//   return copy;
//   // Object.getOwnPropertyNames does not return Symbols.
//   // Object.assign does copy symbols.
// }
//
// let foo = {
//   a: 1,
//   b: 2,
// };
//
// let bar = Object.create(foo);
// bar.c = 3;
// bar.say = function () {
//   console.log("c is " + this.c);
// };
//
// let baz = shallowCopy(bar);
// console.log(baz.a); // => 1
// baz.say(); // => c is 3
// console.log(baz.hasOwnProperty("a")); // false
// console.log(baz.hasOwnProperty("b")); // false
// console.log(baz.hasOwnProperty("c")); // true

// 3.
function extend(destination, ...sources) {
  return Object.assign(destination, ...sources);
  // OR
  sources.forEach((source) => {
    Object.getOwnPropertyNames(source).forEach(
      (prop) => (destination[prop] = source[prop]),
    );
  });

  return destination;
}

let foo = {
  a: 0,
  b: {
    x: 1,
    y: 2,
  },
};

let joe = {
  name: "Joe",
};

let funcs = {
  sayHello() {
    console.log("Hello, " + this.name);
  },

  sayGoodBye() {
    console.log("Goodbye, " + this.name);
  },
};

let object = extend({}, foo, joe, funcs);

console.log(object.b.x); // => 1
object.sayHello(); // => Hello, Joe/
