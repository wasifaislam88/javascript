//COMMENT: number
var price = 100;
console.log(price); //100
console.log(typeof price);//number



console.log('********** **********');

var orangePrice = 100;
console.log(orangePrice);//100
console.log(typeof orangePrice);//number

var chocolatePrice = 20.5;
console.log(chocolatePrice);//20.5
console.log(typeof chocolatePrice); //number

console.log(orangePrice + chocolatePrice); //120.5
console.log('Sum of Orange and Chocolate: ' + (orangePrice + chocolatePrice));//Sum of Orange and Chocolate: 120.5
console.log("Sum of Orange and Chocolate: " + (orangePrice + chocolatePrice));//Sum of Orange and Chocolate: 120.5
console.log(`Sum of Orange and Chocolate: ` + (orangePrice + chocolatePrice));//Sum of Orange and Chocolate: 120.5
// single quote and double quote and backtick are same


console.log('********** **********');


var num1 = 30;
var num2 = 20;

console.log(num1 + num2); //50

var sum = num1 + num2;
console.log(sum);   //50

console.log(num1 + num2);//50
console.log('SUM of num1 and num2: ' + sum);//SUM of num1 and num2: 50    
console.log('SUM of num1 and num2: ' + (num1 + num2));//SUM of num1 and num2: 50  
console.log('SUM of : ' + num1 + ' and ' + num2 +' is: ' + (num1 + num2));//SUM of : 30 and 20 is: 50 
console.log('SUM of : ' + num1 + ' and ' + num2 +' is: ' + num1 + num2);//SUM of : 30 and 20 is: 2030 
