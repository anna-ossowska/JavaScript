// You want to find matches when the letter s occurs one or more times in "Mississippi".

let difficultSpelling = "Mississippi";
let myRegex = /s+/gi; // Change this line
let result = difficultSpelling.match(myRegex);

console.log(result);