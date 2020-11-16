// An array is declared as const s = [5, 7, 2].
// Change it to [2, 5, 7] using various element assignments.

const s = [5, 7, 2];
function editInPlace() {
  'use strict';
  s[0] = 5;
  s[1] = 7;
  s[2] = 2;
  return s;
}
console.log(editInPlace());

// it is important to understand that objects (including arrays and functions) assigned to a variable using const are still mutable.
// Using the const declaration only prevents reassignment of the variable identifier.