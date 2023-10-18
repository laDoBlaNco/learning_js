// If not time, then what?
// Rather than counting seconds, which are so variable...
// Let's count the number of simple opertions the computer has to perform

function addUpToFirst(n) {
    return n * (n + 1) / 2; // here we have 3 operations (*, +, /) 
    // regardless of what n is, the computer only has 3 ops to do
}

function addUpToSecond(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    // this one has many more operations. we see +, but its in a loop. So depending on what n is, its n
    // operations. = is another operation as well.  We've also got ++ which is another +=, so again all 
    // of this grows (scales) with n
    return total;
}
// When we have so many operations, we generalize rather than counting all the operations
// 5n + 2
// What we care about though is the general trend, not all the details of the actual numbers. 
