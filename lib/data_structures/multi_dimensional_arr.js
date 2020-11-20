// We have defined a variable, myNestedArray, set equal to an array.
// Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements,
// so that it has exactly five levels of depth (remember, the outer - most array is level 1).
// Somewhere on the third level, include the string 'deep', on the fourth level, include the string 'deeper',
// and on the fifth level, include the string 'deepest'.


let myNestedArray = [ // 1st level
  ['unshift', false, 1, 2, 3, 'complex', 'nested'], // 2nd
  [
    ['deep', 'loop', 'shift', 6, 7, 1000, 'method'], ['concat', false, true, 'spread', 'array'] // 3rd
  ],
  [
    [
      ['deeper', 'mutate', 1327.98, 'splice', 'slice', 'push'], // 4th
    ],
    [
      [
        ['deepest', 'iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'] // 5th
      ]
    ]
  ]
];

console.log(myNestedArray[2][1][0][0][0]);