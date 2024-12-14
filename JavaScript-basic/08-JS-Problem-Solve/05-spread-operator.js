/**********************************
 * FIND THE MAX VALUE ON AN ARRAY *
 **********************************/


const heights = [65,66,68,72,78,60,65,66]

function getMax(numbers){
    let max = numbers[0]
    for(const num of numbers){
        if (num > max){
            max = num
        }
    }
    return max
}
const max = getMax(heights)
console.log('max value is : ', max);// output: max value is :  78

// OR 
//find the max value on an array using Spread Operator ...
const numbers = [3, 7, 1, 9, 12, 5];
const maxValue = Math.max(...numbers);

console.log(maxValue); // Output: 12

/*

1)Array Spread Syntax (...):

    # The spread operator (...) is used to expand the numbers array into individual elements. So ...numbers effectively becomes 3, 7, 1, 9, 12, 5.

2) Math.max() Function:
    # The Math.max() takes a list of numbers as arguments and returns the largest one. By using the spread operator, you pass each number in the array as an individual argument to Math.max().

3)esult:
    # The Math.max() function returns the maximum value from the list of numbers.

*/
