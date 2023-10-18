// Here is an example of comparing time complexity in our code. Suppose we want to calculate
// the sum of all numbers from 1 to and including n

function addUpTo2(n) {
    return n * (n + 1) / 2;
}


function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total
}

t1 = performance.now()
addUpTo2(1000000000)
t2 = performance.now()

t3 = performance.now()
addUpTo(1000000000)
t4 = performance.now()


console.log('addUpTo2 takes:', (t2 - t1) / 1000, 'seconds')
console.log('addUpTo takes:', (t4 - t3) / 1000, 'seconds')
// The problem with time. Timing something on a machine isn't reliable. We need a way to document and explain
// the difference
// 1. Different machines will record different times
// 2. The same machine will record different times
// 3. For fast algorithms, speed measurements may not be precise enough
// So how do we  walk through our code and compare it without having to time it? Big O natation.
