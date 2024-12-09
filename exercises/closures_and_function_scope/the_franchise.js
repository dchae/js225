/* eslint strict: "off" */

// The callback function passed into `map` will be invoked as a function,
// not a method. Since we do not explicitly specify a value for `this`,
// the value of `this` within each function invocation will be the global
// object. Since the `name` property of the global object (presumably) does
// not exist, the returned array will be:
// ['undefined 1', 'undefined 2', 'undefined 2'].

const franchise = {
  name: "How to Train Your Dragon",

  allMovies() {
    // return [1, 2, 3].map((number) => `${this.name} ${number}`);
    return [1, 2, 3].map(
      function (number) {
        return `${this.name} ${number}`;
      }.bind(this),
    );
  },
};

console.log(franchise.allMovies());
