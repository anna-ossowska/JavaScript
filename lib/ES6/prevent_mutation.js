// Freeze the MATH_CONSTANTS object so that no one is able to alter the value of PI, add, or delete properties.

function freezeObj() {
  'use strict';
  const MATH_CONSTANTS = {
    PI: 3.14
  };

  Object.freeze(MATH_CONSTANTS);
  
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (error) {
    console.log(error);
  }
  return MATH_CONSTANTS.PI;
}
// eslint-disable-next-line no-unused-vars
const PI = console.log(freezeObj());