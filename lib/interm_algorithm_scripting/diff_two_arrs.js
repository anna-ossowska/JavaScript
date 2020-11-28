// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both.
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((element) => arr1.indexOf(element) === -1 || arr2.indexOf(element) === -1 );
}

console.log(
  diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 5]), // [6, 4]
  diffArray([], ["snuffleupagus", "cookie monster", "elmo"]), // should return an array with three items
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"])); // ["pink wool"]
