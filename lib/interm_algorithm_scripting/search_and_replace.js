// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing(before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. 

function myReplace(str, before, after) {
  let wordArr = str.split(' ');
  let wordIndex;
  
  wordArr.forEach((element) => {
    if (element === before) {
      wordIndex = wordArr.indexOf(element);
    }
  });

  let searchedWord = wordArr[wordIndex];
  // if first letter of searched word searchedWord[0] is capital letter capitalize, else, just replace
  if (searchedWord[0].match(/[A-Z]/)) {
    searchedWord = after;
    searchedWord = searchedWord[0].toUpperCase() + searchedWord.slice(1, searchedWord.length);
  } else {
    searchedWord = after.toLowerCase();
  }

  wordArr[wordIndex] = searchedWord;
  return wordArr.join(' ');
}


console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch"
console.log(myReplace("I think we should look up there", "up", "Down")); // should return "I think we should look down there"
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error"
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms"