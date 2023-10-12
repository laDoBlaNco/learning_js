// object oriented programming is about programming with the concept of
// working with objects to model real world items or events
// we've done this below before, but what if we want to get another person?
const person = {
    firstName: 'Clancey',
    lastName: 'Turner',
    age: 54,
    getBio() {
        return `${this.firstName} is ${this.age}`
    }
}

const bio = person.getBio()
console.log(bio)

// We need a way to define a person so that we don't need to do the above for
// every person that we need. Each instance of person. What we need is a function
// that will allow us to do this:
// const person1 = new Person('Clancy','Turner', 54)
// const person2 = new Person('Alexis','Sanders',49)

// Each object  with its own version of properties, but with shared methods that
// work with each individual instance of person.
