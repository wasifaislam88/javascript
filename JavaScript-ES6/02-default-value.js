//if value is not provided then default value will work
// if value is providen then defatul value will not work and argument value will work
function add(num1, num2,num3=0){
    const result = num1 + num2 + num3
    console.log(num1,num2, num3)
    return result
}

const sum1 = add(5)
console.log(sum1)// 5 + undefine + 0 //output NaN

const sum2 = add(5)
console.log(sum2)

const sum3 = add()
console.log(sum3)//undefined undefined 0 // output NaN

console.log('------------------------------------------------')

//without using default value
function fullName1(first, last){
    const full = first + ' ' + last
    return full
}
const name1 = fullName1('John')
console.log(name1)// output: John undefined

//using default value// last name na thakle default falue empty string
//NOTE: last='' ehkahe '' quote er moddhe kono space thakbe na..
function fullName2(first, last=''){
    const full = first + ' ' + last
    return full
}
const name2 = fullName2('John')
console.log(name2)// output: John undefined



console.log('------------using trim()---------------')
function fullName(firstName, middleName = "", lastName = "") {
    return `${firstName} ${middleName} ${lastName}`.trim();
}

// Calling the function with a middle name
console.log(fullName("John", "William", "Doe")); // Output: "John William Doe"

// Calling the function without a middle name
console.log(fullName("John", "", "Doe")); // Output: "John Doe"

// Calling the function and letting middleName default
console.log(fullName("John", "Doe")); // Output: "John Doe"


console.log('-----------------------------------------------------')
// default value of array
function friends(numbers=[]){

}
console.log('--------------------------')
//default value of object
function person(human= {}){

}

