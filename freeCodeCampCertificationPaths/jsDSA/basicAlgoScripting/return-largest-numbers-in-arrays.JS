/**Return Largest Numbers in Arrays
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i]. */


function largestOfFour(arr) {
  const resArr=[];
  for(const sub of arr){
    let max = Number.NEGATIVE_INFINITY; // this is the lowest possible number, allowing for negatives in my array
    for(const n of sub){
      max=n>max?n:max;
    }
    resArr.push(max);
  }

  console.log(resArr);
  return resArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
