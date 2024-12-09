1. Without strict mode enabled, the window object serves as the implicit execution context. With strict mode enabled, the implicit execution context is undefined.
2. true
3. no log, will raise a reference error since a is undefined (never declared)
4. will raise a reference error, since b was never declared at the scope where it is passed into console.log as an arg.
5. will log 1, since b was created as a prop of the global obj when func was run.
6. reference error, since when we run func(), b is assigned without ever having been declared and this is not allowed in strict mode.
