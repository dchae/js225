"use strict";

// 1. This code will log 1 since properties are resolved via the prototype
// chain. Since the object referenced by `foo` is part of the prototype
// chain of the object referenced by `bar`, and `a` is a property on `foo`
// at the time of resolving, `bar.a` will resolve to 1 and subsequently be
// logged to the console.

// 2. This code will log 2. The attempt to resolve a property name stops
// when the name is found. Since the first object to be searched is the calling
// object, and `a` is a property of the calling object (`bar`), `bar.a` resolves
// to 2, which is then logged.

// 3. We cannot know this for certain, since `myProp` could have been defined
// on `far`, deleted from `boo`, or the prototype chain could have been
// modified.
//
// We can determine whether `myProp` is delegating the call to `myProp` by
// determining whether `myProp` is a direct property of `far` using
// `Object.hasOwn(far, 'myProp')` or `far.hasOwnProperty('myProp')`.
