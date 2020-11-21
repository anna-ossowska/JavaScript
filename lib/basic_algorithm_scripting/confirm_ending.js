// Check if a string(first argument, str) ends with the given target string(second argument, target).
// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

function confirmEnding(str, target) {
  let indexStart = str.length - target.length;
  let indexEnd = str.length - 1;

  if (target.length > 1) {
    return (str.substring(indexStart, indexEnd + 1) === target) ? true : false;
  } else if (target.length === 1) {
    return (str[indexEnd] === target) ? true : false;
  } else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "kian"));
console.log(confirmEnding("Congratulation", "n"));
console.log(confirmEnding("He has to give me a new name", "name"));