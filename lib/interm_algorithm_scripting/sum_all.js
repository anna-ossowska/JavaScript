// We'll pass you an array of two numbers.
// Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
  // make sure you always manipulate array elements in the ascending order
  (arr[0] < arr[1]) ? arr : arr.reverse();
  let firstNum = arr[0];
  let secondNum = arr[1];
  let newItem = 0;
  const newArr = [firstNum];
  
  while (newItem < secondNum) {
    newItem = firstNum + 1;
    newArr.push(newItem);
    firstNum++;
  }
  return newArr.reduce((sum, item) => sum + item);
}

console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));