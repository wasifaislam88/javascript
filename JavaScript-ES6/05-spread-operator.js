// The spread operator in JavaScript (...) allows you to expand an iterable (like an array, string, or object) into individual elements. It can be used in several contexts like function calls, array manipulation, and object copying.

const max = Math.max(6,23,45,1,89,23)
console.log(max)// output: 89






const numbers = [3,5,2,45,5,43,90,32,15]
const arrayMax = Math.max(numbers)
console.log(numbers) // output: [3,5,2,45,5,43,90,32,15]
console.log(...numbers) // output: 3 5 2 45 5 43 90 32 15
console.log(arrayMax)// output: NaN

//NOTE: array er value theke max value ber korte hole spread operator use korte hobe
const arrayMax2 = Math.max(...numbers)
console.log( arrayMax2 ) // output: 90

console.log('-----------------')

//NOTE: spread operator use kore array er value gula ke alada alada kore ber kora jay and max min ber kora jai.
const numbers2 = [3,5,2,45,5,43,90,32,15]
console.log(...numbers2) // output: 3 5 2 45 5 43 90 32 15



console.log('------------Important Notes for spread -------------------')
//important
//COMMENT: non-premative (array , object)  akta jokhon arektar man set kore tokhon referance dhore rakhe. that menas jekono akta array er value change korle arektar value o change hoye jay. but premative (string, number) er khetre akta jokhon arektar man set kore tokhon referance dhore rakhe na. that means akta string er value change korle arektar value change hoy na.
//COMMENT: num1 er value num2 te set korar por num2 er akta value change korle num1 er value chenge hoye jai. amne memory er same jaiga te thake
//COMMENT: ei problem solve korar jonno spread operator use korte hobe
const num1 = [1,2,3,4,5]
const num2 = num1
num2.push(12)
console.log(num1) // output: [ 1, 2, 3, 4, 5, 12 ]// num 1 e 12 na rakhte chaile ja korte hobe seta next example e dekha jabe
console.log(num2) // output: [ 1, 2, 3, 4, 5, 12 ]

console.log('---solution---')

const mainArr = [1,2,3]
const secondArr = mainArr
// const thirdArr = [...secondArr]  //ekhane coppy korchi, ekhane coppy er por extra value add kora jai, jeta next line e hello and 100 add korechi example hisebe
const thirdArr = [...secondArr , 'hello', 100]//ekhane coppy korchi and extra value add korechi. chaile only coppy o kora jai
thirdArr.push('john99')
console.log(mainArr)// output: [ 1, 2, 3 ]
console.log(secondArr)// output: [ 1, 2, 3 ]
console.log(thirdArr)// output: [ 1, 2, 3, 'hello', 100, 'john99' ]

console.log('---------------------- spread in array----------------------')

//combine array
// You can combine arrays easily with the spread operator.
const arr1 = [1, 2];
const arr2 = [3, 4];
const combined = [...arr1, ...arr2];
console.log(arr1)// output: [ 1, 2 ]
console.log(arr2)// output: [ 3, 4 ]
console.log(combined); // Output: [1, 2, 3, 4]


//Copying Arrays
// The spread operator is a quick way to create a shallow copy of an array.
const original = [1, 2, 3];
const copy = [...original];
console.log(copy); // Output: [1, 2, 3]


//Expanding Arrays
// You can use the spread operator to expand an array into individual elements.
const number1 = [1, 2, 3];
console.log(...number1); // Output: 1 2 3
const newNumber1 = [...number1, 4, 5];
console.log(newNumber1); // Output: [1, 2, 3, 4, 5]



console.log('------------ spread in objectr -------------------')
// Spreading Objects
// You can also use the spread operator to copy or merge objects.
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3 };
const merged = { ...obj1, ...obj2 };
console.log(merged); // Output: { a: 1, b: 2, c: 3 }

// Function Arguments
// he spread operator can be used to pass elements of an array as arguments to a function.
const number2 = [1, 2, 3];
const add = (x, y, z) => x + y + z;

console.log(add(...number2)); // Output: 6

//  Rest Parameter
// In function definitions, the spread operator can be used as a rest parameter to collect multiple arguments into an array.
const sum = (...args) => args.reduce((total, current) => total + current, 0);
console.log(sum(1, 2, 3, 4)); // Output: 10


