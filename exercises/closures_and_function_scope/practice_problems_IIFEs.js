"use strict";

// 1. No, it will raise a syntax error because the function
// is not parsed as an expression.

// 2.
(function () {
  console.log("Sometimes, syntax isn't intuitive!");
})();

// 3.
// This code demonstrates how variable shadowing can cause errors
var sum = 0;
var numbers;

sum += 10;
sum += 31;

numbers = [1, 7, -3, 3];

sum += (function (arr) {
  return arr.reduce(function (sum, number) {
    sum += number;
    return sum;
  }, 0);
})(numbers);

console.log(sum);

// 4.
function countdown(n) {
  (function printAndDecrement() {
    console.log(n);
    n-- ? printAndDecrement() : console.log("Done!");
  })();
}

countdown(7);

// 5. No, only function declarations create a variable. Function expressions do not.

var foo = (function foo() {
  return foo;
})();

console.log(foo()); // [Function: foo]
// console.log(foo()); // ReferenceError
