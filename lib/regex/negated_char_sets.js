// You can create a set of characters that you do not want to match.
// These types of character sets are called negated character sets.

// Create a single regex that matches all characters that are not a number or a vowel.
// Remember to include the appropriate flags in the regex.

let quoteSample = "3 blind mice.";
let myRegex = /[^ieaou0-9]/gi; // Change this line
let result = quoteSample.match(myRegex); // Change this line

console.log(result);