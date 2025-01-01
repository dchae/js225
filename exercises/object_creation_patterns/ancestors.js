"use strict";

// Object.prototype.ancestors = function () {
//   let res = [];
//   let cur = Object.getPrototypeOf(this);
//   while (cur) {
//     res.push(cur.name ?? "Object.prototype");
//     cur = Object.getPrototypeOf(cur);
//   }
//   return res;
// };

Object.prototype.ancestors = function ancestors(res = []) {
  let parent = Object.getPrototypeOf(this);
  if (parent) {
    res.push(parent.name ?? "Object.prototype");
    parent.ancestors(res);
  }

  return res;
};

// name property added to make objects easier to identify
const foo = { name: "foo" };
const bar = Object.create(foo);
bar.name = "bar";
const baz = Object.create(bar);
baz.name = "baz";
const qux = Object.create(baz);
qux.name = "qux";

console.log(qux.ancestors()); // returns ['baz', 'bar', 'foo', 'Object.prototype']
console.log(baz.ancestors()); // returns ['bar', 'foo', 'Object.prototype']
console.log(bar.ancestors()); // returns ['foo', 'Object.prototype']
console.log(foo.ancestors()); // returns ['Object.prototype']
