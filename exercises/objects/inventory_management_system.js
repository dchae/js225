"use strict";

function createIDGenerator(start = 0) {
  return function () {
    return start++;
  };
}

const getID = createIDGenerator();

function createProduct(name, stock, price) {
  return {
    id: getID(),
    name,
    stock,
    price,

    setPrice(newPrice) {
      if (newPrice < 0) {
        console.log("Invalid price");
        return;
      }
      this.price = newPrice;
    },

    describe() {
      ["Name", "ID", "Price", "Stock"].forEach((key) => {
        console.log(`=> ${key}: ${this[key.toLowerCase()]}`);
      });
    },
  };
}

let scissors = createProduct("Scissors", 8, 10);
let drill = createProduct("Cordless Drill", 15, 45);

scissors.describe();
drill.describe();

scissors.setPrice(12);
scissors.describe();
