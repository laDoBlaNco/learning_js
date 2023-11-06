// unicode chars can be used in strings and comments
// JS allows unicode letters, digits, and ideographs (but not emojis) in
// identfiers. 
const π = 3.14;
const sí = true;

// js also gives support to programmers and system using older tech
// js defines escape sequences that alow us to write Unicode chars using
// ASCII chars.  These Unicode escapes may appear in js string literals,
// regular expressions, and identifiers (but not in language keywords)
// so for example can write é
let café = 1;  // using the unicode character
console.log(caf\u00e9); // access the same var using the escape char
console.log(caf\u{e9}); // another way

// or emojis
console.log('\u{1f600}');

// something to take note of is the normalization of unicode which can cause some 
// confusing issues later on. For example é can be encoded different ways which make
// it different values, though its printed the same
const Andr\u{e9} = 1;
const Andr\u{301} = 2;
console.log('Andr\u{e9}'); // this is accent over e
console.log('Andre\u{301}'); // this is just the accent added over the e
console.log(André);

// The basic lesson here is that js doesn't do any type of normalization, as it expects
// that its already been done. So if we are comparing unicode chars, we need to 
// normalize first.




