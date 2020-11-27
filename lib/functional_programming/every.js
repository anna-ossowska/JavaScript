// Check if every element in arr is positive. The function should return a Boolean value.

function checkPositive(arr) {
  return arr.every(function(element) {
    return element > 0;
  });
}

console.log(checkPositive([1, 2, 3, -4, 5]));
