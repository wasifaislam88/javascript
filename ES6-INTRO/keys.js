const glass = 
    {name:'glass',
    color: 'golden',
    price:12,
    isCleaned:true};


console.log(glass);
//all properties
const keys = Object.keys (glass);

//['name', 'color','price', 'isCleaned']
// console.log(keys)

//all property values

const values = Object.values(glass);
// ['glass', 'golden', 12,true]
// console.log(values);

const pair = Object.entries(glass);
console.log(entries);

 //array of array,two dimentional array
/**
 * [
 * ['name', 'glass'],
 * 
 * ['color', 'golden'],
 * 
 * ['price',12],
 * 
 * ['isCleaned',true]
 * ]
 */



// delete glass.isCleaned;

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);
// console.log(glass);

//freeze

Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5000;
delete glass.name;
console.log(glass);







