

const products = [

    {name: 'shampoo',price:300,quantity:2},

    {name: 'chiruni',price:300,quantity:3},

    {name: 'shirt',price:700,quantity:5},

    {name: 'pant',price:1300,quantity:1},


]


function cartTotal (products){
     let total = 0;

    for(const product of products){

        const thisProductCost = product.price * product.quantity;

        total = total + thisProductCost;
       
    }

    return total;
}


const shoppingCost = cartTotal(products);

console.log(shoppingCost);