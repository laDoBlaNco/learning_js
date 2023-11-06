// there are basically two camps. Those that use ; explicitly to mark the ends
// of all statements, and those that try to only use them when needed. Either way
// we need to understand when to use them and when they are optional.

// 1. if two statements are on the same line they must be separated by a ;
a = 3; b = 4;

// Also note that js doesn't treat every line break as a semicolon as some langs do
// this could leave to confusion if we are omitting all of our semicolons
// typically it only treats a line break as a semicolon only if it can't parse the
// code without adding an implicit semicolon. So normally JS treats a line break as
// a semicolon if the next non-space char can't be interpreted as a continuation
// of the current statement. So if it can put it together, it will
let c
c
  =
  3
console.log(c);

// this can get confusing with stuff like this
// let y = x + f
//   (a + b).toString(); 
// JS sees let y = x + f(a+b).toString() and will complain about f not being a function
// In general if a statement begins with (,[,+, or - then JS might see it as a continuation
// For me its better to be explicit
let x = 0;
[x, x + 1, x + 2].forEach(console.log);
['kevin', 'odalis', 'kelen'].forEach(console.log);