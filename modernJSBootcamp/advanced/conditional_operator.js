// const myAge = 46
// const message = myAge >= 18 ? 'You can vote!' : 'You cannot vote!'

// we can use the ternary statement in js when we have a condition of 2 items
// when we only have 2 choices and the result is 1/2 things. If that's our situation
// we should use the ternary operator
// NOTE: if we don't add '? ... : ...' then we get a boolean result which would work if
// that's what we want. So it shows us that for this to work, the assignment must be based
// on a boolean result. We can also remove all of this and just put it on the original 
// assignment.

// if (myAge >= 18) {
//     message = 'You can vote!'
// } else {
//     message = 'You cannot vote!'
// }

// console.log(message)

// another example
const theAge = 13
const showPage = () => {
  console.log('Showing the page');
}
const showErrorPage = () => {
  console.log('Showing the error page')
}

// here we use the ternary operator to actually run 1 of 2 functions as well.
theAge >= 21 ? showPage() : showErrorPage()

// Challenge:
// 1. Print "Team size: 3" if less than or equal to 4
// 2. Print "Way too many people on your team" otherwise

const team = ['ladoblanco', 'Juana', 'Kelen', 'Xavier', 'Melany', 'Danny']
const msg = team.length <= 4 ? `Team size: ${team.length}` : 'Way too many people on your team'
console.log(msg)
// other  ways we could've done it
team.length <= 4 ? console.log() : console.log()
// or
console.log(team.length <= 4 ? `Team size: ${team.length}` : 'Way too many people on your team')

