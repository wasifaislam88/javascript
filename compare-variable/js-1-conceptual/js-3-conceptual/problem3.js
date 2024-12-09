



function calculateSavings(income){


    if (typeof income !== "number"){

        return "invalid input"
    }

    const houseRent = 5000;

    const mealCost = 3000;


    const personalExpense = 2000;

    const totalExpenses = houseRent + mealCost + personalExpense

    if(totalExpenses > income){

        return "Earn more...!"
    }

    const savings = income - totalExpenses;


    return savings;
}


const result = calculateSavings(7000)
console.log(result)