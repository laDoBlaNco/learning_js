// we can export as we go and declare the pieces. So instead of doing a const, we go straight to exports
module.exports.items = ['item1', 'item2'];
const person = {
  name: 'bob',
}

// or we can be very deliberate. This all works because exports is just an object and we are simply adding properties to it.
module.exports.singlePerson = person;

// Its all the same thing in the end, just different approaches to add properties to the export object
