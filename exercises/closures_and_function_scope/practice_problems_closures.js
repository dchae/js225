"use strict";

// 1.
function makeMultipleLister(n) {
  return () => {
    for (let i = n; i < 100; i += n) console.log(i);
  };
}

let lister = makeMultipleLister(13);
// lister();

// 2.
let total = 0;
function add(n) {
  total += n;
  console.log(total);
}

function subtract(n) {
  add(-n);
}

// add(1);
// add(42);
// subtract(39);
// add(6);

// 3.
// No, status is not a part of the ready function's closure,
// since it is not used by the function.
// Therefore, there is no way to access it from outside its scope.
