// We've defined a function countOnline which accepts one argument (a users object).
// Use a for...in statement within this function to loop through the users object passed into the function
// and return the number of users whose online property is set to true.

function countOnline(usersObj) {
  let num = 0;
  for (let user in usersObj) {
    if (usersObj[user]['online'] == true) {
      num++;
    }
  }
  return num;
}

let users = {
  Alan: {
    online: true
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
};

console.log(countOnline(users));