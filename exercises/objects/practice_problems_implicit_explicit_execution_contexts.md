1. The code will output a string representation of the `window` object.
2. In strict mode, the output will be `undefined`.
3. The code will output a string representation of the `obj` object.
4. The code will output `Hello from the global scope!`, then `Hello from the function scope!`.
5. The code will output `20`, then `0`. If we replace `var` on line 1 with `let`, it will output `NaN`, then `0`. Variables declared with `let` are not created as properties on the global object. Therefore, the value of the property `a` of the global object during the first call to `add()` on line 14 is `undefined` and `undefined` + `10` results in `NaN`. The second call to `add()` does not use the `a` variable and is therefore not affected.
6. `call`, `apply`, `bind` are methods that allow us to explicitly specify a function's execution context.
7.

```js
let foo = {
  a: 1,
  b: 2,
};

let bar = {
  a: "abc",
  b: "def",
  add() {
    return this.a + this.b;
  },
};

bar.add.call(foo); // 3
```

8.

```js
let fruitsObj = {
  list: ["Apple", "Banana", "Grapefruit", "Pineapple", "Orange"],
  title: "A Collection of Fruit",
};

function outputList() {
  console.log(this.title + ":");

  let args = [].slice.call(arguments);

  args.forEach(function (elem) {
    console.log(elem);
  });
}

// invoke outputList here
outputList.apply(fruitsObj, fruitsObj.list);
// > A Collection of Fruit:
// > Apple
// > Banana
// > Grapefruit
// > Pineapple
// > Orange
```

9. The author's use of call allows us to use the Array method `slice`` to convert the `arguments`object to an array. This allows us to later use the Array method`forEach` on the arguments.
