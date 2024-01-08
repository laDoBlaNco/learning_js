/**
 * Use Destructuring Assignment to Assign Variables from Nested Objects
You can use the same principles from the previous two lessons to destructure values from nested objects.

Using an object similar to previous examples:
*/
const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
console.log(user);
// Here's how to extract the values of object properties and assign them to variables with the same name:

const { johnDoe: { age, email }} = user; // the key here is the ':', that means  johnDoe isn't a var
console.log(age);
console.log(email);
// And here's how you can assign an object properties' values to variables with different names:

const { johnDoe: { age: userAge, email: userEmail }} = user;
console.log(userAge);
console.log(age);
// Replace the two assignments with an equivalent destructuring assignment. It should still assign the variables lowToday and highToday the values of today.low and today.high from the LOCAL_FORECAST object.
//  */

const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
// distructuring instead of chaining with dot syntax
// const lowToday = LOCAL_FORECAST.today.low;
// const highToday = LOCAL_FORECAST.today.high;
const {
  // yesterday:{low:lowYesterday,high:highYesterday},
  today:{low:lowToday,high:highToday},
  // tomorrow:{high:highTomorrow,low:lowTomorrow},
} = LOCAL_FORECAST;
// As can be seen by me commenting out 'yesterday' and 'tomorrow', we only really need to use
// what we need in the assignment.

// Only change code above this line
console.log(lowToday);
console.log(highToday);