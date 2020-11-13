// Write a recursive function, sum(arr, n), that returns the sum of the first n elements of an array arr.

function sum(arr, n) {
  if (n <= 0) {
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n -1];
  }
}

var myArr = [2, 3, 4, 5, 6, 7, 8];
console.log(sum(myArr, 3));