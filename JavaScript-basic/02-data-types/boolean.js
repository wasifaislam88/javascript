/*
 Boolean Values:

true: Represents a logical truth.
false: Represents a logical falsehood.
 */


/*

Truthy and Falsy Values:

In JavaScript, all values have an inherent boolean value, known as "truthy" or "falsy."


Falsy values are values that evaluate to false in a boolean context. They include:
# false
# 0
# "" (empty string)
# null
# undefined
# NaN


Truthy values are all values that are not falsy. For example, any non-zero number, non-empty string, or object is truthy.

*/


console.log('********** Boolean **********');

var passed = true;
console.log(passed);//true

var isFalse = false;
console.log(isFalse);//false
console.log(isFalse);//false




console.log('********************');

let isGreater = 10 > 5; // true
console.log(isGreater);
let isEqual = 10 === 10; // true
console.log(isEqual);
let isLess = 10 < 5; // false
console.log(isLess);




console.log('********************');

if (0) {
    console.log("This won't run"); // 0 is falsy
  }
  
  if ("hello") {
    console.log("This will run"); // non-empty strings are truthy
  }
  