// Flatten a nested array.You must account for varying levels of nesting.
// Your solution should not use the Array.prototype.flat() or Array.prototype.flatMap() methods.

function steamrollArray(arr) {
  let result = [];

  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(steamrollArray(element));
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(steamrollArray([[0, 1], [2, 3], [4, 5]])); 
console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4]