// Type Coercion - a string, a number, a boolean. We want to avoid at all cost the first two as there are
// inconsistent in there results. Coercion for booleans is good.

console.log('5' + 5) // using + with two different types (string + number) 
console.log('5' - 5) // what happens when we change + to -. Here JS decides what to coerce to what. 
console.log(5 === 5)
console.log(5 == 5)
console.log('5' == 5) // but here we also get true. '==' doesn't compare types, it'll try to coerce and that
// leads to inconsistent behavior once again.
console.log('5' === 5)

// If someone says that there are situations where we want to use '==', they are liars. Its inconsistent and
// there's no reason for us to use it. If we want to know if something is truly equal, we use '==='

// What we will want to do is use tome type checking if we feel like coercion might hurt us. We do this with:
console.log(typeof 123) // typeof will give us a string result with the name of a type
console.log(typeof {})

const value = true + 123
const type = typeof value
console.log(type)
console.log(value) 