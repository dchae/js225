# Practice Problems: Higher-Order Functions

1. Higher-order functions are functions which take a function as an argument and/or return a function.

2. `filter` is a higher-order function because it takes a function (`checkEven`) as an argument.

3.

```js
let numbers = [1, 2, 3, 4];
function makeCheckEven() {
  return (number) => number % 2 === 0;
}

let checkEven = makeCheckEven();

numbers.filter(checkEven); // [2, 4]
```

4.

```js
function execute(func, operand) {
  return func(operand);
}

execute(function (number) {
  return number * 2;
}, 10); // 20

execute(function (string) {
  return string.toUpperCase();
}, "hey there buddy"); // "HEY THERE BUDDY"
```

5.

```js
function makeListTransformer(func) {
  return function (arr) {
    return arr.map(func);
  };
}

let timesTwo = makeListTransformer(function (number) {
  return number * 2;
});

timesTwo([1, 2, 3, 4]); // [2, 4, 6, 8]
```
