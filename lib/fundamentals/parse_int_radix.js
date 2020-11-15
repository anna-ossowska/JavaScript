// Create convertToInteger function so it converts a binary number to an integer and returns it.

function convertToInteger(str) {
  return parseInt(str, 2);
}

// 2**4 + 0 + 0 + 2**1 + 2**0 = 19
console.log(convertToInteger("10011"));
