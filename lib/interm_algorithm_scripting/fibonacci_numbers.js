// // Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
// // The first two numbers in the Fibonacci sequence are 1 and 1.
// Every additional number in the sequence is the sum of the two previous numbers.
// // The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
// // For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.

// create an array of 'this' Fibonacci numbers
Number.prototype.makeFibonacci = function () {
  let newArr = [1, 1];
  for (let i = 2; i < this; i++) {
    newArr.push(newArr[i - 1] + newArr[i - 2]);
  }
  return newArr;
};

function sumFibs(num) {
  // if 1 passed as argument, we don't want to perform any calculations
  if (num === 1) {
    return num;
  } else {
    // create an array of num Fibonacci numbers
    let arrFibonacci = num.makeFibonacci();
    
    // find numbers which are less than or equal to num and odd
    let oddNumbers = arrFibonacci.filter((element) => element <= num && element % 2 !== 0);

    // return the sum of of those numbers
    return oddNumbers.reduce((sum, element) => sum + element);
  }
}

console.log(sumFibs(1)); // should return a number
console.log(sumFibs(10)); // should return 1785
console.log(sumFibs(4000000)); // should return 4613732
console.log(sumFibs(75024)); // should return 60696
console.log(sumFibs(75025)); // should return 135721