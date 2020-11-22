// Create a function that looks through an array arr and returns the first element in it that passes a 'truth test'.
// This means that given an element x, the 'truth test' is passed if func(x) is true.
// If no element passes the test, return undefined.

// The filter() method creates a new array with all elements that pass the test
function findElement1(arr, func) {
  return arr.filter(func)[0];
}

// The find() method returns the value of the first element in the provided array that satisfies the provided testing function.
function findElement2(arr, func) {
  return arr.find(func);
}

console.log(findElement1([1, 2, 3, 4, 6], num => num % 2 === 0));
console.log(findElement2([1, 2, 3, 4, 6], num => num % 2 === 0));