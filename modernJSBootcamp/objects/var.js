// a third type of variable but es5 and older
var firstName = 'ladoblanco'; //used to be the only way

firstName = 'Kevin'; // just like let you can change the value
console.log(firstName);

// Why its not as good as const/let
 var firstName = 'Jen'  // let and const won't lt you just change variables like this
 console.log(firstName);

 if(true){
    var example = 'example'
 }

 console.log(example); // var is function scoped and not block. Meaning if its not in the function its all
 // in the global scope. With Const Let this will error because its block scoped.

 const setName = ()=>{
    var anotherName = 'Johnny';
 }
 
 setName();
//  console.log(anotherName); // This errors since var is function scoped

// Finally if we try to access a var before its been declared, or assign a var before its declared it'll give us
// undefined or it'll simply create the var by itself. If we are using let or const we will get the ref error.
 
 