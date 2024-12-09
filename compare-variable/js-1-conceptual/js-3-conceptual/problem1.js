

// const numbers = [2,4,21,5,6,23,20,9]


/**
 * 
 * let biggest number = 2
 * 
 * biggest = 4;
 * 
 * 
 * biggest = 21;
 * 
 * 
 * biggest = 21;
 * 
 * 
 * biggest = 21;
 * 
 * 
 * biggest = 23;
 * 
 * 
 * biggest = 23;
 * 
 * biggest = 23;
 */

// let biggest = numbers[0];

// for(let i = 1; i<numbers.length; i++){

//     if("before loop:",biggest){

//         biggest = numbers[i]
//     }
// }

// console.log("after loop:",biggest)



function giveBiggestNumber(array){

    if (Array.isArray(array)){

       return "this is not an array...!"
    }

    let biggest = array[0]

    for(let i =1; i<array.length; i++){

        if(array[i] > biggest){

            biggest = array[i]
        }
    }

    return biggest;
}






// const numbers = [2,4,21,5,6,23,20,9]

const numbers = [2,4,21]

// const numbers = true

const result = giveBiggestNumber(numbers)

console.log(result)





