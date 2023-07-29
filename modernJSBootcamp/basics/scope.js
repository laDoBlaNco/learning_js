// js uses lexical scoping (static scoping)
// Global Scope - Defined outside of all code blocks 
// Local Scope - Defined inside a code block

// In a scope you can access vars defined in that scope, or in any parent/ancestor scope

// Global scope (varOne)
    // Local scope (varTwo) -- access to varTwo,varOne
        // Local scope (varFour) -- access to varFour,varTwo,varOne
    // Local scope (varThree) -- access to varThree,varOne


let varOne = 'varOne';

if(true){
    console.log(varOne);
    let varTwo = 'varTwo';
    console.log(varTwo);

    if(true){
        let varFour = 'varFour';
    }
}

if(true){
    let varThree = 'varThree';

}

console.log(varTwo);
