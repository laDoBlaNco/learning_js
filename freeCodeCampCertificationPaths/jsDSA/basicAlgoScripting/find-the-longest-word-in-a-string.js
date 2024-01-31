/**Find the Longest Word in a String
Return the length of the longest word in the provided sentence.

Your response should be a number. */


function findLongestWordLength(str) {
  let longest=0;
  str = str.split(' ');
  for(const word of str){
    longest = word.length>longest?word.length:longest;
  }
  console.log(longest);
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");