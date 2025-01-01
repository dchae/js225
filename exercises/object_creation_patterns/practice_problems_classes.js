"use strict";

// 1, 2, 3, 4
// class Cat {
//   static genericGreeting() {
//     console.log("Hello, I'm a cat!");
//   }
//
//   constructor(name = "Kitty") {
//     this.name = name;
//   }
//
//   greet() {
//     console.log(`I'm ${this.name}!`);
//   }
//
//   rename(name) {
//     this.name = name;
//   }
// }
//
// let kitty = new Cat();
//
// Cat.genericGreeting();

// 5.
class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

// 6.
class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}

let square = new Square(5);
console.log(`area of square = ${square.getArea()}`); // area of square = 25

// 7.
// class Cat {
//   constructor(name) {
//     this.name = name;
//   }
//   speaks() {
//     return `${this.name} says meowwww.`;
//   }
// }
//
// let fakeCat = Object.create(Cat.prototype); // your implementation
// console.log(fakeCat instanceof Cat); // logs true
// console.log(fakeCat.hasOwnProperty("name")); // logs false
// console.log(fakeCat.speaks()); // logs undefined says meowwww.

// 8.
// class Pet {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }
// }
//
// class Cat extends Pet {
//   constructor(name, age, color) {
//     super(name, age);
//     this.color = color;
//   }
//   info() {
//     return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur.`;
//   }
// }
//
// let pudding = new Cat("Pudding", 7, "black and white");
// let butterscotch = new Cat("Butterscotch", 10, "tan and white");
//
// console.log(pudding.info());
// console.log(butterscotch.info());

// 9.
class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }

  introduce() {
    return super.introduce() + " Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "dog", status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(
  cat.introduce() ===
    "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!",
);
// logs true

// 10.
class Vehicle {
  constructor(make, model, wheels = 4) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model) {
    super(make, model);
  }
}

class Motorcycle extends Vehicle {
  constructor(make, model) {
    super(make, model, 2);
  }
}

class Truck extends Vehicle {
  constructor(make, model, payload) {
    super(make, model, 6);
    this.payload = payload;
  }
}

// 11. This code will log "ByeBye" on line 16, then "HelloHello" on line 17.

// 12.
class Person {
  constructor(name) {
    this.name = name;
  }

  greeting() {
    return `Hello, I'm ${this.name}. It's very nice to meet you.`;
  }
}

class Shouter extends Person {
  greeting() {
    return super.greeting().toUpperCase();
  }
}

let person = new Person("Jane");
let shouter = new Shouter("Bob");

console.log(person.greeting()); // Hello, I'm Jane. It's very nice to meet you.
console.log(shouter.greeting()); // HELLO, I'M BOB. IT'S VERY NICE TO MEET YOU.

// 13.
// class Pet {
//   constructor(species, name) {
//     this.species = species;
//     this.name = name;
//   }
//
//   info() {
//     return `a ${this.species} named ${this.name}`;
//   }
// }
//
// class Owner {
//   constructor(name) {
//     this.name = name;
//     this.pets = [];
//   }
//
//   numberOfPets() {
//     return this.pets.length;
//   }
//
//   addPet(pet) {
//     this.pets.push(pet);
//   }
// }
//
// class Shelter {
//   constructor() {
//     this.owners = new Set();
//   }
//
//   adopt(owner, pet) {
//     this.owners.add(owner);
//     owner.addPet(pet);
//   }
//
//   printAdoptions() {
//     this.owners.forEach((owner) => {
//       console.log(`${owner.name} has adopted the following pets:`);
//       owner.pets.forEach((pet) => console.log(pet.info()));
//     });
//   }
// }
//
// let butterscotch = new Pet("cat", "Butterscotch");
// let pudding = new Pet("cat", "Pudding");
// let darwin = new Pet("bearded dragon", "Darwin");
// let kennedy = new Pet("dog", "Kennedy");
// let sweetie = new Pet("parakeet", "Sweetie Pie");
// let molly = new Pet("dog", "Molly");
// let chester = new Pet("fish", "Chester");
//
// let phanson = new Owner("P Hanson");
// let bholmes = new Owner("B Holmes");
//
// let shelter = new Shelter();
// shelter.adopt(phanson, butterscotch);
// shelter.adopt(phanson, pudding);
// shelter.adopt(phanson, darwin);
// shelter.adopt(bholmes, kennedy);
// shelter.adopt(bholmes, sweetie);
// shelter.adopt(bholmes, molly);
// shelter.adopt(bholmes, chester);
// shelter.printAdoptions();
// console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
// console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);

// 14.
class Banner {
  constructor(message) {
    this.message = message;
    this.width = message.length + 4;
  }

  displayBanner() {
    console.log(
      [
        this.horizontalRule(),
        this.emptyLine(),
        this.messageLine(),
        this.emptyLine(),
        this.horizontalRule(),
      ].join("\n"),
    );
  }

  horizontalRule() {
    return `+${"-".repeat(this.width - 2)}+`;
  }

  emptyLine() {
    return `|${" ".repeat(this.width - 2)}|`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}

let banner1 = new Banner("To boldly go where no one has gone before.");
banner1.displayBanner();
let banner2 = new Banner("");
banner2.displayBanner();
