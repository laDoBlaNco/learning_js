/**
 * Diff Two Arrays

Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
 */


function diffArray(arr1, arr2) {
  const newArr = [];
  // my idea is using the Array.includes method to simply compare both arrays
  // looping through one as comparison and then the other. Pushing whatever isn't 
  // there into our result array.
  for(let e of arr1){
    if(!arr2.includes(e)) newArr.push(e)
  }
  for(let e of arr2){
    if(!arr1.includes(e)) newArr.push(e)
  }

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));