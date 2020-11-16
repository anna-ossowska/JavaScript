"use strict";

let printNumTwo;
for (let i = 0; i < 3; i++) {
  printNumTwo = function() {
    return i;
  };
}

console.log(printNumTwo());
// returns 2
// function returned the correct value because three different i variables with unique values (0, 1, and 2)
// were created by the let keyword within the loop statement.

console.log(i);
// throws ReferenceError: "i is not defined"
// i is not defined because it was not declared in the global scope. It is only declared within the for loop statement.