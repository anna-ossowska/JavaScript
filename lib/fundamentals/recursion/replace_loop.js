// Multiply the first n elements of an array to create the product of those elements using a recursion.

function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}

var myArr = [2, 3, 4, 5, 6];
console.log(multiply(myArr, 4));

// Explanation:
// multiply(arr, n) == multiply(arr, n - 1) * arr[n - 1]
// multiply([2, 3, 4, 5, 6], 1) === multiply([2, 3, 4, 5, 6], 0) * arr[0]

// When we hit the base case (n <= 0), we can start returning, starting from the top because stacks are Last In, First Out.
// The call stack visualization:
// ---top---
// return 1
// multiply([2, 3, 4, 5, 6], 0)) * arr[0]    1 * 2 = 2
// multiply([2, 3, 4, 5, 6], 1)) * arr[1]    2 * 3 = 6
// multiply([2, 3, 4, 5, 6], 2)) * arr[2]    6 * 4 = 24
// multiply([2, 3, 4, 5, 6], 3)) * arr[3]   24 * 5 = 120
// ---bottom---