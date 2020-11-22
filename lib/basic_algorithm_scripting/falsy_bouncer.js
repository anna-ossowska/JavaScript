/* eslint-disable no-extra-boolean-cast */
// Remove all falsy values from an array.
// Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.
// Hint: Try converting each value to a Boolean.

function bouncer(arr) {
  let truthy = [];
  for(let i = 0; i < arr.length; i++) {
    // Alternative: (Boolean(arr[i]))
    // To cast your JS variables to boolean, simply use two exclamation marks:
    if (!!(arr[i])) {
      truthy.push(arr[i]);
    }
  }
  return truthy;
}

console.log(bouncer([7, "ate", "", false, 9]));