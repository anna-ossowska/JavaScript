// Define a function called countup with one parameter(n).
// The function should use recursion to return an array containing the integers 1 through n based on the n parameter.
// If the function is called with a number less than 1, the function should return an empty array.
// For example, calling this function with n = 5 should return the array [1, 2, 3, 4, 5].
// The function must use recursion by calling itself and must not use loops of any kind.

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    var arr = countup(n - 1);
    arr.push(n);
    return arr;
  }
}

console.log(countup(5));