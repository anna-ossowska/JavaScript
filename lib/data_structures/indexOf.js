// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  switch(arr.indexOf(elem)) {
  case -1:
    return false;
  default:
    return true;
  }
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'xx'));
