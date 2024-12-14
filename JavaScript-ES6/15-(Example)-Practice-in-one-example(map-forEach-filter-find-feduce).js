const products = [
    {id:1, name: 'Asus',    price: 80000},
    {id:2, name: 'Dell',    price: 70000},
    {id:3, name: 'HP',      price: 60000},
    {id:4, name: 'Lenovo',  price: 50000},
    {id:5, name: 'Acer',    price: 40000},
    {id:6, name: 'Walton',  price: 30000}
]

//map every product er nam gulo nicchi
const names = products.map(product => product.name)
console.log(names) //output: [ 'Asus', 'Dell', 'HP', 'Lenovo', 'Acer', 'Walton' ]
//map every product er price gulo nicchi
const prices = products.map(p => p.price)// p mena product
console.log(prices) //output: [ 80000, 70000, 60000, 50000, 40000, 30000 ]



//forEach
products.forEach(p => console.log(p.name))
/*
Asus
Dell
HP
Lenovo
Acer
Walton
*/


//filter 60000 er beshi price hole expensive. so return expensive poroduct
const expensive = products.filter(p => p.price > 60000)
console.log(expensive)
/*
[
  { id: 1, name: 'Asus', price: 80000 },
  { id: 2, name: 'Dell', price: 70000 }
]
*/





//find affordable product. 60000 er kom hole affordable
const affordable = products.find(p => p.price < 60000)
console.log(affordable)
/*
{ id: 4, name: 'Lenovo', price: 50000 }
*/
//find only 1 ta return kore. prothom akta pelei seta return kore and baki gulo check kore na.. ekonno 50000 return koreche and 40000, 30000 return koreni





//reduce    ekhane all price sum korechi
const total = products.reduce((accumulator, current) => accumulator + current.price, 0)
console.log(total)//output: 330000