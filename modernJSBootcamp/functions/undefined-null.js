// 1. Undefined for variables
let name;

name = 'Kevin'

if (name===undefined){
    console.log('Please provide a name');
    
}else{
    console.log(name);
    
}

// 2. Undefined for function arguments that aren't provided
let square = function(num){
    console.log(num);
}
let result = square()
console.log(result); // 3. Trying to do something with a function that doesn't return anything.

// undefined is a language default and 'null' is when something was explicitly cleared by the dev
let age = 46;
age = null
console.log(age);

