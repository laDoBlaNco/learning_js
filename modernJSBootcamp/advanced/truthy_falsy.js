const products = []
const product = products[0]

// Every single value that we can think of in JS is either Truthy or Falsy
// Truthy - values that resolve to  true in a boolean context (where we would expect a boolean)
// Falsy - values that resolve to false in a boolean context
// Falsy Values - false,0,'',null,undefined, NaN - EVERYTHING ELSE IS TRUTHY

if (product) {
    console.log('Product found')
} else {
    console.log('Product not found')
}

// in the wild most js devs use the truthy/falsy features of JS to shorten up their code, using them in the
// ternary operators and the if statements.

// Also keep in mind that the situations in which we will use (or see) the truthy/falsy features used
// is basically when we are checking to see if something exists or not. So if we are doing 'note==='hello'
// then we can't use truthy/falsy since we are comparing two things rather than simply if the note is 
// there. Now if we are doing something like 'note===undefined' then we can definitely use it.

// One other note, when we use truthy/falsy we can also adjust it to control when we run our code with the
// '!' operator. Just like it flips true and false, it'll also flip truthy/falsy so again we can have have
// 'note' meaning 'if the note  exists' or we can use '!note' meaning 'if the note doesn't exists'

// Truthy & Falsy is part of a bigger js concept which is implicit coercion 
// for truthy and falsy this is what we want, but there are many situations where this is danerous and weird.