const os = require('os'); // NOTE since this is a built-in module, there's no need to use './'
// if we know we want specifics methods and properties, we can use destructuring here to pull them out alone

// info about current user
const user = os.userInfo();
console.log(user);

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds.`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
}

console.log(currentOS);
