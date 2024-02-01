/**Truncate a String
Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.

 */


function truncateString(str, num) {

  console.log(str.slice(0,num)+'...')
  if(str.length>num)return str.slice(0,num)+'...';
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length);