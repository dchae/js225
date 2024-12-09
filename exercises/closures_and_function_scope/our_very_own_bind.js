/* eslint strict: "off" */

function bind(func, thisArg, ...args) {
  return function (...moreArgs) {
    return func.apply(thisArg, args.concat(moreArgs));
  };
}

// context binding
const franchise = {
  name: "How to Train Your Dragon",
  allMovies() {
    return [1, 2, 3].map(
      bind(function (number) {
        return `${this.name} ${number}`;
      }, this),
    );
  },
};

console.log(franchise.allMovies());

// partial function application
function sum(x, y) {
  return x + y;
}

function makeAddN(n) {
  return bind(sum, null, n);
}

let addTwo = makeAddN(2);
console.log(addTwo(2)); // 4
console.log(addTwo(5)); // 7
console.log(addTwo(11)); // 13
