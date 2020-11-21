let arrNum = [1, 2, 6];
let max = arrNum.reduce(function(a, b) {
  return Math.max(a, b);
});

console.log(max);