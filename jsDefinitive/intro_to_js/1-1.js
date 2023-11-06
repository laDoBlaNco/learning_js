let primes = [2, 3, 5, 7];
console.log(primes[primes.length - 1]);

console.log(primes[0] + primes[1])

function fact(x) {
  if (x > 1) return x * fact(x - 1);
  else return 1;
}

console.log(fact(4));
console.log(fact(5));
console.log(fact(6));
