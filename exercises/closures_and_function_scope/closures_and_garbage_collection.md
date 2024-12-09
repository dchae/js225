# How Closures Affect Garbage Collection - Problems

1. In the following code, when can JavaScript garbage collect each of the following arrays? `[1]`, `[2]`, and `[1, 2]`.

```js
let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();
```

`[1, 2]` cannot be garbage collected until the main program finishes execution. `[1]` is only referenced by the `a` global variable and can be garbage collected once `a` is reassigned to the new array that is returned by the `concat` method (`[1, 2]`) on line 4. `[2]` is referenced by the `c` local variable within `run` and the `b` local variable within the `add` call from inside `run`. It can be garbage collected after `run()` is finished executing on line 12.

2. In the following code, when can JavaScript garbage collect the value `["Steve", "Edie"]`?

```js
function makeHello(names) {
  return function () {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);
```

The `["Steve", "Edie"]` object is passed into the `makeHello` function as an argument. The `makeHello` function returns a separate function which accesses the array passed into the `makeHello` function and logs a message. That function is created, along with a closure that contains the array referenced by `names`, and then returned and assigned to the `helloSteveAndEdie` global variable. Since the `["Steve", "Edie"]` array is captured in the closure for the function referenced by `helloSteveAndEdie`, it may not be garbage collected until no references to that function remain. Assuming this is the entire program, it will be garbage collected when the program finishes execution.
