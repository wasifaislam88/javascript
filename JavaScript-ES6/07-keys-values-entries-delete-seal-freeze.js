// keys => ES5
// values => ES5
// entries => ES6

// color => key/porperty AND color => value
const glass = {
    name: 'glass',
    color: 'golden',
    price: 100,
    isCleaned: true
}
console.log(glass)// output: { name: 'glass', color: 'golden', price: 100, isCleaned: true }


//keys : all property name
const keys = Object.keys(glass)
console.log(keys)// output: [ 'name', 'color', 'price', 'isCleaned' ]



//values: all propertiyes value name
const values = Object.values(glass)
console.log(values)// output: [ 'glass', 'golden', 100, true ]



//entries: 2D array hisebe key and value niye array create kore
const entries = Object.entries(glass)
console.log(entries)
/*
Output:
array of array, two dimentional array
[
  [ 'name', 'glass' ],
  [ 'color', 'golden' ],
  [ 'price', 100 ],
  [ 'isCleaned', true ]
]
*/



//delete
delete glass.isCleaned
console.log(glass)// output: { name: 'glass', color: 'golden', price: 100 }


// delete (delete korar name spread operator use kore new object create kora hy. till now bujhini, in future explore korbo)
// const {price, ...discountPrice} = glass;
// console.log(discountPrice)


//NOTE: freeze :: freeze korle boject modify kora jaina, kehane price 100 theke 200 hobe na, name delete hobe na. source bangladesh add hobe na. mane modify kora jabe na, freeze kore rakhle
Object.freeze(glass)
glass.price = 200// not work
delete glass.name// not work
glass.source = 'Bangladesh'// not work
console.log(glass)


//NOTE: seal: freeze kora na thale tokhon seal use kore object modify kora jai. only modify kora jai. but add and delete kora jaina.
Object.seal(glass)
glass.price = 200// work
delete glass.name// not work
glass.source = 'Bangladesh'// not work
console.log(glass)