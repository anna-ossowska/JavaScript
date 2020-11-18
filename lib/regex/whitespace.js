// Rememebr that \s pattern matches not only whitespace, but also carriage return, tab, form feed, and new line characters.
// You can think of it as similar to the character class [\r\t\f\n\v].

// Change the regex countWhiteSpace to look for multiple whitespace characters in a string.

let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g;
let result = sample.match(countWhiteSpace);

console.log(result);