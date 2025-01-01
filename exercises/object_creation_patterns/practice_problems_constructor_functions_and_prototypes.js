/* eslint strict: "off"*/

// 1.
// let a = 1;
// let foo;
// let obj;
//
// function Foo() {
//   this.a = 2;
//   this.bar = function () {
//     console.log(this.a);
//   };
//   this.bar();
// }
//
// foo = new Foo();
//
// foo.bar();
// Foo();
//
// obj = {};
// Foo.call(obj);
// obj.bar();
//
// console.log(this.a);

// On line 13, we call the Foo constructor function with the `new` keyword.
// This creates a new object that inherits from Foo.prototype and then runs
// `Foo` with that object as the execution context. Within Foo, we set the
// `a` property to 2, and the `bar` property to a method that logs the value
// of `this.a`. Then we call the `bar` method on the `this` object. Since the
// value of `this` within the `Foo` constructor function has been explicitly
// set to the new object, the call to `bar()` on line 10 will log 2.
//
// The return value of the constructor function is not an object, so the `new`
// keyword invocation will return the constructed object, which will then be
// assigned to the global variable `foo`.
//
// On line 15, the `bar` method is called on the `foo` object. Since the
// implicit value of `this` within a method call is always the calling object,
// the method call will log `2`.
//
// On line 16, calling the `Foo` constructor function without the `new` keyword
// will just execute the function. Since it is a function call, the value of
// `this` within the function will be the global object (or `undefined` if we
// are in strict mode). Assuming we are not in strict mode, we will set the
// value of the property `a` on the global object to 2, then create a method
// `bar` on the global object, then execute it, which will log 2.
//
// On line 19, we call `Foo``, explicitly setting the value of `this` to the
// empty object referenced by the global variable `obj`. `Foo` is executed,
// setting the `a` and `bar` properties on `obj`. 2 will again be logged.
//
// Line 20 will log 2, since it is a method call and the value of `obj.a` is 2.
// Line 22 will log 2, since the value of the `a` property on the global object
// has been set to 2 on line 16. Since we access `a` as a property and not as a
// variable, line 1 does not come into play.
//
// All in all, 2 will be logged 6 times
// In node, this code would run in module scope

// 2.
// This code will log NaN, NaN

// fixed:
// let RECTANGLE = {
//   area() {
//     return this.width * this.height;
//   },
//   perimeter() {
//     return 2 * (this.width + this.height);
//   },
// };
//
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;
//   this.area = RECTANGLE.area.call(this);
//   this.perimeter = RECTANGLE.perimeter.call(this);
// }
//
// let rect1 = new Rectangle(2, 3);
// console.log(rect1.area);
// console.log(rect1.perimeter);

// 3.
// function Circle(radius) {
//   this.radius = radius;
// }
//
// Circle.prototype.area = function () {
//   return Math.PI * this.radius ** 2;
// };
//
// let a = new Circle(3);
// let b = new Circle(4);
//
// console.log(a.area().toFixed(2)); // => 28.27
// console.log(b.area().toFixed(2)); // => 50.27

// 4. This code will log true, since an object can access methods defined on any
// prototype in its prototype chain.

// 5. This code will raise an error, since we are trying to call a method
// that cannot be resolved. The reason it cannot be resolved is that we have
// reassigned the value for the Ninja function prototype. Therefore, the
// prototype chain for the `ninja` object does not include the object
// referenced by `Ninja.prototype` and consequently cannot resolve the
// `swingSword` method call.

// 6.
// let ninjaA;
// let ninjaB;
// function Ninja() {
//   this.swung = false;
// }
//
// ninjaA = new Ninja();
// ninjaB = new Ninja();
//
// Ninja.prototype.swing = function () {
//   this.swung = true;
//   return this;
// };
// // Add a swing method to the Ninja prototype which
// // returns the calling object and modifies swung
//
// console.log(ninjaA.swing().swung); // must log true
// console.log(ninjaB.swing().swung); // must log true

// 7.
let ninjaA = (function () {
  function Ninja() {}
  return new Ninja();
})();

// create a ninjaB object
let ninjaB = Object.create(Object.getPrototypeOf(ninjaA));

console.log(ninjaB.constructor === ninjaA.constructor); // should log true
