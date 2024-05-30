/**
 * Sum All Numbers in a Range

We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
 */


function sumAll(arr) {
  let res = [];
  // create the range array after we have the min and max of the 2 number args
  for(let i=Math.min(...arr);i<=Math.max(...arr);i++){
    res.push(i);
  }
  // us Array.reduce to do the sum
  return res.reduce((sum,num)=>sum+num);
}

console.log(sumAll([1, 4]));