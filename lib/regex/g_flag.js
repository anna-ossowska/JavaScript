// Using the regex starRegex, find and extract both "Twinkle" words from the string twinkleStar.

let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex);

console.log(result);
