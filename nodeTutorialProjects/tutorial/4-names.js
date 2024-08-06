// local
const secret = 'SUPER SECRET';

// share
const john = 'John'
const peter = 'Peter'

// console.log(module); // we can see the module object which has an 'exports' property with is also an object
module.exports = { john, peter } // this looks like a form of destructuring since we are using the actual key names in the exports object.
