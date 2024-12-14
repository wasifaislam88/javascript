// Map return kore
// forEach return kore na


//map==> loops through each element of the array and do the operation that you passed in the call back function and hold the result from each operation in an array and finally returns you the new array

const numbers = [1,2,3,4,5]

/*
//Without Map
const doubled = []
for (const num of numbers){
    const doubleee = num *2
    doubled.push(doubleee)
}
console.log(doubled)//output: [ 2, 4, 6, 8, 10 ]
console.log(numbers)//output: [ 1, 2, 3, 4, 5 ]
*/
console.log('---------map example part 1----------')


//Map example 1.1
function doubleIt(num){
    console.log('num now', num)//output check korar jonne just test purpuse
    return num * 2
}
const result = numbers.map(doubleIt)// .map(callback-function)
console.log(result)//output: [ 2, 4, 6, 8, 10 ]




//map exapmple 1.2 (map with arrow function)
const double2 = num => num * 2
const result2 = numbers.map(double2)
console.log(result2)//output: [ 2, 4, 6, 8, 10 ]


//map example 1.3 (map with arrow function)
const double3 = numbers.map(num => num * 2)
console.log(double3)//output: [ 2, 4, 6, 8, 10 ]


console.log('--------map exapmle part 2-----------')

const friends = ['Tom', 'John', 'Peter', 'Sam']

//find length of each friend
const length = friends.map(frnd => frnd.length)
console.log(length)//output: [ 3, 4, 5, 3 ]

//find first letter of each friend
const firstLetter = friends.map(frnd => frnd[0])
console.log(firstLetter)//output: [ 'T', 'J', 'P', 'S' ]


console.log('--------map exapmle part 3-----------')

//find brand name
const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 5000, brand: 'iphone', color: 'green'},
    {name: 'watch', price: 123, brand: 'casio', color: 'gray'},
    {name: 'camera', price: 4300, brand: 'canon', color: 'black'},
]

const brands = products.map(producttt => producttt.brand);
console.log(brands);//output: [ 'lenovo', 'iphone', 'casio', 'canon' ]
