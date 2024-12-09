"use strict";

// 1.
function subtract(a, b) {
  return a - b;
}

function makeSub() {
  return (a) => subtract(a, 5);
}

const sub5 = makeSub();

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

// 2.
function makeSubN(b) {
  return function (a) {
    return subtract(a, b);
  };
}

const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13

// 3.
function makePartialFunc(func, b) {
  return function (a) {
    return func(a, b);
  };
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

let multiplyBy5 = makePartialFunc(multiply, 5);
let divideBy2 = makePartialFunc(divide, 2);

console.log(multiplyBy5(100)); // 500
console.log(divideBy2(100)); // 50

// 4.
// `multiplyBy5` retains access to `func` and `b` even after `makePartialFunc`
// has finished execution because those two values have been captured in its
// closure.

// 5.
let subjects = {
  English: ["Bob", "Tyrone", "Lizzy"],
  Math: ["Fatima", "Gary", "Susan"],
  Biology: ["Jack", "Sarah", "Tanya"],
};

function rollCall(subject, students) {
  console.log(subject + ":");
  students.forEach(function (student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // return function (students) {
  //   return rollCall("Math", students);
  // };
  return rollCall.bind(null, "Math");
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects["Math"]);
// => Math:
// => Fatima
// => Gary
// => Susan
