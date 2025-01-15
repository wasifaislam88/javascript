
const user = {id: 1, name:'wasifa',job:'actor'};

//javaScript object notation (json)

const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

/**
*{ id: 1, name: 'wasifa', job: 'actor'}
{"id":1,"name":"wasifa","job":"actor"}
 */


const shop = {
    owner:'Alia',
    address:{
        street:'kochukhet voot ar goli',
        city:'ranvir',
        country:'BD'
    },

    products:['laptop','mic','monitor','keyword'],
    revenue:45000,
    isOpen:true,
    isNew:false
};

console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);
const shopObj = JSON.parse(shopJSON);
console.log(shopObj)