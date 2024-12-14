// for of => array and string => ES6
// for in => object => ES5


console.log('---------------- for of loop ---------------------')
const numbers = [1, 2, 3, 4, 5]
for (const num of numbers) {
    console.log(num)
}
/*
1
2
3
4
5

*/

const name = 'John Doe Name'
for (const letter of name){
    console.log(letter)
}
/*
J
o
h
n
 
D
o
e
 
N
a
m
e
*/

console.log('---------------- for in loop ---------------------')

const user = {
    name: 'John Doe',
     age: 30,
     location: {
         country: 'USA',
         city: 'New York'
     }
}

for (const key in user) {
    console.log(key) // output: name, age, location  
}

for (const key in user) {
    // const value = user[key]
    // console.log(value)
    // OR
    console.log( user[key] ) 
}
/*
John Doe
30
{ country: 'USA', city: 'New York' }
*/