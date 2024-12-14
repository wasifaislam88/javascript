/****************************************************
 * HANDLE UNEXPECTED FUNCTION INPUT PARAMETER ERROR *
 ****************************************************/

//Example 1
console.log('********** Example 1 **********');


function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please provide a valid number'
    }
    return num1 + num2
}
const resultt = add(7 , '7')
console.log(resultt);// output: Please provide a valid number


//Example 2
console.log('********** Example 2 **********');

function fullName(firstName, lastName){
    if (typeof firstName !== 'string'){
        return 'First name should be a string'
    }
    else if (typeof lastName !== 'string'){
        return 'Last name should be a string'
    }
    const fullName = firstName + ' ' + lastName
    return fullName
    
}

const resulttt = fullName('John' , 7)
console.log(resulttt);// output: Last name should be a string


//Example 3
console.log('********** Example 3 **********');
// NOTE: typeof Array er output object
// so array or not eta check korar jonne isArray

// show me the value of index 1 of an array
function getSecond (numbers){
    if(Array.isArray(numbers)=== false){
        return 'Please provide an array'
    }
    const second = numbers[1]
    return second
    
}

const second = getSecond(45)
console.log(second);// output: Please provide an array
const seconddd = getSecond([45,5,9,7,8])
console.log(seconddd);// output: 5

