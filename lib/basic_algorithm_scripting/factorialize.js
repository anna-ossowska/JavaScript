// Factorials are often represented with the shorthand notation n!
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
// Only integers greater than or equal to zero will be supplied to the function.

function factorialize(num) {
  let arr = [];
  let factorial = 1;
  for (let i = 1; i <= num; i++) {
    arr.push(i);
  }
  for (let j = 0; j < arr.length; j++) {
    factorial *= arr[j];
  }
  return factorial;
}

console.log(factorialize(5));
