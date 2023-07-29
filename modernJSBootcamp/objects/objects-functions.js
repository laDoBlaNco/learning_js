let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A Peoples History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = book=>{
    return{
        summary: `${book.title} by ${book.author}.`,
        pageCountSummary: `${book.title} is ${book.pageCount} pages long.`
    }
    // console.log(`${book.title} by ${book.author}.`);
    
}

let bookSummary = getSummary(myBook);
let otherBookSummary = getSummary(otherBook);

console.log(bookSummary.pageCountSummary);
console.log(bookSummary);

// Challenge Area
console.log('... Challenge Area ...');

let temps =(fahr)=>{
    return {
        fahrenheit: fahr,
        celcius: 5/9*(fahr-32),
        kelvin: 5/9*(fahr+459.67)
    }
}

let tempObject = temps(74);
console.log(tempObject.fahrenheit);
console.log(tempObject.celcius);
console.log(tempObject.kelvin);







