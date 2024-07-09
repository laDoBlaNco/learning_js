// 1. Setup new 'status' property with initial value of 'playing'
// 2. Create method for recalculating status to 'playing', 'finished', 'failed'
// 3. Call that method after a guess is processed
// 4. Use console.log to print the status.

const puzzle = document.getElementById('puzzle')
const statusView = document.getElementById('statusMessage')
const game = new Hangman('Cat', 2)

puzzle.innerHTML = game.getPuzzle()
statusView.innerHTML = game.getStatus();

// one difference in this and what Andrew publishes is that the 'charCode' method is deprecated
// so I've changed it to e.key where I can which is much easier
window.addEventListener('keypress', (e) => {
  const guess = e.key;
  game.makeGuess(guess)
  puzzle.innerHTML = game.getPuzzle()
  statusView.innerHTML = game.getStatus();
})




/*
// Primitive value: a value that does not have properties. it is a non-object
// There are 5 primitive objects: string, number, boolean, null, and undefined
// Everything else is an object. (including arrays and functions). so let's
// look at arrays and functions with prototypal inheritance.

// Object; myObject --> Object.prototype --> null
// Array: myArray --> Array.prototype --> Object.prototype --> null
const team = ['Luke', 'Maddison']
console.log(team)
console.log(team.hasOwnProperty('length'))
// as mentioned before we can also use the new kw with the array constructor , but
// rarely see this in the wild.
console.log('======================')

// Function: myFunc --> Function.prototype --> Object.prototype --> null
const getScore = () => 1;

console.log(getScore) // strangely it doesn't allow me to see inside of a function
// so I can't crack it up to see the object tree on this one. But completed
// the chain from Andrew's screen. I tried both short syntax , const, and the above.
// All the same result. 

console.log('======================')
// product --> Object.prototype --> null (this means the chain ends) 
const product = {
  name: 'The War Of Art'
}

// hasOwnProperty
console.log(product.hasOwnProperty('hasOwnProperty'))
// internally when we use methods on literal structures we are actually using
// shared methods from the Object.prototype. The prototype built into JS
// Understanding that we see why its 'hasOwnProptery' because we are asking if
// it exists on the actual instance and not up its prototyp chain.

console.log(product)

// Though we will never  do it, EVER we an override and even add methods to  
// the Object prototype.

Object.prototype.hasOwnProperty = () => 'This is the new function'
Object.prototype.someNewMethod = () => 'This is another new method'

console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product.someNewMethod())

// NOTE that we aren't using the 'new' keyword to create new objects here,
// But that's just syntactic sugar. Its still there and we can use it, but 
// with the literal JS syntax, new is run on Object implicitly.


// RECAP:
// 1. When we make an object we are still taking advantage of 'prototypal inheritance'
// 2. The actual chain is with the builtin 'Object.prototype --> null , which goes
//    to 'null' meaning its the base object (for objects) in JS. Remembering that
//    our list above of 5 primitives aren't objects and everything else is. Those items
//    that are objects all eventually chain up into Object.prototype and finally null.
// 3. The  'new' keyword is implicitly used when we use literal syntax

// Now one last question. We said that primitives don't have properties and that they aren't
// objects. But of the 5 (not null or undefined) 3 (number, string, boolean) have 
// methods. So how can we have methods and not be objects???

// strings, number, and boolean have what is called an object wrapper. This is why
// when you look at a string, it can't be opened up like an object, But as soon as
// call a method on it (like .split) an object is created. That object, depending on
// what method is called will then have a chain up to Object.prototype as all objects 
// do. For example, .split('') gives us an array object with all its normal array
// methods from there.
const thing = 'computer'
console.log(thing)
console.log(thing.split(''))

// String myString --> String.prototype --> Object prototype --> null

// so what is the string object constructed with you say?? Well if we use 'new' String
// instead of the string literal syntax we see that we get a String object. 
// This means that we have the primitive 'string', number, and bool when we use
// the literal syntax, but with 'new' we use the object wrapper and get access
// to all the methods that are connected with it 
// Interestingly with the primitives I also see a 'primitive value' on the first
// level its 'Phone', but up the chain its ''. So there is a separation between objects
// and primitives. 
const otherProduct = new String('Phone')
console.log(otherProduct)

// Numbers and booleans are exactly the same
// Number: myNumber --> Number.prototype --> Object prototype --> null
// Boolean: myBoolean --> Boolean.prototype --> Object prototype --> null

// NOTE this is all behind the scenes stuff for JS. It doesn't change how we are going to 
// be coding things, but its good to understand what's happening behind the scenes
// If I'm going to be a JS dev I need to understand these things. 
*/