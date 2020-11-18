// In regular expressions, a greedy match finds the longest possible part of a string that fits the regex pattern and returns it as a match.
// The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern.

// Fix the regex /<.*> / to return the HTML tag <h1> and not the text "<h1>Winter is coming</h1> ".
// Remember the wildcard . in a regular expression matches any character.

let text = "<h1>Winter is coming</h1>";
let myRegex = /<.*?>/g; // Change this line
let result = text.match(myRegex);


console.log(result);