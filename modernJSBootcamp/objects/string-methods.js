let name = '       Ladoblanco Whiteside           ';

// Length property
console.log(name.length);

// Convert to uppercase
console.log(name.toUpperCase());

// Convert to lowercase
console.log(name.toLowerCase());

// Includes method
let password = 'abc123password098';
console.log(password.includes('password'));

// Trim method
console.log(name);
console.log(name.trim());

console.log('---- Challenge Area ---\n');
let isValidPassword = (pw)=>{
    return !pw.includes('password')&&pw.length>=8;
}

console.log(isValidPassword('asdfpp'));
console.log(isValidPassword('abc123ioiejf'));
console.log(isValidPassword('asdfpasdfpoijpassword'));



