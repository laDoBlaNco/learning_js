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
function twoNumberSum(array,targetSum){
	let result = []
	// we use a nested loopp to test every possible combo
	for(let i=0;i<array.length;i++){
		for(let j=i+1;j<array.length;j++){
			if(array[i]+array[j]===targetSum){
				result.push(array[i])
				result.push(array[j])
				return result
			}
		}
	}
	// return the empty result array
	return result
}
console.log(twoNumberSum([9,1,3,4,5],6)) // [1,5]
console.log(twoNumberSum([1,2,3,4,5],10)) // [] 

// Resolution #2
function twoNumberSum2(array,targetSum){
	// Sort the array and iterate it with one pointer at each extreme
	// At each iteration, check if the sum of the two pointers is bigger or smaller than the target
	// If it's bigger, move the right pointer to the left
	// If it's smaller, move the left pointer to the right
	let sortedArray = array.sort((a,b)=>a-b)
	let leftLimit = 0
	let rightLimit = sortedArray.length-1 
	
	while(leftLimit < rightLimit){
		const currentSum = sortedArray[leftLimit] + sortedArray[rightLimit]
		
		if(currentSum===targetSum) return [sortedArray[leftLimit],sortedArray[rightLimit]] 
		else currentSum<targetSum?leftLimit++:rightLimit-- 
	}
	return []
}
console.log(twoNumberSum2([9,1,3,4,5],6)) // [1,5]
console.log(twoNumberSum2([1,2,3,4,5],10)) // [] 


// Resolution #3
function twoNumberSum3(array,targetSum){
	// Iterate over every array once, and at each iteration
	// check if the number you need to get to the target exists in the array
	// If it exists, return its index and the present number index
	let result = []
	
	for(let i=0;i<array.length;i++){
		let desiredNumber = targetSum-array[i]
		if(array.indexOf(desiredNumber) !== -1 && array.indexOf(desiredNumber)!==i){
			result.push(array[i])
			result.push(array[array.indexOf(desiredNumber)]) 
			break
		}
	}
	return result 
}
console.log(twoNumberSum3([9,1,3,4,5],6)) // [1,5]
console.log(twoNumberSum3([1,2,3,4,5],10)) // [] 

// so they all get the job done, but which one is better?????


