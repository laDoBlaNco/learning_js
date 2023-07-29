const add = function () {
    // inside all of our regular functions we have access to 'arguments'
    return arguments[0] + arguments[1]
}

add(11, 22, 33, 44)
console.log(add(11, 22, 33, 44))
// Arrow functions don't have access to 'arguments', but in 99.9% of our functions we will write, we don't
// use arguments.

// Another difference is that arrow funcs don't bind their 'this' properties. So better not to use => funcs
// on objects. The alternative to below would be getSummary(){} with no ':' or keyword. 

const car = {
    color: 'Red',
    getSummary: () => {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())

// So the questions we need to ask ourselves are:
// 1. AM I USING 'ARGUMENTS' OR 'THIS'? -> arrow function
// 1. AM I ONLY RETURNING SOMETHING SIMPLE? -> arrow function (short  syntax)
