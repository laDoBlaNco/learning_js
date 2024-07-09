// Now let's just get into the syntactic sugar of the 'class' keyword in JS. I know this from other
// studies, so it'll just be a review here. The various steps we'll be simply moving to the class
// syntax are:
//  1. class Name
//  2. constructor
//  3. methods

// class itself
class PersonClass {
  // constructor
  constructor(firstName, lastName, age, likes = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.likes = likes;
  }

  // methods
  getBio() {
    let bio = `${this.firstName} is ${this.age}.\n`

    this.likes.forEach((like) => {
      bio += `${this.firstName} likes ${like}.\n`
    })
    return bio;
  }
  setName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }

}


// The original way:
const myPerson = new PersonClass('Kevin', 'Whiteside', 47, ['coding', 'hacking', 'wifey'])
console.log(myPerson);
console.log(myPerson.getBio());
myPerson.setName('Odalis Whiteside');
console.log(myPerson.getBio());

// this is the constructor function, so with the class syntax we just put it in 'constructor'
const Person = function (firstName, lastName, age, likes = []) {
  this.firstName = firstName
  this.lastName = lastName
  this.age = age
  this.likes = likes
}

const me = new Person('Kevin', 'Whiteside', 46, ['hacking', 'wifey']) // now using the 'new' operator we dont get 'undefined' we now get a custom
// object type. 'person {}' 
// Functions that get used with 'new' are constructor functions. Behind the scenes the 'new' operator 
// creates a new empty instance of our object and gives us access to it's attributes with the 'this' value
// That access gives us the power to customize

// Usually uppercase letters are used for constructor functions. This is a convention that tells everyone
// that we are working with constructors and should be call with 'new'

// also notice that we don't explicitly return anything from the constructors. 'new' does this implicitly
// setting up the new object instance and giving us access to it.

console.log(me)
console.log(me.age)
// me.firstName = 'Odalis'
console.log(me)

const person2 = new Person('Juana', 'Lorenzo', 48, ['preaching', 'papi'])
console.log(person2)

// So the attributes are different for each person instance, but there are things that are the same. Shared
// behaviors. JS uses prototypal inheritance
Person.prototype.getBio = function () {
  // remember that arrow functions don't have access to 'this', that's why we use the normal function
  // keyword and not the fancy ()=>{} format
  let bio = `${this.firstName} is ${this.age}.\n`

  this.likes.forEach((like) => {
    bio += `${this.firstName} likes ${like}.\n`
  })
  // interestingly we use an => function with 'this'. That's becasue since => doesn't bind its own 'this' 
  // variable, we have access to its parent's this, which in this case is the one we are working with. If
  // we don't use a => func and do it with a normal 'function(){}, then it'll break because on using 'function'
  // 'this' will be bound to that function and be undefined. 

  return bio
}
console.log(me.getBio())
console.log(person2.getBio())

// it also key to understand the pointer semantics in play here. Even if there are
// instances already created of our constructor, if we make a change in the prototype
// those changes will be seen and reflected in all instances of this object because
// the prototype is shared by all.
Person.prototype.getBio = function () {
  return 'JS Pointer semantics...all the same prototype, so change reflected in all instances even if they were already created'
}

// So adding properties to the prototype object is where we put data that should be shared between all instances. 
Person.prototype.setName = function (fullName) {
  const names = fullName.split(' ')
  this.firstName = names[0]
  this.lastName = names[1]
}

me.setName('Xavier Whiteside')
console.log(me.getBio()) 