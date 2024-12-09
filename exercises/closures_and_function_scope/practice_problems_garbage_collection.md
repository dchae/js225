# Practice Problems: Garbage Collection

1. Yes, JavaScript is a garbage-collected language. This means that the engine will periodically and automatically deallocate memory for values which are no longer referenced by the program.

2. Nothing is eligible for garbage collection at line 5. On line 10, `1` is still reachable through the `myNum` global variable, but the array referenced by `myArr` is no longer reachable and therefore is eligible for garbage collection.

3. The object is not eligible for garbage collection on line 11 because it is still reachable through the function referenced by the `greeting` variable.
