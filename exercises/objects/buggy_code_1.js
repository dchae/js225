"use strict";

// The error is produced because the morning, afternoon, and evening
// variables are not defined within the greet function.
// We have to prepend them with "this" in order to ensure they reference
// the current object's properties.

function createGreeter(name) {
  return {
    name,
    morning: "Good Morning",
    afternoon: "Good Afternoon",
    evening: "Good Evening",
    greet(timeOfDay) {
      let msg = "";
      switch (timeOfDay) {
        case "morning":
          msg += `${this.morning} ${name}`;
          break;
        case "afternoon":
          msg += `${this.afternoon} ${name}`;
          break;
        case "evening":
          msg += `${this.evening} ${name}`;
          break;
      }

      console.log(msg);
    },
  };
}

const helloVictor = createGreeter("Victor");
helloVictor.greet("morning");
// Good Morning Victor

// FE
// This works because the parameter/ local var name is in scope
// within the greet function
