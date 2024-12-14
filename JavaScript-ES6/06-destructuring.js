//Array and Object Destructuring
/////////////////////////////////////

const actor = {
    name: 'Tom Cruise',
    age: 40,
    phone: '1234567890',
    hobby: 'acting',
    money: 1000000000,
    address: 'Earth'
    
}

/*
console.log(actor.name)// Output: 1234567890
console.log(actor.phone)// Output: 1234567890
console.log(actor.age)// Output: 1234567890

const name1 = actor.name
const phone1 = actor.phone
const age1 = actor.age

console.log(name1) //output: Tom Cruise
console.log(phone1) // Output: 1234567890
console.log(age1) // Output: 40
*/

console.log('-------------------Object Distructuring-----------------')
//if right side is an object left side of destructuring will be object as well
//use property name as a variable that contains the property value
// ekhane {phone} eta object er key/property name. so ekhane phone keywordE use korthe hobe. onno kichu use kora jabe na
const {phone} = actor
console.log(phone)// Output: 1234567890


const {name, age} = actor
console.log(name, age)// Output: Tom Cruise 40

//IMPORTANT:
//key er value ta hobby theke work and money theke taka korechi. variable work and taka te rakha jai evabe
const {address, hobby: work, money: taka} = actor
console.log(address)// Output: Earth
console.log(work)// Output: acting
console.log(taka)// Output: 1000000000





//example:
//You can destructure nested objects or arrays:
const user = {
    name: 'Alice',
    location: {
      country: 'USA',
      city: 'New York'
    }
  };
  
  const { location: { country, city } } = user;
  console.log(country); // USA
  console.log(city);    // New York
  




console.log('-------------------Array Distructuring-----------------')
//example (1)
const numbers = [1, 2, 3, 4, 5]
const [first, second] = numbers
console.log( first, second)// Output: 1 2
//first and second variable e first and second element of numbers array assign hobe. that means 1 and 2 assign hobe only

//example: (2) chaile kono element skip kora jai
numbers2 = [11,22,33,44,55]
const [first1,  ,  , fourth1] = numbers2
console.log( first1, fourth1)// Output: 11 44


//example (3) double
function doubleThem(a,b){
    return [a*2, b*2]
}
const [prothom, ditiyo] = doubleThem(3,5)
console.log(prothom, ditiyo)


//example (4) swap
let num1 = 1
let num2 = 2;//here must use ; semicolen
[num1, num2] = [num2, num1]
console.log(num1)
console.log(num2)





//example: (5) Destructuring with Rest Operator
//You can use the rest operator (...) to collect the remaining items into a separate array:
const number3 = [1, 2, 3, 4, 5];
const [first2, second2, ...rest] = number3;

console.log(first2);  // 1
console.log(second2); // 2
console.log(rest);   // [3, 4, 5]



// example (6) Nested Destructuring
// If you have nested arrays, you can use nested destructuring to extract values:
const nestedArray = [1, [2, 3], 4];
const [first4, [second4, third4], fourth4] = nestedArray;

console.log(first4);  // 1
console.log(second4); // 2
console.log(third4);  // 3
console.log(fourth4); // 4
