// Use object property shorthand with object literals to create
// and return an object with name, age and gender properties.

const createPerson = (name, age, gender) => ({ name, age, gender });

console.log(createPerson("John", 25, "male"));