/** 
 * Title Case a Sentence
Return the provided string with the first letter of each word capitalized. Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like the and of.


*/


function titleCase(str) {
  let res = str.split(' ');
  for(let word in res){
    res[word] = res[word][0].toUpperCase()+res[word].slice(1).toLowerCase();
  }
  
  console.log(res.join(' '));
  return res.join(' ');
}

titleCase("I'm a little tea pot");

