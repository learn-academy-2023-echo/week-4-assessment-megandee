// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

// describe("shuffleContent", () => {
//   it("removes the first item from the array and shuffles the remaining content", () => {
//     const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//     const colors2 = [
//       "chartreuse",
//       "indigo",
//       "periwinkle",
//       "ochre",
//       "aquamarine",
//       "saffron"
//     ]
//     expect(shuffleContent(colors1)).not.toEqual(expect.arrayContaining(expected))
//     expect(shuffleContent(colors2)).not.toEqual(expect.arrayContaining(expected))
//   })
// })

// const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
// const colors2 = [
//   "chartreuse",
//   "indigo",
//   "periwinkle",
//   "ochre",
//   "aquamarine",
//   "saffron"
// ]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
// FAIL  ./code-challenges.test.js
// shuffleContent
//   ✕ removes the first item from the array and shuffles the remaining content
// ● shuffleContent › removes the first item from the array and shuffles the remaining content
//   ReferenceError: shuffleContent is not defined

// Pseudo code:
// input: array
// output: array with first item removed, then shuffles remaining items
// process: 
// iteration is needed, maybe for loop? or maybe .filter() ?
// first remove first item of array, can use .shift() as it removes value at the first index.
// Math.random() arrays index and not the value.


// b) Create the function that makes the test pass.

// const shuffleContent = (array) => {
//   let newArr = []
//   for ( let i=0; i < array.length; i++){
//     newArr.shift(array[i].Math.random())
//   }
//   return newArr
// }

// console.log(shuffleContent(colors1, colors2))

// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

// describe("endTally", () => {
//   it("takes in an object that contains up votes and down votes and returns the end tally", () => {
//     const votes1 = { upVotes: 13, downVotes: 2 }
//     const votes2 = { upVotes: 2, downVotes: 33 }
//     expect(endTally(votes1)).toEqual("11")
//     expect(endTally(votes2)).toEqual("-31")
//   })
// })

// const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
// const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// FAIL  ./code-challenges.test.js
// endTally
//   ✕ takes in an object that contains up votes and down votes and returns the end tally (1 ms)
// ● endTally › takes in an object that contains up votes and down votes and returns the end tally
// ReferenceError: endTally is not defined

// Pseudo code:
// input: object, 2 key:value pairs
// output: end tally
// process: subtract the value of the keys
        // dot notation can call on value
        // can it subtract though?
        // going deeper into classes.. maybe use a constructor
        // am I overthinking this?

// b) Create the function that makes the test pass.

// const votes1 = { upVotes: 13, downVotes: 2 }
// const votes2 = { upVotes: 2, downVotes: 33 }

// const endTally = () => {

// }

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

// describe("noDupes", () => {
//   it("returns one array with no duplicate values", () => {
//     const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
//     const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
//     expect(noDupes(dataTypesArray1)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//     expect(noDupes(dataTypesArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
//   })
// })
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// FAIL  ./code-challenges.test.js
// noDupes
//   ✕ returns one array with no duplicate values (1 ms)
// ● noDupes › returns one array with no duplicate values
// ReferenceError: noDupes is not defined

// Pseudo code:
// input: 2 arrays
// output: 1 array
// process: iteration to go through arrays
// .filter() will filter through and return a subset, 
// logical operator 
// concat would join but stretch wants spread ...

// const noDupes = (arr1, arr2) => {
  // when using the .concat() I recieve and undefined w/the console
  //  let newArr = arr1.concat(arr2)
   // when attempting the spread I receive newArr is not defined
  // let combined = [...arr1, ...arr2] 
//   let output = []
//   output = newArr.filter((value) =>{
//   return output 
//   })
// }
// console.log(noDupes(dataTypesArray1, dataTypesArray2))

// b) Create the function that makes the test pass.

// const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
// const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]