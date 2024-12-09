1. `Function.prototype.bind`
2. Nothing will be logged, since bind creates a function without calling it.
3. Will log `5`.
4. Will log `'JavaScript makes sense!'`. The execution context of the function referenced by `bar` has been bound to the object referenced by `positiveMentality`. The `logMessage` property of the `negativeMentality` object references that same function. Since the execution context has been set explicitly, it will not default to the implicit value of the `negativeMentality` object.
5. Will log `'Amazebulous!'`, for similar reasons as above. Since the function returned by `bind` has its execution context (value of `this`) permanently bound, using `call` or `apply` will not affect its execution context.
