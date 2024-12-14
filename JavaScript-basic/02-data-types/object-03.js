//for of: array
// for in: object

const mobile = {
    brand: 'Xiaomi',
    price: 20000,
    color: 'black',
    camera: '48MP',
    storage: '128GB',
    isNew: true
}

//for in loop
for(const pp in mobile){
    console.log(pp);
}
/*
brand
price
color
camera
storage
isNew
*/
console.log('**********  **********');

//for in loop
for(const pp in mobile){
    console.log(pp);
    console.log(mobile[pp]);
}

/*
brand
Xiaomi
price
20000
color
black
camera
48MP
storage
128GB
isNew
tru=
*/
console.log('********** Object.keys()  **********');

//Object.keys()
const keys = Object.keys(mobile);
console.log(keys);//output: [ 'brand', 'price', 'color', 'camera', 'storage', 'isNew' ]

for (const key of keys){
    console.log(key);
}
/*
brand
price
color
camera
storage
isNew 

*/

console.log('**********  **********');


for (const key of keys){
    console.log(mobile[key]);
}
/*
Xiaomi
20000
black
48MP
128GB
true
*/

console.log('**********  **********');


for (const key of keys){
    console.log(key, mobile[key]);
}
/*
brand Xiaomi
price 20000
color black
camera 48MP
storage 128GB
isNew true
*/

console.log('**********  **********');


for (const key of keys){
    console.log(key, ':::', mobile[key]);
}
/*
brand ::: Xiaomi
price ::: 20000
color ::: black
camera ::: 48MP
storage ::: 128GB
isNew ::: true
*/