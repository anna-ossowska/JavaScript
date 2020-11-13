// This outputs each sub - element in arr one at a time.
// Note that for the inner loop, we are checking the.length of arr[i], since arr[i] is itself an array.

var myArr = [
  [1, 2], [3, 4], [5, 6]
];

for (var i = 0; i < myArr.length; i++) {
  for (var j = 0; j < myArr[i].length; j++) {
    console.log(myArr[i][j]);
  }
}