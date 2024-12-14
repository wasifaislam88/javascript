const a = 10;
const b = 20;
// const result = 'The sum of ' + a + ' and ' + b + ' is ' + (a + b);
//OR
const result = `The sum of ${a} and ${b} is ${a + b}`
console.log(result)

console.log('--------------------------------')

const paragraph1 = "hello" + "\n" + "world"
console.log(paragraph1)
/*
hello
world
*/
//OR 

const paragraph2 = `hello \nworld`
console.log(paragraph2)
/*
hello
world
*/
//OR

const paragraph3 = `hello
world`
console.log(paragraph3)
/*
hello
world
*/

console.log('--------------------------------')


const numbers = [1, 2, 3, 4, 5]
const result1 = `The sum of ${numbers[0]} and ${numbers[1]} is ${numbers[0] + numbers[1]}`;
console.log(result1)//Output: The sum of 1 and 2 is 3



const student = {name: 'John', age: 20}
const result2 = `My name is ${student.name} and I am ${student.age} years old.`;
console.log(result2)//Output: My name is John and I am 20 years old.