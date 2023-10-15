// 1. Create a constructor for the hangman game
// 2. Setup two attributes. One for the word itself. Another for the number of guesses allowed.
// 3. Create two instances of it and print both to the console.
// 4. Set up the word instance property as an array of lowercase letters
// 5. Set up another instance property to store guessed letters
// 6. Create a method that gives you the word puzzle back.
// 7. Create a method for making a guess
//    1. Should accept a charactor for guessing
//    2. Should add unique guesses to the list of guesses
//    3. Should decrement t he guesses left if a unique guess isn't a match
// 8. Display the puzzle now to the browser instead of the console
// 9. Display the guesses left to the browser instead of the console
// 10. Separate the Hangman definition from teh rest of the app (use app.js)
// 11. Setup a new 'status' property with inital value of 'playing'
// 12. Create method for recalculating status to 'playing', 'finished', 'failed'
// 13. Call that method after a guess is processed
// 14. use console.log to print the status

// No guesses? -> ***
// Guessed "c", "b", "t"? -> c*t
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {

    // HERE'S ONE MORE APPROACH OF DOING THIS BUT WITH A METHOD CREATED ESPECIALLY FOR THIS TYPE OF SITUATION
    // 'every' only returns true if everything in your array passes
    // your return test
    const finished = this.word.every((letter) =>this.guessedLetters.includes(letter))


    // // ANOTHER WAY TO STRUCTURE THIS ONE WHICH IS ACTUALLY SHORTER
    // const lettersUnguessed = this.word.filter((letter) => {
    //     return !this.guessedLetters.includes(letter)
    // })
    // const finished = lettersUnguessed.length === 0

    // FIRST WAY OF STRUCTURING THIS
    // let finished = true

    // this.word.forEach((letter) => {
    //     if (this.guessedLetters.includes(letter)) {

    //     } else {
    //         finished = false
    //     }
    // })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })

    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const isUnique = !this.guessedLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)

    if (isUnique) {
        this.guessedLetters.push(guess)
    }

    if (isUnique && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}



// my solution works perfectly, but I forgot to make the g (guess) lowercase
// also there's no reason in my second if statement to confirm what's in this.wordLetters
// Still works, but I could simplify it.
// Also I'm seeing some repetitive code below, 4 calls to Array.includes on two
// different arrays. I should use some varibles to make this more readable.





// const game1 = new Hangman('Cat', 2)
// // Guess c,t,z
// game1.guess('c')
// game1.guess('t')
// game1.guess('z')
// console.log(game1.getPuzzle()) // c*t
// Print remaining guesses (should be 1)
// console.log(game1.guesses)

// const game2 = new Hangman('New Jersey', 4)
// // Guess w,x
// game2.guess('w')
// game2.guess('z')
// console.log(game2.getPuzzle()) // **w ******
// // Print remaining guesses (should be 3) 
// console.log(game2.guesses)

