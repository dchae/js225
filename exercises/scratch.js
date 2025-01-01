/* eslint strict: "off" */

class Person {
  constructor(name) {
    this.name = name;
  }

  speak(phrase) {
    console.log(`${this.name} says ${phrase}!`);
  }
}

class Student extends Person {
  constructor(name, grade) {
    super(name);
    this.grade = grade;
  }

  study() {
    console.log(`${this.name} is studying...`);
  }
}

let daniel = new Student("Daniel", 5);

// inheriting properties
console.log(daniel.name); // "Daniel"

// inheriting methods
daniel.speak("hello"); // "Daniel says hello!"

// property not defined by superclass
console.log(daniel.grade); // 5

// method not defined by superclass
// makes use of property `name` in superclass
daniel.study(); // "Daniel is studying..."

console.log(Object.hasOwn(daniel, "name")); // false
