// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).


//namee, time is Parameter
function sleep(namee, time){
    // console.log(namee ,  "is sleeping from 10 PM");
    console.log(namee +  " is sleeping from " + time + " PM");
    //NOTE: by default return undefined
}

//"Rahim", 10 is Argument
sleep("Rahim", 10);// Rahim is sleeping from 10 PM
sleep("Karim", 11);// Karim is sleeping from 11 PM
sleep("John", 12);// John is sleeping from 12 PM


console.log('******************************');


function toCelsius(f) {
    return (5/9) * (f-32);
    console.log("not work after return");
    
  }
  
  let value = toCelsius(98.4);
  console.log(value);// 36.88888888888889



console.log('******************************');


function summ(a,b){
    let c = a + b
    return c
}

console.log(summ(5,10));// 15
// OR
let pp = 44
let qq = 6
console.log(summ(pp,qq));// 50


console.log('******************************');
// Conditional Return
function isEven(number){
  if (number%2 === 0) {
    return true;
  }
  else{
    return false
  }
}
console.log(isEven(5));// false
console.log(isEven(6));// true





console.log('************* important *****************');
// IMPORTANT: Functions can be used the same way as you use variables, in all types of formulas, assignments, and calculations.
//IMPORTANT:
function toCel(far) {
    return (5/9) * (far-32);
  }

let x = toCel(77);
let text1 = "The temperature is " + x + " Celsius";
console.log(text1)// The temperature is 25 Celsius
// OR
let text2 = "The temperature is " + toCel(86) + " Celsius";
console.log(text2);// The temperature is 30 Celsius


console.log('******************************');
/* 
# Since local variables are only recognized inside their functions, variables with the same name can be used in different functions.

#Local variables are created when a function starts, and deleted when the function is completed.

carName variable function er moddhe and bahire use kora jabe. karon function er moddhe kono variable bahirer same nam er variable er sathe kono relation nai

*/

function fun(){
    let carName = "Volve"
    console.log(carName);
}
fun()//Volvo
let carName = "BMW"
console.log(carName);//BMW
// NOTE: example of carName



console.log('******************************');
// problem solving
// write a function to give me the sum of all numbers in an array

function sumOfNumbers(numbers){
    let sum = 0
    for (const number of numbers) {
        sum += number
    }
    return sum
}

const numbs = [4,2,1,6]
const sum = sumOfNumbers(numbs)
console.log('Sum of numbers is ', sum);

