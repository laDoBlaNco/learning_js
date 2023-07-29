let temp = 55;

// Logical And operator - true if both sides are true, otherwise false
// Logical Or operator - true if at least one side is true, otherwise false

if (temp>=60&&temp<=90){
    console.log('It is pretty nice out!');
}else if (temp<=0||temp>=120){
    console.log('Do not go outside!');    
}else{
    console.log('Eh, do what you want');
    
}

console.log('--- Challenge Area ---');
let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if(isGuestOneVegan&&isGuestTwoVegan){
    console.log('Only offer up vegan options');
}else if(isGuestOneVegan||isGuestTwoVegan){
    console.log('Make sure to offer up some vegan options');
}else{
    console.log('Offer up anything on the menu');
}
