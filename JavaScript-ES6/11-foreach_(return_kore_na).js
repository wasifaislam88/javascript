// Map return kore
// forEach return kore na


 


const numbers = [1, 2, 3, 4, 5]


const result1 = numbers.forEach(num => num * 2)
console.log(result1)//undefined
//result1 undefine karon forEach return kore na




const result2 = numbers.forEach(num => {
    //multi line expreassion
})
//multiline expreassion evabe use kora jai




const result3 = numbers.forEach(num => console.log(num * 2))
/*
output
2
4
6
8
10
*/
console.log(result3)//undefined
//result3 undefine but first line e console.log kaz korbe 2 4 6 8 10







const products = [
    {name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver'},
    {name: 'phone', price: 5000, brand: 'iphone', color: 'green'},
    {name: 'watch', price: 123, brand: 'casio', color: 'gray'},
    {name: 'camera', price: 4300, brand: 'canon', color: 'black'},
]

products.forEach(productttt=>console.log(productttt));
/*
{ name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' }
{ name: 'phone', price: 5000, brand: 'iphone', color: 'green' }
{ name: 'watch', price: 123, brand: 'casio', color: 'gray' }
{ name: 'camera', price: 4300, brand: 'canon', color: 'black' }
*/
products.forEach(productttt=>console.log(productttt.color));
/*
silver
green
gray
black
*/



