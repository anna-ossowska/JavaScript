// Check if a string(first argument, str) ends with the given target string(second argument, target).
// This challenge can be solved with the.endsWith() method, which was introduced in ES2015.
// But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.

// Slice method 1:
function confirmEnding1(str, target) {
  return str.slice(str.length - target.length) === target;
}

// Slice method 2:
function confirmEnding2(str, target) {
  return str.slice(-target.length) === target;
}

// Regex
function confirmEnding3(str, target) {
  let pattern = new RegExp(target + '$', 'i');
  return pattern.test(str);
}

console.log(confirmEnding1("Bastian", "kian"));
console.log(confirmEnding2("Congratulation", "n"));
console.log(confirmEnding3("He has to give me a new name", "name"));