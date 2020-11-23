// Write a function that splits an array(first argument) into groups
// the length of size(second argument) and returns them as a two - dimensional array.

function chunkArrayInGroups(arr, size) {
  const subArr = [];
  // ceil rounds the number up
  for (let i = 0; i < Math.ceil(arr.length / size); i++) {
    subArr.push(arr.slice(size * i, ((i + 1) * size)));
  }
  return subArr;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7], 3)); // should return [[0, 1, 2], [3, 4, 5], [6]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3)); // should return [[0, 1, 2], [3, 4, 5]].
console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2)); //should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].