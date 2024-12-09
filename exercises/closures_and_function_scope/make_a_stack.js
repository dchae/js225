"use strict";

function newStack() {
  const stack = [];

  return {
    push(val) {
      return stack.push(val);
    },
    pop() {
      return stack.pop();
    },
    printStack() {
      console.log(stack.join("\n"));
    },
  };
}

let stack = newStack();

stack.push(1);
stack.printStack();
console.log();

stack.push(1);
stack.printStack();
console.log();

stack.push(2);
stack.printStack();
console.log();

stack.pop();
stack.printStack();
console.log();

stack.pop();
stack.printStack();
