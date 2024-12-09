"use strict";
// This code returns the incorrect values because each call to
// the discount method mutates the object and therefore affects
// subsequent calls. We can fix this by returning the discounted
// price without updating the value of the price property.

const item = {
  name: "Foo",
  description: "Fusce consequat dui est, semper.",
  price: 50,
  quantity: 100,
  discount(percent) {
    const discount = (this.price * percent) / 100;

    return this.price - discount;
  },
};

console.log(item.discount(20));
console.log(item.discount(50));
console.log(item.discount(25));
