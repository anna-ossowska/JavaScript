// Return the length of the longest word in the provided sentence.
// Your response should be a number.

function findLongestWordLength(str) {
  var arr = str.split(' ');
  var arrNum = [];
  for (let i = 0; i < arr.length; i++) {
    arrNum.push(arr[i].length);
  }
  return arrNum.reduce((a, b) => Math.max(a, b));
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));