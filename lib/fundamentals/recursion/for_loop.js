// Multiply the first n elements of an array to create the product of those elements using a for loop.

function multiply(arr, n) {
  var product = 1;
  for (var i = 0; i < n; i++) {
    product *= arr[i];
  }
  return product;
}

var myArr = [2, 3, 4, 5, 6];
console.log(multiply(myArr, 4));