function steamrollArray(arr) {
  return arr
    .toString()
    .replace(',,',',')
    .split(',')
    .map((item) => {
      if (item == "[object Object]") {
        return {};
      } else if (isNaN(item)) {
        return item;
      } else {
        return Number(item);
      }
    });
}

console.log(steamrollArray([[0, 1], [2, 3], [4, 5]]));
console.log(steamrollArray([[["a"]], [["b"]]])); // should return ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // should return [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // should return [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // should return [1, {}, 3, 4]