// An algorithm is just like a recipe, in the sense that it will indicate the
// necessary steps that need to be followed in order to achieve our goal. 

// for example here is a rithm to identify if a word is a palindrome or not:
function isPalindrome(word){
	// Step 1 - put a pointer at each extreme of the word
	// Step 2 - Iterate the string "inwards"
	// Step 3 - At each iteration, check if the pointers represent equal values
	// If this condition isn't accomplished, the word isn't a palindrome
	let left = 0
	let right = word.length-1
	
	while(left<right){
		if(word[left] !== word[right]) return false
		left++
		right--
	}
	return true
}

console.log(isPalindrome("neuquen")) // true
console.log(isPalindrome("Buenos Aires")) // true
console.log(isPalindrome("deified")) // true
console.log(isPalindrome("rotator")) // true
console.log(isPalindrome("repaper")) // true

// Same as in a recipe, in this rithm we have steps with a certain purpose that are 
// executed in a given order to achieve the result we want.
// Wikipedia - "An algorithm is a finite sequence of well-defined instructions,
// typically used to solve a class of specific problems or to perform a computation."

