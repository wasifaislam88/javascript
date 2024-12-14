//for of loop
//NOTE: loop and string er all value print korear jonno use hoy

/*
The for...of loop is a type of loop in JavaScript that allows you to iterate over the values of an iterable object, such as an array, a string, or a Map.

Here is an example of using a for...of loop to iterate over an array:
*/

console.log('********** for of loop ****2******');

const fruits = ['apple', 'banana', 'orange'];

for (const fruit of fruits) {
    console.log(fruit);
}
/*
output:
apple
banana
orange
*/

console.log('********** for of loop ****2******');


const str = 'hello';

for (const char of str) {
  console.log(char);
}

/*
output:
h
e       
l       
l       
o       
*/


console.log('********** for of loop ****2******');
const map = new Map([
    ['name', 'John'],
    ['age', 30],
    ['city', 'New York']
  ]);
  
  for (const [key, value] of map) {
    console.log(`${key}: ${value}`);
  }


/*
output:

name: John
age: 30
city: New York

*/