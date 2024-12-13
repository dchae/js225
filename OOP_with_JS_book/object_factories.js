"use strict";
// 1.
function makeFruit(name, color) {
  return {
    name,
    color,

    isRipe() {
      return `This ${this.name} is ripe.`;
    },

    describe() {
      return `This ${this.name} is ${this.color}.`;
    },
  };
}

// 2.
function Smartphone(brand, model, releaseYear) {
  return {
    brand,
    model,
    releaseYear,

    checkBatteryLevel() {
      return `${this.model} has ${Math.ceil(Math.random() * 100)}% battery remaining.`;
    },

    displayInfo() {
      return `${this.brand} ${this.model} (${this.releaseYear})`;
    },
  };
}

let iphone12 = Smartphone("Apple", "iPhone 12", 2020);
let galaxyS21 = Smartphone("Samsung", "Galaxy S21", 2021);

console.log(iphone12.checkBatteryLevel());
// Apple iPhone 12 has 75% battery remaining.

console.log(iphone12.displayInfo());
// 2020 Apple iPhone 12

console.log(galaxyS21.checkBatteryLevel());
// Samsung Galaxy S21 has 75% battery remaining.

console.log(galaxyS21.displayInfo());
// 2021 Samsung Galaxy S21

// 3.
function createInstrument(name, type) {
  return {
    name,
    type,

    play() {
      console.log(`We are playing a tune on this ${this.name}`);
    },

    showType() {
      console.log(`This ${this.name} is a ${this.type} instrument`);
    },
  };
}

let violin = createInstrument("violin", "string");
violin.play(); // We are playing a tune on this violin
violin.showType(); // This violin is a string instrument

let cello = createInstrument("cello", "string");
cello.play(); // We are playing a tune on this violin
cello.showType(); // This violin is a string instrument

let flute = createInstrument("flute", "wind");
flute.play(); // We are playing a tune on this flute
flute.showType(); // This flute is a wind instrument

let drum = createInstrument("drum", "percussion");
drum.play(); // We are playing a tune on this drum
drum.showType(); // This drum is a percussion instrument
