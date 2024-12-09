var a = "This is the global obj";

let obj1 = {
  a: "This is obj1",

  foo: () => console.log(this.a),
  bar: function() {
    return function () {
      console.log(this.a);
    }.bind(this)()
  },
};

obj1.foo(); // This is obj1
obj1.bar(); // This is obj1

let obj2 = {
  a: "This is obj2",
};

obj2.foo = obj1.foo;
obj2.bar = obj1.bar;
obj2.foo(); // This is obj1
obj2.bar(); // This is obj1

var foo = obj1.foo;
var bar = obj1.bar;

foo(); // This is obj1
bar(); // This is obj1
