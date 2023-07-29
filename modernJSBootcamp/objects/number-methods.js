let num = 69.6969;

console.log(num.toFixed(10));

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num))

let min = 0;
let max = 100;
let randomNum = Math.floor(Math.random()*(max-min+1))+min
console.log(randomNum);

// Challenge
console.log('---- Challenge Area ----\n');

let makeGuess = guess=>{
    let min = 0;
    let max = 5;
    return guess===Math.floor(Math.random()*(max-min-1))+min;
}
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));
console.log(makeGuess(3));


