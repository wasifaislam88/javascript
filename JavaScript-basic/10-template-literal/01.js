/*
JavaScript template literals are a way to create strings that offer more flexibility than traditional string concatenation. They are enclosed by backticks (`) instead of quotes (' or "). Template literals allow for:

# Multiline strings
# String interpolation (inserting variables or expressions directly into the string)
# Expression evaluation


------------------------------------

*/

/**************************************
 * KEY FEATURES OF TEMPLATE LITERALS: *
 **************************************/

// (1) String Interpolation: You can embed variables and expressions directly into a string using the ${} syntax.
let name = "Alice";
let age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);
// Output: My name is Alice and I am 25 years old.




// (2) Multiline Strings: With template literals, you can easily create multiline strings without needing special characters like \n.
let message = `This is the first line.
This is the second line.
This is the third line.`;
console.log(message);
/*
output:
This is the first line.
This is the second line.
This is the third line.
*/




// (3) Expression Evaluation: You can use expressions inside ${} to dynamically evaluate them within the string.
let a = 10;
let b = 20;
console.log(`The sum of a and b is ${a + b}.`);
// Output: The sum of a and b is 30.



// (4) Tagged Template Literals (Advanced): A tagged template allows you to process template literals with a function. This function takes the string parts and any variables as arguments, giving you more control over the output.
function highlight(strings, ...values) {
    return strings.reduce((result, string, i) => `${result}${string}<strong>${values[i] || ''}</strong>`, '');
  }
  let name2 = "Bob";
  let age2 = 30;
  console.log(highlight`My name is ${name2} and I am ${age2} years old.`);
  // Output: My name is <strong>Bob</strong> and I am <strong>30</strong> years old.
  

console.log('-------------------------------------------');





/***********
 * EXAMPLE *
 ***********/

// some practice example that how to use template literal in console.log
console.log('************* some example ****************');


let num1 = 7
let num2 = 3
let r = num1 + num2

console.log("The addition of " + num1 + " and " + num2 + " is " + r);
// output: The addition of 7 and 3 is 10
//OR
console.log(`The addition of ${num1} and ${num2} is ${r}`);
// output: The addition of 7 and 3 is 10


console.log('*****************************');

let price = 10;
let VAT = 0.25;

let total = `Total: ${(price * (1 + VAT)).toFixed(2)}`;
console.log(total);// output: Total: 12.5
console.log(typeof total);// output: string

