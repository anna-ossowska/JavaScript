// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself.
// For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

// prototype function returning a range
Number.prototype.range = function () {
  let start = 0;
  let end = this;
  let numArr = [];
  for (let i = start; i <= end; i++) {
    numArr.push(i);
  }
  return numArr;
};

// prototype function checking if a number is prime
Number.prototype.isPrime = function () {
  for (var i = 2; i < this; i++) {
    if (this % i === 0) {
      return false;
    }
  }
  return this > 1;
};

function sumPrimes(num) {
  // create a range
  let newRange = num.range();
  // find out which numbers are prime
  let primeNums = newRange.filter((element) => element.isPrime());
  // return the sum of all the prime numbers
  return primeNums.reduce((sum, item) => sum + item);
}

console.log(sumPrimes(10)); // should return 17
console.log(sumPrimes(977)); // should return 73156