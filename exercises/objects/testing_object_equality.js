"use strict";

// function objectsEqual(a, b) {
//   let keyA = JSON.stringify(Object.entries(a).sort());
//   let keyB = JSON.stringify(Object.entries(b).sort());
//   return keyA === keyB;
// }

function objectsEqual(a, b) {
  if (a === b) return true;
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  )
    return false;

  let aKeys = Object.keys(a);
  let bKeys = Object.keys(b);
  if (aKeys.length !== bKeys.length) return false;

  return aKeys.every((key) => {
    if (typeof a[key] === "object" && typeof b[key] === "object") {
      return objectsEqual(a[key], b[key]);
    }

    if ([a[key], b[key]].every(Number.isNaN)) return true;

    return Object.hasOwn(b, key) && a[key] === b[key];
  });
}

console.log(objectsEqual({ a: "foo" }, { a: "foo" }) === true);
console.log(objectsEqual({ a: "foo", b: "bar" }, { a: "foo" }) === false);
console.log(
  objectsEqual({ a: "foo", b: "bar" }, { b: "bar", a: "foo" }) === true,
);
console.log(objectsEqual({}, {}) === true);
console.log(
  objectsEqual({ a: "foo", b: undefined }, { a: "foo", c: 1 }) === false,
);

console.log(
  objectsEqual(
    { a: "foo", b: NaN, c: { a: [1, 2, 3], d: 123 } },
    { a: "foo", b: NaN, c: { a: [1, 2, 3], d: 123 } },
  ) === true,
);

console.log(
  objectsEqual(
    { a: "foo", b: NaN, c: { a: [0, 2, 3], d: 123 } },
    { a: "foo", b: NaN, c: { a: [1, 2, 3], d: 123 } },
  ) === false,
);

// empty, null and NaN
console.log(objectsEqual(null, null) === true);
console.log(objectsEqual({}, {}) === true);
console.log(objectsEqual([], []) === true);
console.log(objectsEqual(NaN, NaN) === true);
// non-nested objects
console.log(objectsEqual({ a: "123" }, { a: "123" }) === true);
console.log(
  objectsEqual({ a: "foo", b: "bar" }, { a: "foo", c: "bar" }) === false,
);
// nested arrays
console.log(
  objectsEqual({ a: [1, [2], [1]], b: 3 }, { a: [1, [2], [1]], b: 3 }) === true,
);
console.log(
  objectsEqual({ a: [1, [2], [3], 4] }, { a: [1, [2], [3], 3] }) === false,
);
// nested objects
console.log(
  objectsEqual(
    { a: "tom", likes: { a: "sports", b: "movies" } },
    { a: "tom", likes: { a: "sports", b: "reading" } },
  ) === false,
);
// arrays vs. objects
console.log(objectsEqual({ 0: 0, 1: 1 }, [0, 1]) === false);
// nested arrays & nested objects
console.log(
  objectsEqual(
    { a: [1, 2], b: { c: 1, d: 2 } },
    { a: [1, 2], b: { c: 1, d: 2 } },
  ) === true,
);
console.log(
  objectsEqual(
    { a: [1, 2], b: { c: 1, d: 2 } },
    { a: [1, 2], b: { c: 1, d: 2, e: 3 } },
  ) === false,
);
