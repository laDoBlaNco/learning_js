// CommonJS, every file in node is a module (by default)
// Modules - the different files that we split our program into. Allowing us to create smaller files and have more organizaiton. Encapsulated code (only share minimum)

// in order to share modules we use module.exports and then here we use 'require' to access them
const names = require('./4-names'); // always always always start our own modules with './' 
const sayHi = require('./5-utils'); // always always always start our own modules with './' 
require('./7-mind-grenade') // if we don't assign it to something, we'll see the result in our console, becasue its being run. When we import a module we are actually invoking it
// console.log(names);
const data = require('./6-altternative-flavor');
console.log(data);

sayHi('Susan');
sayHi(names.john);
sayHi(names.peter);
// we could have also just destructured the require like: const {john,peter} = require('./4-names);

// node also has a bunch of built-in modules for us to use right away. The list of built-ins is super big. 
// some of the major ones are:
// os
// path
// fs
// http


