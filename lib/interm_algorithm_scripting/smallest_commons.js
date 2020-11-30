// Find the smallest common multiple of the provided parameters that can be evenly divided by both,
// as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible
// by all numbers between 1 and 3. The answer here would be 6.


function smallestCommons(arr) {
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var multiple = 0;
  var multipleFound = false;

  while (multipleFound === false) {
    multiple += max;
    for (var i = min; i < max; i++) {
      if (multiple % i !== 0) {
        multipleFound = false;
        break;
      } else {
        multipleFound = true;
      }
    }
  }
  return multiple;
}

console.log(smallestCommons([1, 5])); // should return a number
console.log(smallestCommons([1, 5])); // should return 60
console.log(smallestCommons([5, 1])); // should return 60
console.log(smallestCommons([2, 10])); // should return 2520
console.log(smallestCommons([1, 13])); // should return 360360
console.log(smallestCommons([23, 18])); //should return 6056820