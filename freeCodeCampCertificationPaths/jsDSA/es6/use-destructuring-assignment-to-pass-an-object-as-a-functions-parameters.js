/**Use Destructuring Assignment to Pass an Object as a Function's Parameters
 * Radu does this a lot.
In some cases, you can destructure the object in a function argument itself.

Consider the code below:
*/

const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}

/*
This effectively destructures the object sent into the function. This can also be done in-place:

*/
const profileUpdate2 = ({ name, age, nationality, location }) => {
  // although not evident, the assumption here is that the arg is an obj with those properties.
}

/*
When profileData is passed to the above function, the values are destructured from the function parameter for use within the function.

Use destructuring assignment within the argument to the function half to send only max and min inside the function. */

const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max,min}) => (max + min)/2.0
// Only change code above this line

// console.log((stats.max+stats.min)/2); // this is the answer I should have in the end.
console.log(half(stats));