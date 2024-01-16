/**Restrict Possible Usernames

Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.

You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.

Usernames can only use alphanumeric characters.

The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.

Username letters can be lowercase and uppercase.

Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

Change the regex userCheck to fit the constraints listed above. */


let username = "BadUs3rnam3";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);
console.log(result);

// I had to get help on this one. I was able to get it down to just 1 case pretty easily, but without
// some type of conditional Regex it was going to be impossible to determine if the string was
// 2 or more chars 'then' do something else. I learned we can use '|' and put both regexes
// which is a work-around since there aren't conditional regexes in JS.