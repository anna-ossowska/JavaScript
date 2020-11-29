// Pig Latin is a way of altering English Words.The rules are as follows:
// If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add "ay" to it.
// If a word begins with a vowel, just add "way" at the end.

function translatePigLatin(str) {
  var newArr = [];
  let letterArr = str.split('');
  let i = 0;
  let n = str.length;
  
  // create an array of all consonants appearing at the beginning of the string
  while (str[i].match(/[^ieaou]/)) {
    newArr.push(str[i]);
    i++;
    // you must break the loop if all the letters are consonants, take the word "rythm" as an example
    if (i === n) {
      break;
    }
  }
  
  // the string does not begin with any consonants
  if (newArr.length === 0) {
    letterArr.push('way');
  // the string consists of consonants only
  } else if (newArr.length === letterArr.length) {
    letterArr.push('ay');
  // the string begins with one or more consonants
  } else {
    letterArr[letterArr.length - 1] = letterArr[letterArr.length - 1] + newArr.join('') + 'ay';
    letterArr.splice(0, newArr.length);
  }
  return letterArr.join('');
}

console.log(translatePigLatin("schwartz")); // should return "artzschway"
console.log(translatePigLatin("california")); // should return "aliforniacay
console.log(translatePigLatin("paragraphs")); // should return "aragraphspay"
console.log(translatePigLatin("glove")); // should return "oveglay"
console.log(translatePigLatin("algorithm")); // should return "algorithmway"
console.log(translatePigLatin("eight")); // should return "eightway"
console.log(translatePigLatin("rhythm")); // should return "rhythmay"