// there are two flavors when dealing with file systems.Async and sync. or non-blocking vs blocking.
// again using destructuring here rather than just setting the fs name to use fs.readFileSync
const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('./content/first.txt', 'utf-8');
const second = readFileSync('./content/second.txt', 'utf-8');

console.log(first, second);

writeFileSync('./content/result-sync.txt', `Here is the result ${first}, ${second}`, { flag: 'a' });
