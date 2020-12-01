// Create a function that sums two arguments together.
// If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

// It has to add two numbers passed as parameters and return the sum.
// It has to check if any of the numbers are actual numbers, otherwise return undefined and stop the program right there.
// It has to check if it has one or two arguments passed.More are ignored.
// If it has only one argument then it has to return a function that uses that number and expects another one, to then add it.

function addTogether() {
  // create an array of arguments
  let args = [...arguments];
  // create an array of arguments which are integers
  let argsNum = args.filter((item) => Number.isInteger(item) == true);
  // if any of the arguments is not actual number, return undefined and stop the program right there
  if (argsNum.length !== args.length) {
    return undefined;
  }
  
  // if an array contains two integers, add them up
  if (argsNum.length === 2) {
    return args[0] + args[1];
  // if an array contains only one integer, 
  } else if (argsNum.length === 1) {
    // perform the currying (we exepct there is the second argument)
    return function (x) {
      // check if the second argument is an integer; if yes, return the sum of 1st and 2nd argument
      return (Number.isInteger(x) === true) ? args[0] + x : undefined;
    };
  } else {
    return undefined;
  }
}

console.log(addTogether(2, 3)); // should return 5
console.log(addTogether(23, 30)); // should return 53
console.log(addTogether(5)(7)); // should return 12
console.log(addTogether("http://bit.ly/IqT6zt")); // should return undefined
console.log(addTogether(2, "3")); // should return undefined
console.log(addTogether(2)([3])); // should return undefined