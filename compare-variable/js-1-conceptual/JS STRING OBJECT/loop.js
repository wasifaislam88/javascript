const mobail = {
    brand : 'samsung',
    price:25000,
    color:'black',
    cemera:'12mp',
    isNew:true
}

//for of :array
//for in:object

for (const prop in mobail){
    // console.log(prop)
    // console.log(mobail[prop])
}

const keys = Object.keys(mobail);
console.log(keys);


for(const key of keys){
    console.log(key, ':', mobail[key]);

}