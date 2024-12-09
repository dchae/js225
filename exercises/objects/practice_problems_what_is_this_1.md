# Practice Problems: What is this? (1)

1. The value of `this` within a function is determined when the function is executed, so we cannot know at this point in time.

2. The global object (in this case, `window`).

3. The value of `this` within the `baz` function is the global object (`window`). Since `baz` is called as a function, not a method, the implicit execution context is the global object.

4. Since the function directly within which `this` is invoked is called as a method of the `obj` object, the implicit execution context is the object which "owns" the method - namely, the `obj` object.

5. In strict mode, the value of `this` for function invocations is `undefined`. Since `foo()` on line 6 is a function invocation, the expression `this.a` will result in an error, since the primitive value `undefined` cannot be used with a property accessor.

6. `obj.foo()` on line 11 is a method invocation and we do not explicitly specify an execution context, therefore the value of `this` within the function object referenced by `obj.foo` will be the `obj` object. Since the function object referenced by `obj.foo` is the same as the one referenced by the global variable `bar`, we will log the value of `obj.a`, which is `2`.

7. On line 12, we invoke the `bar` method of the `foo` object. Within the `bar` method, the value of `this` is the `foo` object, so the expression `this.baz()` references is equivalent to `foo.baz()`. Since that is a method call, the value of `this` within the `baz` function is also the `foo` object, which is then returned and passed into the `console.log()` call as an argument. Finally the `foo` object is logged to the console.

On line 13, the variable `qux` is declared and initialized to the function object referenced by `foo.bar`. When that function is called with `qux()` on line 14, it is a function call, so the value of `this` will be the global object. Since the global object has no property `baz`, the attempt to invoke the `global.baz` function will result in an error.
