"use strict";

function delegate(obj, method, ...args) {
  // return () => obj[method].apply(obj, args);
  return bind(obj[method], obj, ...args);
}

function bind(fn, thisArg, ...args) {
  return function (...moreArgs) {
    return fn.apply(thisArg, args.concat(moreArgs));
  };
}

const foo = {
  name: "test",
  bar(greeting) {
    console.log(`${greeting} ${this.name}`);
  },
};

const baz = {
  qux: delegate(foo, "bar", "hello"),
};

baz.qux(); // logs 'hello test';

foo.bar = () => {
  console.log("changed");
};

baz.qux(); // logs 'changed'
