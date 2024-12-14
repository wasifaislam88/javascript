// 08-JS-Problem-Solve/01.js

/****************************
 * INCHES TO FEET CONVERTER *
 ****************************/

function inchToFeet(inch) {
  let feetNumber = parseInt(inch / 12); // Extract the integer part for feet
  let inchRemaining = inch % 12; // The remainder gives us the inches
  const result = feetNumber + " ft " + inchRemaining + " ich";
  return result;
}

let xHeight = inchToFeet(75);
console.log(xHeight);//6 ft 3 ich






console.log("------------------------");

/************************************************************************************************
 * FUNCTION TAKES AN ARRAY AS PARAMETER AND GIVE ME THE AVERATE OF THE ODD NUMBERS IN THE ARRAY *
 ************************************************************************************************/
// odd numbers: 1, 3, 5,
// even numbers: 2, 4

function oddAverage(numbers) {
  let sum = 0;
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 != 0) {
      sum += numbers[i];
      count++;
    }
  }
  return sum / count;
}

const numbers = [1, 2, 3, 4, 5];
const avg = oddAverage(numbers);
console.log("average of the odd numbers is :", avg);//output: 3






console.log("------------------------");
/**********************************
 * ROMOVE DUPLICATE FROM AN ARRAY *
 **********************************/

const nameArr = [
  "abul",
  "babul",
  "cabul",
  "abul",
  "babul",
  "dabul",
  "kabul",
  "cabul",
];
const numArr = [1, 5, 61, 5, 87, 7, 5, 81, 61];

function noDuplicate(array) {
  const unique = [];
  for (const item of array) {
    if (unique.includes(item) === false) {
        unique.push(item)
    }
  }
  return unique
}

const uniqueName = noDuplicate(nameArr);
console.log(uniqueName); // Output: [ 'abul', 'babul', 'cabul', 'dabul', 'kabul' ]

const uniqueNum = noDuplicate(numArr);
console.log(uniqueNum); // output: [ 1, 5, 61, 87, 7, 81 ]
