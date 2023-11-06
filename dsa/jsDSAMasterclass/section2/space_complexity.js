/*
    We can use the same Big O notation, but now let's think about space instead of runtime. When 
    talking about space complexity, we care about the algorithm itself, the "auxiliary space complexity"
    which doesn't include space taken by the inputs. 

    1. Most primitives (bools, numbers, undefined, null) are constant space
    2. Strings require O(n) space (where n is the string length)
    3. Reference types are generally O(n) as well, where n is the length (for arrays) 
       or the number of keys (for objects)

    

*/
// An example: Since there are on two variables in the loop and the result is the returning of one of those
// same variables, regardless of the length of the input (arr) the result is constant, a total number.
// So this is O(1) space.
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// What about this one: I think its O(n) for the returned new array that's size depends on the input.
function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}