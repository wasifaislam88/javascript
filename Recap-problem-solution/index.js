


//problem 1


function calculateMoney(ticketSale){

    if(typeofSale <0 || typeof ticketSale !== 'number'){

        return 'invalid number'
    }




    return ticketSale *120 - (500 + 8 * 50)

}

// Test problem 1

// console.log(calculateMoney(10))

// console.log(calculateMoney(1055))

// console.log(calculateMoney(93))

// console.log(calculateMoney(-130))



//problem 2......


function checkName(name){

//let lastLetter = name[name.length - 1]

if (typeof name !== 'string'){

    return 'invalid'
}

let lastLatter = name.slice(-l).TolowerCase()



let checkArray = ['a', 'y', 'i', 'e', 'o', 'u','w']

// let result = false
// for (let char of checkArray){

//     if (char === lastLatter){
//         result = true
//     }
// }



let result = checkArray.includes(lastLatter)

return result ? 'Good Name': 'Bad name' 

}



//test problem 2


console.log(checkName('Salman'))


console.log(checkName('RAFEE'))

console.log(checkName('jhanker'))

console.log(checkName('199'))

console.log(checkName(['Rashed']))





// problem 3.......


function deleteInvlids(array){

    if(!Array.isArray(array)){


        return 'invalid Array'

    }

    let numberArray = []

    for (let element of array){

        if (typeof element === 'number'&& isNaN(element) === false){

            numberArray.push(element)
        }
    }
}


//test problem 3............



deleteInvlids([1,null,undefined,18.-19,NaN,'12',[1,2],{ob: 'lala'}])


console.log(deleteInvlids(['1',{num:2},NaN]))

// console.log(typeof NaN)


// console.log(isNaN(45))

console.log(Array.isArray([1,2,-3]))

console.log(Array.isArray({num:[1,2,3]}))




//problem 4...........


function password(obj) {

    if(

        obj.name === undefined ||

        obj.birthYear === undefined ||

        obj.birthYear.toString().length !==4
    ){

        return 'invalid'
    }

    let capitalSitename = obj.sitName[0].toUppercase() + obj.sitName.slice(1)

    let passwordString = capitalSitename + '#' + obj.name + '@' + obj.birthYear

    return passwordString
}


//test problem 4

console.log(

    password ({name: 'kolimuddin',birthYear:1999,sitename: 'google'})


)

console.log(password({name: 'rahat',birthYear:2002,sitName:'Facebook'}))


console.log(password({name: 'toky',birthYear:2000,sitName:'Facebook'}))

console.log(password({name: 'maisha',birthYear:2002,sitName:'Facebook'}))



// let birthYear = 199

// console.log('hello'.length)

// console.log(birthYear.toString().length === 4)




//problem 5..............>>>


function monthlySavings(arr,livingCost){

    if(!Array.isArray(arr) || typeof livingCost !== 'number'){

        return 'invalid input'
    }






    //calculate total income

let totalIncome = 0

for (let payment of arr){

    if(payment>3000){
        //deduct tax amount

        let tax = payment * 0.2

        totalIncome += payment - tax
    }
    else{

        totalIncome += payment
    }
     
}

    let savings = totalIncome - livingCost

    // if(savings>=0){
    //     return savings
    // }

    // else{

    //     return 'earn more'
    // }

    return savings >= 0 ? savings : 'earn more'


}

//test problem 5

console.log(monthlySavings([1000,2000,3000],5400))

console.log(monthlySavings([1000,2000,2500],5000))

console.log(monthlySavings([1000,2000,2700],3400))

console.log(monthlySavings(1000,[2700,900],3400))






















