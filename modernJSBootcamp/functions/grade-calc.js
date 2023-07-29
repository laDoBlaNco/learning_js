// students score, total possible score
// 15/20 -> You got a C (75%)!
// A 90-100, B 80-89, C 70-79, D 60-69, F 0-59

const gradeCalc = function (score, possibleScore) {
    if (typeof score !== 'number' || typeof possibleScore !== 'number') {
        throw Error(`Please make sure your scores are numbers`)
    }
    let grade;
    const percent = Math.floor(score / possibleScore * 100);
    if (percent >= 90) {
        grade = 'A';
    } else if (percent >= 80 && percent < 90) {
        grade = 'B';
    } else if (percent >= 70 && percent < 80) {
        grade = 'C';
    } else if (percent >= 60 && percent < 70) {
        grade = 'D';
    } else {
        grade = 'F';
    }
    return `You got a ${grade} (${percent}%)!`
}



try {
    const myGrade = gradeCalc(true, 30);
    console.log(myGrade);
} catch (e) {
    console.log(e.message)
}

console.log('\nOn to the next problem...running to the end')

// So my try catch was a little bit different and it still worked, but I did notice that in order to be
// able to access the e.attributes, we need to separate our try/catch from our actual function as I then
// did above.

// Another adjustment that Andrew made was something I learned while working with Go's simplicity of life
// Its better to put the error first and then we don't have to worry about 'else' clauses or running our code
// inside the if statement. Also we use less resources since we don't have to run any code if the error occurs
// so in that case we are actually creating more performant code. That adjustment was done above as well. 
