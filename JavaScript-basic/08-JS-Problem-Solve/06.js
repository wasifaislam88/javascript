/*************************************************************
 * USE ADD AND MULTIPLICATION TO CALCULATE WOOD REQUIREMENTS *
 *************************************************************/
 

/*
chair --> 3 cft
table --> 10 cft
bed --> 50 cft

*/

function woodQuantity(chairQuantity, tableQuantity, bedQuantity){

    const perChairWood = 3
    const perTableWood = 10
    const perBedWood = 50
    

    const chairTotalWood = chairQuantity * perChairWood
    const tableTotalWood = tableQuantity * perTableWood
    const bedTotalWood = bedQuantity * perBedWood

    const totalWood = chairTotalWood + tableTotalWood + bedTotalWood

    return totalWood
}

const wood = woodQuantity(1,1,4)
console.log('wood needed', wood);//output: wood needed 213





console.log('********** **********');
// Array er moddhe Array o  Object thakte pare

/**********************
 * GET CHEAPEST PHONE *
 **********************/

// object er array
const phones = [
    {name: 'Samsung', price: 20000, camera: '12mp', color: 'black'},
    {name: 'Xiaomi', price: 18000, camera: '12mp', color: 'black'},
    {name: 'Oppo', price: 30000, camera: '12mp', color: 'black'},
    {name: 'Iphone', price: 100000, camera: '12mp', color: 'black'},
    {name: 'Walton', price: 31000, camera: '12mp', color: 'black'},
    {name: 'HTC', price: 27000, camera: '12mp', color: 'black'},
]

function getCheapestPhone(phones){
    let min = phones[0]// must let use korte hobe
    for(const phone of phones){
        if(phone.price < min.price){
            min = phone
        }
        
    }
    return min
    
}

const cheap = getCheapestPhone(phones);
console.log('Cheapest phone is: ', cheap);// output: Cheapest phone is:  { name: 'Xiaomi', price: 18000, camera: '12mp', color: 'black' }



//d


console.log('********** **********');
/**************************************************************
 * CALCULATE THE TOTAL COST OF TE PRODUCTS ON A SHOPPING CART *
 **************************************************************/

const shoppingCart = [
    {name: 'Laptop', price: 80000, quantity: 1},
    {name: 'Phone', price: 20000, quantity: 2},
    {name: 'Headphones', price: 700, quantity: 5},
    {name: 'Charger', price: 1200, quantity: 1}
];

function calculateTotalCost(cart) {
    let totalCost = 0;
    
    for (const item of cart) {
        totalCost += item.price * item.quantity; // Multiply price by quantity for each product
    }
    
    return totalCost;
}

const totalCost = calculateTotalCost(shoppingCart);
console.log('Total cost of the shopping cart is: ', totalCost);// output: Total cost of the shopping cart is:  124700



console.log('********** **********');

/******************************************************
 * SIMPE CALCULATOR TO CALL FUNCTION INSIDE A FUNCTION *
 ******************************************************/

function add(num1, num2){
    return num1 + num2
}
function subtract(num1, num2){
    return num1 - num2          
}

function multiply(num1, num2){
    return num1 * num2
}
function divide(num1, num2){
    return num1 / num2
}

function calculator(a,b,operator){
    if(operator === 'add'){
        const result = add(a,b)// function er moddhe another function call
        return result
    }
    else if(operator === 'subtract'){
        const result = subtract(a,b)// function er moddhe another function call
        return result
    }
    else if(operator === 'multiply'){
        const result = multiply(a,b)// function er moddhe another function call
        return result
    }
    else if(operator === 'divide'){
        const result = divide(a,b)// function er moddhe another function call
        return result
    }
    else{
        return "Only 'add', 'subtract', 'multiply' and 'divide' are allowed"
    }
}

const result = calculator(5, 7, 'divide')
console.log(result);//output: 0.7142857142857143
const resultttt = calculator(5, 7, 'divi')
console.log(resultttt);//output: Only 'add', 'subtract', 'multiply' and 'divide' are allowed




