// Arrow functions are also call fat arrow functions and were introduced in ES6. They are more concise
// and they have some subtle differences:

// 1. Syntax

// ES5
var add=function(x,y){
  return x+y;
}
console.log(add(5,5));

// ES6
let add2=(x,y)=>x+y;
console.log(add2(5,5));

// with only 1 arg 
let squareNum=x=>x*x;
console.log(squareNum(12));

// maybe with no args - I didn't know about this one.
let sayHi=_=>console.log("Hi there!");
sayHi();


// 2. Arguments binding - => funcs don't have an arguments binding of their own, but they can access the args 
// of the closest non-arrow parent function. Named and rest params are used to capture arguments passed to arrow 
// funcs since they don't have their own arguements object. 
function print(){
  console.log(arguments);
}
print('hello',400,false);

// But this doesn't exist in arrow functions
let print2 = _ =>{
  console.log(arguments);
}
print2('hello',400,false); // error 'arguments is not defined'

// Though we can use the ... rest params in this situation

print3=(...args)=>{
  console.log(args);
}
print3('hello',400,false);


// Arrow functions do not create or have their OWN 'this' binding 
// In normal functions, a this var is created which refs the objects that call them. 
let obj = {
  name:'deeecode',
  age:200,
  print:function(){
    console.log(this);
  }
}
obj.print();

// so above we see that the print method points to its obj which is the object that call the method.
// Here's another example to show that its truly the object that CALLS the method 
let obj = {
  name:'deeecode',
  age:200,
  print:function(){
    function print2(){
      console.log(this);
    }
    print2();
  }
}
obj.print();
// Note here that even though obj call print, its the print2 that's pointing to its global window default object, and not our 'obj'

// now an arrow function 
let obj={
  name:'deeecode',
  age:200,
  print:()=>{
    console.log(this);
  }
}
obj.print();
// with arrow functions the 'this' var isn't created, as a result any reference to 'this' would point to what 'this' was
// before the function was created. And this is what is happening in Radu's explanation. Since we use => functions, they 
// point to the parent objects this. If we would have used normal functions, they would point to the local 'this' and 
// that wouldn't work for our self-driving car. 

// Here's another example:
let obj = {
  name:'deeecode',
  age:200,
  print:function(){
    let print2 = _ =>{
      console.log(this);
    }
    print2();
  }
}
obj.print();

// Here we have print as a normal function which means a 'this' variable was created in it. Then when print2 (an => function) is 
// created, since obj is calling print, the this is pointing to obj. Since print2 is an => function it doesn't create its own 
// but it doesn reference what the value of 'this' was before it was created, which is obj.


// 3. Arrow functions CAN'T be constructors
// We use normal functions to create constructors to be used with 'new' 
class Animal{
  constructor(name,numOfLegs){
    this.name=name;
    this.numOfLegs=numOfLegs;
  }
  sayName(){
    console.log(`My name is ${this.name}`);
  }
}
let Dog = new Animal("Bingo",4);
let Bird = new Animal('Steer',2);
Dog.sayName();
Bird.sayName();
// again we see that 'this' is point to the actual object that called the method. This is key for classes and constructors 
// Arrow functions cannot create their own 'this'. For this reason, => functions CANNOT be constructors.

class Animal{
  constructor = (name,numOfLegs)=>{
    this.name = name;
    this.numOfLegs = numOfLegs;
  }
  sayName(){
    console.log(`My name is ${this.name}`);
  }
}
// it won't even compile the class as it sees 'constructure' as a field name and not a constructor function. 

// We can though use ar'row functions as methods without getting errors. but again, if we need to refer to 'this' we are still
// ok since that reference will point to the value of 'this' before the arrow function was created (again this is what's happening)
// in Radu's code). 
class Animal{
  constructor(name,numOfLegs){
    this.name=name;
    this.numOfLegs=numOfLegs;
  }
  sayName=()=>{
    console.log(`My name is ${this.name}`);
  }
}
let Dog = new Animal("Bingo",4);
Dog.sayName();


// 4. Arrow functions cannot be declared - functions can be created with declarations or expressions:
// declarations involve the function keyword and a name for the function 
function printHello(){
  console.log('hello');
}
printHello();
// printHello is a declared function.

// Expressions involve assigning anony functions to variables (names)
let printHello2 = function(){
  console.log('hello');
}
printHello2();

// So back to => functions. Normal functions can be declared when you use a function keyword and a name, but 
// arrow functions CANNOT be declared. The can only be EXPRESSED because they are ANONYS
let printHello3 = _ =>{
  console.log('hello');
}

