"use strict";

function makeList() {
  let items = [];
  let list = {
    add(task) {
      if (!items.includes(task)) {
        items.push(task);
        console.log(task + " added!");
      }
    },

    remove(task) {
      let i = items.indexOf(task);
      if (i !== -1) {
        items.splice(i, 1);
        console.log(task + " removed!");
      }
    },

    list() {
      if (items.length) {
        console.log(items.join("\n"));
      } else {
        console.log("List is empty.");
      }
    },
  };

  return list;
}
