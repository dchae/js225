function newInstance(func, ...args) {
  let instance = {};
  func.apply(instance, args);
  return instance;
}

let arr = newInstance(Array, 1, 2, 3);
console.log(arr);
