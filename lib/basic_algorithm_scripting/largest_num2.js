// Return an array consisting of the largest number from each provided sub - array.

function largestOfFour(arr) {
  let largestNum = [];
  for (let i = 0; i < arr.length; i++) {
    largestNum.push(Math.max(...arr[i]));
  }
  return largestNum;
}

console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));