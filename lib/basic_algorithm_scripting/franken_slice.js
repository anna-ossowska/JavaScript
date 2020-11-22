// You are given two arrays and an index.
// Copy each element of the first array into the second array, in order.
// Begin inserting elements at index n of the second array.
// Return the resulting array.The input arrays should remain the same after the function runs.

function frankenSplice(arr1, arr2, n) {
  let partOne = arr1;
  let partTwo = arr2.slice(0, n);
  let partThree = arr2.slice(n);
  let result = partTwo.concat(partOne, partThree);
  return result;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));