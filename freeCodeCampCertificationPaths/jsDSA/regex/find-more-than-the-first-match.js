/**Find More Than the First Match

So far, you have only been able to extract or search a pattern once.
*/
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
console.log(testStr.match(ourRegex));

/*
Here match would return ["Repeat"].

To search or extract a pattern more than once, you can use the global search flag: g.
*/
let repeatRegex = /Repeat/g;
console.log(testStr.match(repeatRegex));
/*
And here match returns the value ["Repeat", "Repeat", "Repeat"]. Something I didn't note before
is that when you match just 1 you get the entire regex object in our console.log, but when its
with global, you get only an array with the matches, none of the other properties. 

Using the regex starRegex, find and extract both Twinkle words from the string twinkleStar.

Note
You can have multiple flags on your regex like /search/gi */


let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/ig; // Change this line, not that order doesn't matter.
let result = twinkleStar.match(starRegex); // Change this line
console.log(result);