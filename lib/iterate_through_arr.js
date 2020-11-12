// Declare and initialize a variable total to 0.
// Use a for loop to add the value of each element of the myArr array to total.

var myArr = [2, 3, 4, 5, 6];
var total = 0;

for (var i = 0; i < myArr.length; i++) {
  console.log(total += myArr[i]);
}