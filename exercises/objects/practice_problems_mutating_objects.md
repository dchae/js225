# Practice Problems: Mutating Objects

1. The code will first log "Hello from the function scope!", then "Hello from the global scope!". The message parameter in the function shadows the global message var. Therefore the assignment to the message variable within the function on line 4 changes the value of the message parameter. That new value is first logged when func is called on line 8. Since the value of the global var message was never changed, its original value is logged on line 9.

2. This code will log "Greetings from the function scope!" twice. This code demonstrates that objects are reference types in JS - the global var myObj and the local var obj within the func function both reference or "point to" the same object. When we change the value of the message property within the function, we mutate the single object referenced by both myObj and obj.

3. This code will log "Hello from the function scope!" twice. The global variable message is in scope within the function definition on line 4. Therefore, line 4 reassigns the global variable message to the new string value and that new value is passed into both subsequent console.log calls as an argument.

4. Will log false, then true. The value of global var a is primitive, so the object instantiation on lines 2-4 creates a copy of the value. The value of obj is an object, so the newObj declaration on line 6 creates a new pointer referencing the same object as obj. When the value of the `a` property is updated on line 7, the same object referenced by both obj and newObj is mutated.

5. Because we have reassigned the global var animal to reference a different object.
