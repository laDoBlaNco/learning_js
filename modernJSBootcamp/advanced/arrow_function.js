// with arrow functions we start with the arg list instead of the keyword 'function' followed by =>
const squareLong = (num) => {
    return num * num
}

console.log(squareLong(5))

// The benefits of arrow functions is that when we have one line only there is a short-hand syntax we can't
// do with other function declarations. A 1-line function would be for example only returning a result (like filter)
const square = (num) => num * num // NOTE: no {} and on same line

console.log(square(5))

const people = [{
    name: 'Kevin',
    age: 46,
}, {
    name: 'Odalis',
    age: 48,
}, {
    name: 'Kelen',
    age: 17,
}]

const under30Long = people.filter(function (person) {
    return person.age < 30
})
console.log(under30Long)

const under30Short = people.filter((person) => {
    return person.age < 30
})
console.log(under30Short)

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

// CHALLENGE - Lecture 80
// 1. find the person with an age 46
// 2. Print that person's name.

const age48 = people.filter((person) => person.age === 48)
console.log(age48[0].name)

// another way
const person = people.find((person) => person.age === 48)
console.log(person.name)

// An even shorter syntax if you only have one arg, no need for the ()
const person2 = people.find(person => person.age === 48)
console.log(person2.name)



