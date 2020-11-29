// Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing(before).
// Third argument is what you will be replacing the second argument with (after).
// Preserve the case of the first character in the original word when you are replacing it. 

function myReplace(str, before, after) {
  // split sentence into array of words
  let wordArr = str.split(' ');
  let wordIndex;
  
  // iterate over the array of words
  wordArr.forEach((element) => {
    // find the index of word which is going to be replaced
    if (element === before) {
      wordIndex = wordArr.indexOf(element);
    }
  });
  
  // if the first letter of word which is going to be replaced is a capital letter
  if (before[0].match(/[A-Z]/)) {
    // asign the word to the second one
    before = after;
    // change the first letter into the capital letter and append the rest of letters
    before = before[0].toUpperCase() + before.slice(1, before.length);
    // else asign it to the second word and get rid of any capital letters
  } else {
    before = after.toLowerCase();
  }

  // insert the formatted word directly into an array
  wordArr[wordIndex] = before;
  return wordArr.join(' ');
}


console.log(myReplace("Let us go to the store", "store", "mall")); // should return "Let us go to the mall"
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting")); // should return "He is Sitting on the couch"
console.log(myReplace("I think we should look up there", "up", "Down")); // should return "I think we should look down there"
console.log(myReplace("This has a spellngi error", "spellngi", "spelling")); // should return "This has a spelling error"
console.log(myReplace("His name is Tom", "Tom", "john")); // should return "His name is John
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms")); // should return "Let us get back to more Algorithms"