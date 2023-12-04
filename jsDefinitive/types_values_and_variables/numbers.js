/**
 * JS primary numeric type is 'Number' and used to represent exact integers and approx real numbers
 * The js number format allows us to exactly represent all integers between -9,007,199,254,740,992(-2**53)
 * and 9,007,199,254,740,992(2**53) inclusive. Integers larger than that may lose precision.
 *
 * There are certain things in JS that use 32bit integers, such as array indexing and bit-wise operations. When
 * a number appears directly in a JavaScript program, it's called a numeric literal. Let's look at some
 * examples of literals.
 */

// integer literals - 
// Base-10 integer is written as a sequence of digits, normal

console.log('base-10:', 0, 3, 10000000);

// Base-16 (hexidecimal) literals start with 0x or 0X then 0 to 9 or A to F
console.log('base-16:', 0xff, 0xbadcafe);

// Base-2 and Base-8 using the prefixes 0b and 0o
console.log('base-2:', 0b10101); // (1*16 + 0*8 + 1*4 + 0*2 + 1*1) 
console.log('base-8:', 0o377); // (3*64 + 7*8 + 7*1) 
console.log();

// Floating point literals use decimal points for real numbers
console.log('Floating Point:');
console.log(3.14);
console.log(2345.6789);
console.log(.333333333333);
console.log(6.02e23);
console.log(1.4738223e-32);
console.log();
// We can also use the _ as a separator as in other 
console.log(1_000_000_000); // this may or nmay not be used in all browsers

// Math in JS works like most other languages. This includes +, -, *, / and % for modulo.
// Also just like python we have ** for exponentiation. We'll dig into this more in chap 4

// In addition to these basic operators, JS supports more complex mathematical operations
// through a set of functions and constants defined as properties of the Math object:
console.log('Arithmetic in JavaScript:');
console.log('power of 2 to 53:', Math.pow(2, 53));
console.log('round:', Math.round(.6), Math.round(.5), Math.round(.4));
console.log('ceiling:', Math.ceil(.6));
console.log('floor:', Math.floor(.6));
console.log('absolute:', Math.abs(-5));
console.log('max:', Math.max(3, 9, 5));
console.log('min:', Math.min(3, 9, 5));
console.log('random:', Math.random());
console.log('PI:', Math.PI);
console.log('E:', Math.E);
console.log('square root:', Math.sqrt(3));
console.log('cube root of 3:', Math.pow(3, 1 / 3));
console.log('Trig cosine:', Math.sin(0));
console.log('Logarithm_10:', Math.log(10));
console.log('Base 10 logarithm of 100:', Math.log(100) / Math.LN10);
console.log('Base 2 logarithm of 512:', Math.log(512) / Math.LN2);
console.log('Math.E cubed:', Math.exp(3));
console.log();

// ES6 defines more functions for the Math object:
console.log('ES6 Functions Added on Math Object:');
console.log('cube root:', Math.cbrt(27));
console.log('Square root of sum of squares:', Math.hypot(3, 4));
console.log('Base-10 Logarithm:', Math.log10(100));
console.log('Base-2 Logarithm', Math.log2(1024));
console.log('Natural Log of (1+x):', Math.log1p(10));
console.log('The inverse of .log1p:', Math.expm1(2.3978952727983707));
console.log('Sign of:', Math.sign(-5));
console.log('Optimized multiplcation of 32-bit integers:', Math.imul(2, 3));
console.log('Number of leading zero bits in a 32-bit integer:', Math.clz32(0xf));
console.log('Convert to an integer by truncating fractional part:', Math.trunc(3.9));
console.log('Round to nearest 32-bit float number:', Math.fround(74.5555));
console.log('Hyperbolic Sine:', Math.sinh(4));
console.log('Hyperbolic Arcsine:', Math.asinh(3));

// JS math doesn't raise errors for overflow, underflow or division by Zero:
console.log();
console.log('Math that does not throw errors:');
console.log();
console.log('INFINITY:');
console.log(Infinity);
console.log(Number.POSITIVE_INFINITY);
console.log(1 / 0);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE * 2);
console.log();
console.log('-INFINITY:');
console.log(-Infinity);
console.log(Number.NEGATIVE_INFINITY);
console.log(-1 / 0);
console.log(-Number.MAX_VALUE);
console.log(-Number.MAX_VALUE * 2);
console.log();
console.log('NaN:');
console.log(NaN);
console.log(Number.NaN);
console.log(0 / 0);
console.log(Infinity / Infinity);
console.log();
console.log('UNDERFLOW:');
console.log(Number.MIN_VALUE);
console.log(Number.MIN_VALUE / 2);
console.log(-1 / Infinity);
console.log(-0);
console.log();

// NaN and Negative Zero have a peculiar behavior. 
console.log('Using NaN:')
console.log('NaN compared to itself:', NaN === NaN);
console.log('isNan("yes")', isNaN('yes'));
console.log('Can be converted to a finite number (not NaN or Infinity):', isFinite(135));

console.log();
console.log('Working with -0:');
let zero = 0;
let negz = -0;
console.log('0 === -0:', zero === negz);
console.log('1/zero === 1/negz:', 1 / zero === 1 / negz);





