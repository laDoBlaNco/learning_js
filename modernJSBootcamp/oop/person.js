// Now let's just get into the syntactic sugar of the 'class' keyword in JS. I know this from other
// studies, so it'll just be a review here. The various steps we'll be simply moving to the class
// syntax are:
//  1. class Name
//  2. constructor
//  3. methods

// So our prototypal tree is: myPerson --> Person.prototype --> Object.prototype --> null

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
  // let's turn this into a custom setter rather than a method call.
  set fullName(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
  }

}

// But if I want to make other types of persons with some small differences, there'll be a lot of duplicate code. That's when sublclassing comes into play.
// employee person
// start with the standard class structure and then 'extends'
class Employee extends PersonClass {

  // we start by overriding things, starting with the constructor
  constructor(firstName, lastName, age, position, likes) {
    // we do have to call the parent contstuctor to use it here.
    super(firstName, lastName, age, likes);
    this.position = position;
  }
  // we can then override behavior and create new behavior.
  getBio() {
    return `${this.firstName} is a ${this.position}.`
  }
  getYearsLeft() {
    return 65 - this.age;
  }
  // let's add a custom getter to Employee so we can get the fullName from the first and last names.
  // Note that this proves that we don't need both getter and setter in every class. Just where we need it
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}


// The original way:
const myPerson = new Employee('Kevin', 'Whiteside', 47, 'Senior Director of Operations', ['coding', 'hacking', 'wifey']);
// console.log(myPerson);
console.log(myPerson.getBio());
console.log(myPerson.getYearsLeft());
// this works even though this property doesn't actually exist. Its a computed property
console.log(myPerson.fullName);

const myPerson2 = new PersonClass('Juana', 'Lorenzo', 50, ['cleaning', 'preaching', 'jugando']);
console.log(myPerson2.getBio());
myPerson2.fullName = 'Odalis Whiteside';
console.log(myPerson2.getBio());
console.log('===============================================================================================');
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

// console.log(me)
// console.log(me.age)
// me.firstName = 'Odalis'
// console.log(me)

const person2 = new Person('Juana', 'Lorenzo', 48, ['preaching', 'papi'])
// console.log(person2)

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
// console.log(me.getBio())
// console.log(person2.getBio())

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
// console.log(me.getBio()) 

/////////////////////////////// Challenge ////////////////////////////////////////
// 1. Create class for students extending PersonClass
// 2. Track student grade 0 - 100.
// 3. Override bio to print a passing or failing message. 70 and above "Andrew is passing the class"
// 4. Create 'updateGrade' that takes the amount to add or remove from the grade

// Create a student
// Print status (failing or passing)
// Change grade to change status.
// Print status again.

class Student extends PersonClass {
  // define what makes student unique, part of the constructor
  constructor(firstNme, lastName, age, grade, likes) {
    super(firstNme, lastName, age, likes);
    this.grade = grade;
  }
  // override 'getBio' and create 'updateGrade' which is unique to student
  getBio() {
    return `${this.firstName} is ${this.grade >= 70 ? 'passing' : 'failing'} this class.`
  }
  updateGrade(update) {
    this.grade += update;
  }
}

const student = new Student('Kelen', 'Whiteside', 17, 98,);
console.log(student);
console.log(student.getBio());
student.updateGrade(-40);
student.fullName = 'Delight Whiteside';
console.log(student);
console.log(student.getBio());