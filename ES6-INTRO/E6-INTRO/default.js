
//DEFAULT --->IF VALUE IS NOT PROVIDED,TAKE THIS AS A DEFAULT VALUE.

function add(num1 = 99 , num2 = 0, num3){
    const result = num1 + num2;
    console.log(num1,num2,result);
    return result;

}

// const sum = add(5,7);

const sum = add(5); //OUTPUT: NaN
// const sum = add(); //OUTPUT:NaN


function fullName(first,last = ''){
    const full = first + ' ' + last;
    return full;
}

function friends(numbs = []){

}

function person(human = {}){

    
}