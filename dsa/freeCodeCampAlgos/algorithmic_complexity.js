// Now that we know what an algo is, we need to know how to compare different
// algorithms against each other. For example for the following problem, there
// are a number of resolutions:

/*

Write a function that takes two parameters: A non-empty array of distinct integers 
and an integer representing a target sum. If any two numbers in the array sum up 
to the target sum, the function should return them in an array. If no two numbers 
sum up to the target sum, the function should return an empty array.

*/

// Resolution #1
function twoNumberSum(array, targetSum) {
    let result = []
    // we use a nested loopp to test every possible combo
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === targetSum) {
                result.push(array[i])
                result.push(array[j])
                return result
            }
        }
    }
    // return the empty result array
    return result
}
console.log(twoNumberSum([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum([1, 2, 3, 4, 5], 10)) // [] 

// Resolution #2
function twoNumberSum2(array, targetSum) {
    // Sort the array and iterate it with one pointer at each extreme
    // At each iteration, check if the sum of the two pointers is bigger or smaller than the target
    // If it's bigger, move the right pointer to the left
    // If it's smaller, move the left pointer to the right
    let sortedArray = array.sort((a, b) => a - b)
    let leftLimit = 0
    let rightLimit = sortedArray.length - 1

    while (leftLimit < rightLimit) {
        const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]

        if (currentSum === targetSum) return [sortedArray[leftLimit], sortedArray[rightLimit]]
        else currentSum < targetSum ? leftLimit++ : rightLimit--
    }
    return []
}
console.log(twoNumberSum2([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum2([1, 2, 3, 4, 5], 10)) // [] 


// Resolution #3
function twoNumberSum3(array, targetSum) {
    // Iterate over every array once, and at each iteration
    // check if the number you need to get to the target exists in the array
    // If it exists, return its index and the present number index
    let result = []

    for (let i = 0; i < array.length; i++) {
        let desiredNumber = targetSum - array[i]
        if (array.indexOf(desiredNumber) !== -1 && array.indexOf(desiredNumber) !== i) {
            result.push(array[i])
            result.push(array[array.indexOf(desiredNumber)])
            break
        }
    }
    return result
}
console.log(twoNumberSum3([9, 1, 3, 4, 5], 6)) // [1,5]
console.log(twoNumberSum3([1, 2, 3, 4, 5], 10)) // [] 

// so they all get the job done, but which one is better?????
/**
 * But besides effectiveness we should also evaluate algorithms in terms of
 * efficiency, meaning which solves the problem using the smallest amount of
 * resources in terms of time and space
 * 
 * An automatic thought that comes up when first thinking about this is, "Just
 * measure how long it takes the algo to run", And that is valid, but the problem
 * is the same algo might take longer or shorter on a different computer given
 * its hardware and configuration. And even in the same computer it might take
 * longer or shorter to run given the background tasks you got running at that
 * given moment. 
 * 
 * What we need is an objective and invariable way of measuring an algo's performance
 * and that's exactly what asymptotic notation is for. WTH is that????
 * 
 * Also call Big O notation, its a system that allows us to analyize and compare
 * the performance of a algo as its input grows. Big O is a standardized method
 * to analyze and compare the complexity (in terms of runtime and space) of 
 * different algos. The big O complexity of an algo will always be the same
 * no matter what computer you "calculate it" in, because the complexity is 
 * calculated on HOW THE NUMBER OF OPERATIONS OF THE ALGO VARIES WHEN THE INPUT
 * VARIES, and that relationship always stays the same no matter the environment.
 * 
 * Here are the main complexities that we'll see:
 * 
 * CONSTANT - O(1): when a number of operations/space required is always the same
 * independently from the input. Take for example a function that takes a number
 * as input and returns that number minus 10. No matter if you give it 100 or 
 * 1000000 as input, that function will always perform a single operation of
 * subrating 10, so the complexity is O(1) 
 * 
 * LOGARITHMIC - O(log n): When the number of operations/space required grows
 * at an increasingly slower rate compared to the growth of the input. This type
 * of complexity is often found in algos that take a divide and conquer approach
 * or in search algos. The classic example is binary search, in which the dataset
 * you have to go through continually halves until you reach the final result.
 * 
 * LINEAR - O(n): When the number of operations/space required grow at the same 
 * rate as the input. Take for example a loop that prints every signle value 
 * found in an array. The number of operations will grow together with the length
 * of the array, so the complexity is linear O(n) 
 * 
 * QUADRATIC - O(n2): When number of operations/space required grow at the power
 * of two regarding to the input. Nested loops are the classic example for this
 * one. Imagine we have a loop that iterates through an array of numbers, and
 * within that loop we have another one that iterates the whole array again. 
 * For every value in the array we're iterating over the array twice, so the
 * complexity is quadratic O(n2) 
 * 
 * NOTE: The same notation is used when talking about both time and space.
 * Say for example we have a function that always creates an array with a 
 * single value no matter the input it receives, then the space complexity
 * will be constant O(1), and so on with the other complexity types.
 * 
 * So looking back through our examples, 
 *      Example 1 is O(n2)
 *      Example 2 is O(n log(n)) because we are sorting the array in a logarithmic
 *          way, but also iterating once which is O(n) 
 *      Example 3 O(n)
 * 
 * This is truly THE MOST IMPORANT CONCEPT BEHIND ALGORITHMS. Being able to 
 * compare different implementations and understand which is more efficient
 * and why. Its really an important knowledge to have. So if the concept isn't
 * clear for you yet, I encourage you tor ead the examples again, or check out
 * the video course: https://www.youtube.com/watch?v=8hly31xKli0 (in python)
 * 
 */


