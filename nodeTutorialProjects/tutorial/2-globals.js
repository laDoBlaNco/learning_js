// GLOBALS - NO WINDOW!!! In node there is no window since there is no browser.

// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about currnt module (file)
// process    - info about env where the program is being executed

// these aren't all the globals, but we'll see them as we go With the console.log we will see the actual objects. 
console.log(__dirname);
console.log(__filename);
console.log(require);
console.log(module);
console.log(process);

setInterval(() => {
  console.log('hello world');
}, 1000)
