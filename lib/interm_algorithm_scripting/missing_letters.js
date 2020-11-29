// Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let searchArr = str.split('');
  let mainArr = "abcdefghijklmnopqrstuvwxyz".split('');
  
 
  // find at which index the search starts in the mainArr
  let findStart = mainArr.indexOf(searchArr[0]);
  
  // find at which index the search ends in the mainArr
  let findEnd = mainArr.indexOf(searchArr[searchArr.length - 1]);

  // return the array of elements to compare against the searchArr
  let rightElements = mainArr.slice(findStart, findEnd + 1);

  // find which elements from the searchArr do not appear in the rightElements array
  return str === "abcdefghijklmnopqrstuvwxyz" ? undefined :
    searchArr
      .concat(rightElements)
      .filter((element) => searchArr.indexOf(element) === -1)
      .toString();
}

console.log(fearNotLetter("bcdf")); // should return "e"
console.log(fearNotLetter("abce")); // should return "d"
console.log(fearNotLetter("abcdefghjklmno")); // should return "i"
console.log(fearNotLetter("stvwx")); // should return "u"
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz")); // should return undefined