# Practice Problems: Dealing with Context Loss

1. Will log `undefined undefined is a undefined.` On the last line, we pass a reference to the function pointed to by `turk.getDescription` into the `logReturnVal` function as an argument. Since we are calling the `getDescription` function as a function and not as a method without explicitly specifying an execution context, the value of `this` when `getDescription` is executed will be the default value of `global` (or `window`). Since the global object does not have defined values for the `firstName`, `lastName`, or `occupation` properties, they will be interpolated as `undefined`.

2.

```js
let turk = {
  firstName: "Christopher",
  lastName: "Turk",
  occupation: "Surgeon",
  getDescription() {
    return (
      this.firstName + " " + this.lastName + " is a " + this.occupation + "."
    );
  },
};

function logReturnVal(func, context) {
  let returnVal = func.call(context);
  // OR
  // let returnVal = func.apply(context);
  // OR
  // let returnVal = func.bind(context)();
  console.log(returnVal);
}

logReturnVal(turk.getDescription, turk);
```

3.

```js
let getDescription = turk.getDescription.bind(turk);
```

4. No, because the callback function passed into `forEach` is not called as a method or with an explicitly defined execution context and will therefore default to the implicit execution context of the global object. Since the global object does not have a defined `seriesTitle` property, the following will be logged:

```
undefined Arena
undefined Daggerfall
undefined Morrowind
undefined Oblivion
undefined Skyrim
```

5.

```js
let TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames() {
    this.titles.forEach((title) => {
      console.log(this.seriesTitle + " " + title);
    });
  },
};

TESgames.listGames();
```

6.

```js
let TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames() {
    let self = this;
    this.titles.forEach(function (title) {
      console.log(self.seriesTitle + " " + title);
    });
  },
};

TESgames.listGames();
```

7.

```js
let TESgames = {
  titles: ["Arena", "Daggerfall", "Morrowind", "Oblivion", "Skyrim"],
  seriesTitle: "The Elder Scrolls",
  listGames() {
    this.titles.forEach(function (title) {
      console.log(this.seriesTitle + " " + title);
    }, this);
  },
};

TESgames.listGames();
```

8. After this code has executed, the value of `foo.a` will remain 0.

9.

```js
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment.call(this);
  },
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

console.log(foo.a); // 3
```

10.

```js
let foo = {
  a: 0,
  incrementA() {
    function increment() {
      this.a += 1;
    }

    increment = increment.bind(this);
    increment();
    increment();
    increment();
  },
};

foo.incrementA();
console.log(foo.a);
```
