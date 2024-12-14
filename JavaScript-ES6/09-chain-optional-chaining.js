// data access




// find the address from data
const data = [{id:1, name: 'john doe', address: 'USA'}]

// console.log(address)//Error

console.log(data[0])// output: { id: 1, name: 'john doe', address: 'USA' }
console.log(data[0].address)// output: USA



console.log('----------------------------------')


//findt the price of second product
const products = {
    count: 5000,
    data: [
        { id: 1, name: 'Asus Laptop', price: '80000' },
        { id: 2, name: 'Dell Laptop', price: '90000' },
    ]
}

console.log(products)
console.log(products.data)
console.log(products.data[1])
console.log(products.data[1].price)//output: 90000



console.log('---------------chain and optional chaining-------------------')
// Optional chaining (?.) in JavaScript is a feature that allows you to safely access deeply nested properties of an object without having to explicitly check if each reference in the chain is null or undefined. If any of the references in the chain is null or undefined, the expression short-circuits and returns undefined instead of throwing an error.

// How to access user er address er street er second
const user = {
    id: 5001,
    name: 'John Cena',
    address: {
        street: {
            first: '54/1 left side',
            second: '3rd building',
            third: '2nd floor'
        },
        city: 'New York',
    }

}

const user2 = {
    id: 5002,
    name: 'The Rock',
    address: {
        city: 'Chittagong',
        country: 'Bangladesh'
    }
}

// ? optional cahining
console.log(user.address.street?.second)// output: 3rd building
console.log(user2.address.street?.second)// output: undefined

//COMMENT: user 2 ta street nai. error jeno na ase. that means street  na thakle error na dekhiye undefine dekhanor jonno ? optional chain use kora hoyeche. street pele tata access korte parbe, street na pele undefine.