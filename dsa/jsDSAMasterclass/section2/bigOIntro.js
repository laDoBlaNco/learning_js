/*
    Big O notation is a way to formalize fuzzy counting 
    It allows us to talk in a very formal way about how the runtim of an algo is impacted by
    the growth of the input.The relationship between the input size and the time it takes to run
    the algo. 
    We don't care about details, just the large trends. 

    Big O Definition: 
    We say that an algorithm is O(f(n)) if the number of simple operations the computer has to do
    is eventually less than a constant times f(n), as n increases. 

    Basically this means that we have options: f(n) just means a function with arg n
    1. f(n) could be linear meaning f(n) = n, meaning as n scales the runtime scales as well
    2. f(n) could be quadratic meaning f(n) = n^2, meaning as n grows the runtime squares
    3. f(n) could be constant meaning f(n) = 1, meaning it doesn't really have an impact at all
    4. f(n) could be something completely different!

    Big O is always the worst case scenario, which means that we simplify it down to removing the
    contants and regardless of the fluctuations of the runtimes, we care of about the worst possible
    performance that could happen. 

*/
// so again this would be considered O(1) though its 3 operations and technically O(3)
function addUpTo(n) {
    return n * (n + 1) / 2;
}
console.log(addUpTo(10))

// this one is O(n) even though it might actually be a O(10n) or O(50n) 
function addUpToVer2(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpToVer2(10))


// Another example here we have we have two loops running, so it would actually be O(2n), but again we 
// simplify to O(n).
function countUpAndDown(n) {
    console.log('Going up!');
    for (let i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("At the top!\nGoing down...");
    for (let j = n - 1; j >= 0; j--) {
        console.log(j);
    }
    console.log("Back down. Bye!");
}
countUpAndDown(50);

// One more example: This would be O(n^2). Nested loops are a red flag that you are dealing with a quadratic
// complexity. Because its nested it can't be O(2n)
function printAllPairs(n) {
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            console.log(i, j);
        }
    }
}
printAllPairs(10)

// so what are the rules for simplifying in Big O
// 1. Constants don't matter O(2n) = O(n); O(500) = O(1); O(13n^2) = O(n^2)
// 2. Smaller terms also don't matter O(n + 10) = O(n); O(1000n + 50) = O(n); O(n^2 + 5n + 8) = O(n^2) 

// There are also some things to keep in mind when analyzing Big O:
// 1. Arithmetic operations are typically constant
// 2. Variable assignment is also constant
// 3. Accessing elements in an array (by index) or object(by key) is constant
// 4. In a loop, the complexity is the length of the loop times the complexity of
//    whatever happens inside that loop. ( O(n) * O(n) or O(n^2)) in a nested loop

// what's the Big O of the following: O(n) as n grows so does the runtime. forget about the 5
function logAtLeast5(n) {
    for (var i = 1; i <= Math.max(5, n); i++) {
        console.log(i);
    }
}

logAtLeast5(3);
logAtLeast5(8);


// and this one: I think this would be O(5) which would be O(1) constant time.
function logAtMost5(n) {
    for (var i = 1; i <= Math.min(5, n); i++) {
        console.log(i);
    }
}

logAtMost5(3);
logAtMost5(8);

