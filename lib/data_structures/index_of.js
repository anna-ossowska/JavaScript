// Modify the function using indexOf() so that it returns true if the passed element exists on the array, and false if it does not.

function quickCheck(arr, elem) {
  return (arr.indexOf(elem) !== -1) ? true : false;
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'xx'));