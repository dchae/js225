"use strict";

let me = {
  firstName: "Jane",
  lastName: "Doe",
};

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

let friend = {
  firstName: "John",
  lastName: "Smith",
};

let mother = {
  firstName: "Amber",
  lastName: "Doe",
};

let father = {
  firstName: "Shane",
  lastName: "Doe",
};

function rollCall(collection) {
  collection.forEach(fullName);
}

let people = {
  collection: [me, friend, mother, father],

  add(person) {
    if (this.isValidPerson(person)) this.collection.push(person);
  },

  getIndex(target) {
    return this.collection.findIndex(
      (person) =>
        person.firstName === target.firstName &&
        person.lastName === target.lastName,
    );
  },

  get(person) {
    if (!this.isValidPerson(person)) return;
    return this.collection.at(this.getIndex(person));
  },

  update(person) {
    if (!this.isValidPerson(person)) return;

    let existingPersonId = this.getIndex(person);
    if (existingPersonId === -1) {
      this.add(person);
    } else {
      this.collection[existingPersonId] = person;
    }
  },

  remove(target) {
    if (!this.isValidPerson(target)) return;

    let idx = this.getIndex(target);
    if (idx !== -1) this.collection.splice(idx, 1);
  },

  rollCall() {
    this.collection.forEach(this.fullName);
  },

  fullName(person) {
    console.log(person.firstName + " " + person.lastName);
  },

  isValidPerson(obj) {
    return (
      typeof obj.firstName === "string" && typeof obj.lastName === "string"
    );
  },
};

people.rollCall();
people.remove(mother);
people.rollCall();
