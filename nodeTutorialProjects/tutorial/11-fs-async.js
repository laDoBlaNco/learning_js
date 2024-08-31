// Now we are looking at the async functions which are the same names but without
// the 'sync' on the end. We again use destructuring to pull out what we want.
const { readFile, writeFile } = require('fs');

// with async we need to use callbacks. Which are functions that will run when we 
// are done. When a functionality is complete then the callback runs. Like an eventlistener
// for example. 
readFile('./content/first.txt','utf8',(err,result)=>{
  if(err){
    console.log(err)
    return
  }
  const first = result;
  readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
      console.log(err)
      return
    }
    const second = result
    writeFile('./content/result-sync.txt',
      `Here is the result: ${first}, ${second}`,
      (err,result)=>{
        if(err){
          console.log(err)
          return
        }
        console.log(result)
      }
    )
  })
})