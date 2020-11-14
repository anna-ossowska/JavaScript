// Create a function called randomRange that takes a range myMin and myMax and returns a random whole number
// that's greater than or equal to myMin, and is less than or equal to myMax, inclusive.

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

console.log(randomRange(2, 5));

// Explanation:

// Step 1:
// We expect to generate the following numbers: 2, 3, 4, 5
// In total it gives us 4
// myMin = 2; myMax = 4; (myMax - myMin + 1) = 4

// Step 2:
// Math.floor(Math.random() * 10) this line will generate random number from 0 to 9 (see random_whole_nr.js)
// Math.floor(Math.random() * (myMax - myMin + 1)) this line will generate random number from 0 to 3
// what we have: 0, 1, 2, 3
// what we want: 2, 3, 4, 5

// Step 3:
// By adding myMin (myMin = 2) at the end of the formula, we shift numbers over to the ones we want
// Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;