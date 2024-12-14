


//function signature/sample


//problem 1


function calculateTax(income,expenses){

    if(income >=0 && expenses >=0){

    if(income<expenses){
        return 'Invalid Input'
    }
    else{
        return (income -expenses) * .20
    }

    }
    else{
        return 'inavlid input'
    }

}

let  income = 6000
let  expenses  = -1500

const result = calculateTax(income, expenses)

console.log(result)













