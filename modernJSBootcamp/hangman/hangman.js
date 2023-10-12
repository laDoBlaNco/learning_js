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

// No guesses? -> ***
// Guessed "c", "b", "t"? -> c*t

const Hangman = function (word, guesses) {
    this.word = word
    this.guesses = guesses
    this.wordLetters = word.toLowerCase().split('')
    this.guessedLetters = []
    this.status = 'playing'
}
Hangman.prototype.statusUpdate = function () {
    if (this.guesses < 1) {
        this.status = 'failed'
    }
}
// my solution works perfectly, but I forgot to make the g (guess) lowercase
// also there's no reason in my second if statement to confirm what's in this.wordLetters
// Still works, but I could simplify it.
// Also I'm seeing some repetitive code below, 4 calls to Array.includes on two
// different arrays. I should use some varibles to make this more readable.
Hangman.prototype.guess = function (g) {
    g = g.toLowerCase()
    if (!this.wordLetters.includes(g) && !this.guessedLetters.includes(g)) {
        this.guessedLetters.push(g)
        this.guesses--
        return
    } else if (this.wordLetters.includes(g) && !this.guessedLetters.includes(g)) {
        this.guessedLetters.push(g)
        return
    }
    this.statusUpdate()
}


Hangman.prototype.getPuzzle = function () {
    let result = ''
    this.wordLetters.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {
            result += letter
        } else if (letter === ' ') {
            result += ' '
        } else {
            result += '*'
        }
    })
    return result
}



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

