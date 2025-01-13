//data access

const data = [{id:1,name:`abul`,address:`kochu khat`}]

console.log(data [0].address);

const products = {
    count:5000,
    data:[
        {id:1, name: 'lenovo laptop',price:65000},
        {id:2, name: 'macbook',price:165000},
        
    ]
}

//second product price
// console.log(products,data[1].price);

const user = {
    id:5001,
    name:'mahin',
    address:{
        street:{
            first: '54/1 uttor side',
            second: 'anu mamar er goli',
            third: 'no dorai'
        },

        city : 'dhaka'

    }
}

const user2 = {
    id:5002,
    name: 'pori bibir majar',
    address:{
        city: 'chittagong',
        county: 'bangladesh'
    }
}

console.log(user.address.street?.second);

console.log(user2.address.street?.second);
