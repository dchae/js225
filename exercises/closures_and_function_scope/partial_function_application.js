"use strict";

// 1.
function greet(greeting, name) {
  greeting = greeting[0].toUpperCase() + greeting.slice(1);
  console.log(`${greeting}, ${name}!`);
}

greet("howdy", "Joe");
// Howdy, Joe!
greet("good morning", "Sue");
// Good morning, Sue!

// 2.
function partial(func, x) {
  return function (y) {
    return func(x, y);
  };
}

let sayHello = partial(greet, "hello");
sayHello("Brandon");

let sayHi = partial(greet, "hi");
sayHi("Sarah");
