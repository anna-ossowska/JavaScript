// Finish writing this function so that it returns true only if the users object contains all four names:
// Alan, Jeff, Sarah, and Ryan, as keys, and false otherwise.

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(obj) {
  return ('Alan' in obj && 'Jeff' in obj && 'Sarah' in obj && 'Ryan' in obj) ? true : false;
}

console.log(isEveryoneHere(users));