// Write a regex fccRegex to match "IgnoreCase", no matter its case.
// Your regex should not match any abbreviations or variations with spaces.

let myString = "IgnoreCase";
let fccRegex = /ignorecase/i;
let result = fccRegex.test(myString);

console.log(result);