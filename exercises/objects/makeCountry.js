"use strict";

function makeCountry(name, continent, visited = false) {
  return {
    name,
    continent,
    visited,
    getDescription() {
      return `${this.name} is located in ${this.continent}. I have${this.visited ? "" : "n't"} visited ${this.name}.`;
    },
    visitCountry() {
      this.visited = true;
    },
  };
}

let chile = makeCountry("The Republic of Chile", "South America");
let canada = makeCountry("Canada", "North America");
let southAfrica = makeCountry("The Republic of South Africa", "Africa");

// console.log(chile.getDescription()); // "The Republic of Chile is located in South America."
// console.log(canada.getDescription()); // "Canada is located in North America."
// console.log(southAfrica.getDescription()); // "The Republic of South Africa is located in Africa."

console.log(canada.getDescription()); // "Canada is located in North America. I haven't visited Canada."
canada.visitCountry();
console.log(canada.getDescription()); // "Canada is located in North America. I have visited Canada."
