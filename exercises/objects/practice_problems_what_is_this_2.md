# Practice Problems: What is this? (2)

1. `this` points to the `myChildObject` object, since the function it is invoked in is called as a method of that object. The return value is `undefined` since `myChildObject` has no such property `count`.

2. We can change the value of `this` to `myObject` by explicitly specifying the value of `this` when we call the `myMethod` function, like so:

```js
let myObject = {
  count: 1,
  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

myObject.myChildObject.myMethod.call(myObject);
```

3. This code will log `Peter Parker is the Amazing Spiderman!`.

4. `computer.total()` is a method call, so the value of this within the function referenced by `computer.total` will be the object `computer`. However, the call to `specialDiscount` within the body of the `total` function is a function call and therefore has an implicit value for `this` of `window`. Since `window.price` is `undefined`, the conditional in the `specialDiscount` function will always evaluate to `false` and `0` will always be returned. Therefore the return value of the `total` method call will be `30000 + 2000 + 3000 - 0` which is `35000`. That value will then be passed into the `console.log` call as an argument and finally be output.

Fixed:

```js
let computer = {
  price: 30000,
  shipping: 2000,
  total() {
    let tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }

    return this.price + this.shipping + tax - specialDiscount.call(this);
  },
};

console.log(computer.total());
```
