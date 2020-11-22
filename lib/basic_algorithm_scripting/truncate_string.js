// Truncate a string(first argument) if it is longer than the given maximum string length(second argument).
// Return the truncated string with a ...ending.

function truncateString(str, num) {
  if (num >= str.length) {
    return str;
  } else {
    let arr = str.split('');
    arr.splice(num, arr.length - num);
    return arr.join('').concat('...');
  }
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 43));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2));
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));