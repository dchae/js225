"use strict";

// 1. The naming convertion for constructor functions is PascalCase.

// 2. On line 7, we call the Lizard function, which assigns the `scamper`
//    property of `this` to an anonymous function. Since we are in a
//    function call, the implicity value of `this` is the global object.
//    The function returns no value and therefore the value of `lizzy` is
//    undefined. The code will throw an error on the last line as we attempt
//    to access a property on the value `undefined`.

// 3.
function Lizard() {
  this.scamper = function () {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper(); // ?
