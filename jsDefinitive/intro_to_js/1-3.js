// Anything following double slashes is an English-language comment.
// Read the comments carefully; they explain the javascript code

// A variable is a symbolic name for a value.
// Variables are declared with the let keyword:
let x;    // Declare a variable named x.

// Values can be assigned to variables with an = sign
x = 0;    // Now the variable x has the value 0
console.log(x);  // A variable evaluates to its value.

// Javascript supports several types of values
x = 1;                // Numbers
x = 0.01;             // Numbers can be integers or reals
x = "hello world";    // Strings or text in quotation.
x = 'JavaScript';     // Single quote marks also delimit marks
x = true;             // A Boolean value
x = false;              // the other Boolean value
x = null;           // Null is a special value that means "no value".
x = undefined     // Undefined is another  special value like null.

// Javascript's most important datatype is the object.
// An object is a collection of name/value pairs, or a string to value map
let book = {    // Objects are enclosed in curly braces
  topic: 'JavaScript',    // The property 'topic' has value JavaScript
  edition: 7,             // The property 'edition' has value 7
};                // The curly brace marks the end of the object. 

// Access the properties of an obejct with . or [];
console.log(book.topic);
console.log(book['edition']); // 7 another way to access property values
book.author = "Flanagan"; // Create new properties by assignment
book.contents = {}; // {} is an empty object with no properties

// Conditionally access properties with ?. (ES2020) 
console.log(book.contents?.ch01?.sect1); // undefined: book.contents has no ch01 property
// This is like the famous 'option' some or none

// Javascripts also supports arrays (numerically indexed lists) of values
let primes = [2, 3, 5, 7];  // An array of 4 values, delimited with [ and ].
console.log(primes[0]); // The first element (index 0) of the array.
console.log(primes.length); // how many elements in the array
console.log(primes[primes.length - 1]); // the last element of the array
primes[4] = 9;      // add a new element by assignment
primes[4] = 11;     // or alter an existing element by assignment
let empty = [];     // [] is an empty array with no elements like {} is an empty object
console.log(empty.length);

// Arrays and objects can hold other arrays and objects:
let points = [        // An array with 2 elements.
  { x: 0, y: 0 },     // Each element is an object.
  { x: 1, y: 1 },
];

let data = {                  // An object with 2 properties
  trial1: [[1, 2], [3, 4]],   // The value of each property is an array
  trial2: [[2, 3], [4, 5]],   // The elements of the arrays  are arrays.
};


// Operators act on values (the operands) to produce a new value.
// Arithmetic operators are some of the simplest:
console.log(3 + 2);   // addition
console.log(3 - 2);   // subtraction
console.log(3 * 2);   // multiplication
console.log(3 / 2);   // division
console.log(points[1].x - points[0].x); // more complicated operands also work
console.log('3' + '2') // + adds numbers, concatenates strings


// JavaScript defines some shorthand arithmetic operators
let count = 0;      // Define a variable
count++;          // Increment the variable
count--;          // Decrement the variable
count += 2;       // Add 2; same as count = count + 2
count *= 3;       // Multiply by 3: same as count = count * 3
console.log(count); // variable names are expressions, too.

// Equality and relational operators test whether test two values are equal,
// unequal, less than, greater than, and so on. They eval to true and false
let y = 3;
x = 2;
console.log(x === y);
console.log(x !== y);
console.log(x < y);
console.log(x <= y);
console.log(x > y);
console.log(x >= y);
console.log('two' === 'three');
console.log('two' > 'three');
console.log(false === (x > y));


// Logical operators combine or invert boolean values
console.log((x === 2) && (y === 3));
console.log((x > 3) || (y < 3));
console.log(!(x === y));

// If js expressions are like phrases, then js statements are like full sentences
// Roughly an expression is something that computes a value but doesn't DO anything:
// o sea it doesn't alter the program state in any way. Statements on the other
// hand don't have a value, but they do alter the state. 

// Let's talk about some statements and expressions:

// Functions are parametrized blocks of javascript code that we can invoke:
function plus1(x) {   // Define a function named 'plus1' with param 'x'
  return x + 1;       // Return a value one larger than then value passed in
}               // Functions are enclosed in curly braces

console.log(plus1(y)); // this is the invocation returning 3+1

let square = function (x) { // Functions are values and can be assigned to vars
  return x * x;             // compute the function's value
};                          // semicolon marks the end of the assignment

console.log(square(plus1(y))); // invoking 2 functions in one expression

// Now we have arrow functions as well
const plus2 = x => x + 2; // the input x maps to the output x + 1
const square2 = x => x * x; // The input x maps to the output of x*x
console.log(plus2(y));
console.log(square(plus2(y)));

// When functions are assigned to the properties of an object we get methods
// All js objects (including arrays) have methods:
let a = [];     // create a empty array
a.push(1, 2, 3);    // the push() method adds elements to an array
a.reverse();        // Another method: reverses the order of the elements in-line
console.log(a);

// We can define our own methods, too. the 'this' keyword refers to the object
// on with the method is defined: in this case, the points array from earlier.
points.dist = function () { // Define a method to compute distance between points
  let p1 = this[0];   // first elements of  array we're invoked on
  let p2 = this[1];   // second element of the this object
  let a = p2.x - p1.x;  // difference in x coords
  let b = p2.y - p1.y;  // difference in y coords
  return Math.sqrt(a * a + b * b); // The pythagorean theorem
};
console.log(points.dist());

// Now js control structure
function abs(x) {
  if (x >= 0) {
    return x;
  } else {
    return -x;
  }
}
console.log(abs(-10) === abs(10));

function sum(array) {
  let sum = 0;
  for (let x of array) {
    sum += x;
  }
  return sum;
}
console.log(sum(primes));


function factorial(n) {
  let product = 1;
  while (n > 1) {
    product *= n;
    n--;
  }
  return product;
}
console.log(factorial(4));

function factorial2(n) {
  let i, product = 1;
  for (i = 2; i <= n; i++) product *= i;
  return product;
}
console.log(factorial2(5));


// JS also has its version of classes
class Point { // by convention class names are capitalized
  constructor(x, y) { // Constructor function to initialize new instances, run with 'new'
    this.x = x;
    this.y = y;
  }
  distance() { // methods are functions created in a class
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
}

// Using the Point() constructor function with 'new' to create Point objects
let p = new Point(1, 1);
console.log(p.distance());




