let isAccountLocked = false;
let userRole = 'user';

if(isAccountLocked){
    console.log('Account is locked!');   
}else if(userRole==='admin'){
    console.log('Welcome admin!');    
}else{
    console.log('Welcome!');
}

console.log('--- Challenge  area ---');

let temp = 31;
if (temp<=32){
    console.log('It is freezing outside!');
}else if(temp>=110){
    console.log('It is way too hot outside!')
}else{
    console.log('Go for it. It is pretty nice outside.');    
}
