// multiple arguments
let add = function (a,b,c){
    return a+b+c;
}

let result = add(10,1,5);
console.log(result);


// default arguments
let getScoreText = function(name='Anonymous',score=0){
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined,99)
console.log(scoreText);

// let tipCalculator = function(total,tipPercent=.2){
//     return total*tipPercent;
// }

// console.log(tipCalculator(150,.15)); // override default
// console.log(tipCalculator(80,.10)); // override default
// console.log(tipCalculator(150)); // use the default tip %

console.log('ladoblanco');
console.log("ladoblanco" + ' Whiteside');

let name  = 'Vikram';
let age = 46;
console.log(`I'm ${age} years old. Hey my name is ${name}.`);

console.log(`--- Challenge Area ---`);

let tipCalculator = function(total,tipPercent=.2){
    return `A ${tipPercent*100}% tip on $${total} would be $${total*tipPercent}`;
}
let tip = tipCalculator(60)
console.log(tip);











