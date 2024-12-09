"use strict";

function makeCounterLogger(n) {
  return function (m) {
    let i = n;
    let step = Math.sign(m - n);
    while (i !== m) {
      console.log(i);
      i += step;
    }
    console.log(i);
  };
}

// let countlog = makeCounterLogger(5);
// countlog(8);
// countlog(2);

function makeList() {
  let list = [];
  function todoList(task) {
    let msg;
    if (task === undefined) {
      msg = list.length ? list.join("\n") : "The list is empty.";
    } else {
      let i = list.indexOf(task);
      if (i !== -1) {
        list.splice(i, 1);
        msg = task + " removed!";
      } else {
        list.push(task);
        msg = task + " added!";
      }
    }

    console.log(msg);
  }

  return todoList;
}

let list = makeList();
list();
list("make breakfast");
list("read book");
list();
list("make breakfast");
list();
