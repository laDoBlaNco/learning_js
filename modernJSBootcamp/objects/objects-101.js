const myBook = {
    title: `1984`,
    author: 'George Orell',
    pageCount: 326
}

console.log(`${myBook.title} by ${myBook.author}.`);

myBook.title = 'Animal Farm';

console.log(`${myBook.title} by ${myBook.author}.`);


console.log('--- Challenge Area ---');

const person = {
    name: 'Ladoblanco',
    age: 46,
    location: 'Santo Domingo'
}

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);

person.age++

console.log(`${person.name} is ${person.age} and lives in ${person.location}.`);
