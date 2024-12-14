/*
filter: condition dewar por condition fulfill korle shei value gulo return kore
find:   condition dewar por condition fulfill korle only first value ta return kore
*/

//IMPORTANT: filter korle array array dibe and find korle first value ta return kore


//In JavaScript, the filter() method creates a new array with all elements that pass a test provided by a function. It doesn’t modify the original array but returns a new one with the filtered elements.

//filter selects elements based on a condition and returns an array with the elements that fulfilled the condition



const players = [75,65,67,72,55,59]


//filter whose player height is more than 70
const selected1 = players.filter(player => player > 70)
console.log(selected1)//OUTPUT: [ 75, 72 ]



//filter whose player height is more than 70
const selected2 = players.filter(p => p > 70)
console.log(selected2)//OUTPUT: [ 75, 72 ]



//filter whose player height is more than 80
const selected3 = players.filter(p => p > 80)
console.log(selected3)//OUTPUT: [ ]



//filter whose player height is odd number
const selected4 = players.filter(p => p % 2 === 0)
console.log(selected4)//OUTPUT: [ 72 ]



console.log('-------------------')

//filter whose name has more than 4 character
const friends = ['Tommy', 'John', 'Peter', 'Sam']
const lengthUp4 = friends.filter(frnd => frnd.length > 4)
console.log(lengthUp4)//output: [ 'Tommy', 'Peter' ]
//filter whose name has odd length
const oddFriends = friends.filter(frnd => frnd.length % 2 !== 0)
console.log(oddFriends)//output: [ 'Tommy', 'Peter', 'Sam' ]




console.log('-------------------------------')


const students = [
    { name: 'Alice', grade: 85 },
    { name: 'Bob', grade: 92 },
    { name: 'Charlie', grade: 78 },
    { name: 'David', grade: 65 }
  ];
  
  // Filter students who passed (grade >= 80)
  const passingStudents = students.filter(student => student.grade >= 80);
  
  console.log(passingStudents);
  // Output: [{ name: 'Alice', grade: 85 }, { name: 'Bob', grade: 92 }]
  