// Return the lowest index at which a value(second argument) should be inserted into an array(first argument) once it has been sorted.
// The returned value should be a number.

// For example, getIndexToIns([1, 2, 3, 4], 1.5) should return 1 because it is greater than 1(index 0), but less than 2(index 1).

// Likewise, getIndexToIns([20, 3, 5], 19) should return 2 because once the array has been sorted it will look like[3, 5, 20]
// and 19 is less than 20(index 2) and greater than 5(index 1).

//Other solutions:
function getIndexToIns1(arr, num) {
  arr.sort((a, b) => a - b);
  var i = 0;
  while (num > arr[i] ) {
    i++;
  }
  return i;
}

function getIndexToIns2(arr, num) {
  return arr.filter((x) => x < num).length;
}

console.log(getIndexToIns1([3, 7, 3, 2], 2)); // should return 0
console.log(getIndexToIns2([20, 3, 5], 19)); // should return 2
console.log(getIndexToIns1([5, 3, 20, 3], 5)); // should return 2
console.log(getIndexToIns2([], 1)); // should return 0