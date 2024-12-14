// COMMENT: parseInt
console.log('********** parseInt() **********');
/* IMPORTANT:
normally we use parseInt() to convert: string number to integer

*/




var num3 = '100.50';
console.log(num3);// 100.50 (as a string)
console.log(typeof num3);//string

var num4 = parseInt(num3);
console.log(num4);// 100 (as a number)


var num5 = parseInt('100.5');
console.log(num5);// 100 (as a number) 



//IMPORTANT: strint to number using parseInt()
let numm = parseInt("77ab8c99");
console.log(numm); // Output: 77
//stops parsing at the first non-numeric character, so if the string contains non-numeric characters, only the numeric part will be converted.



/*
NOTE: personal opinion: not use parseInt() to convert floting number to integer number. nobody use this way, but it works, i dont know hwy but it works, so this comment part not recommanded

let nummm = 6.55;
console.log(typeof nummm);//output: number
console.log(parseInt(nummm));
console.log(nummm);//output: 6

Step 1: The number 6.55 is converted to the string "6.55".
Step 2: parseInt reads the string "6.55" and stops at the first non-numeric character, which is the period (.).
Step 3: The result is the integer 6, and anything after the decimal point is ignored.
So, the output of console.log(nummm); will be 6.
*/



// COMMENT: Number()
console.log('********** Number() **********');
var x = '10'
var y = Number(x)
console.log(y);//10 (as a number)

var i = '30.33'
var j = Number(i)
console.log(j);//30.33 (as a number)


// COMMENT: parseFloat
console.log('********** parseFloat **********');
var num6 = '100.50';
var num7 = parseFloat(num6);
console.log(num7);// 100.5 (as a number)

var num8 = parseFloat('100.5');
console.log(num8);// 100.5 (as a number)



// COMMENT: toFixed
console.log('********** toFixed() **********');
var num9 = 0.1;
var num10 = 0.2;
var total = num9 + num10;
console.log(total);// 0.30000000000000004
console.log(total.toFixed(3));// 0.300 (as a string)

var total2 = parseFloat(total.toFixed(3));
console.log(total2);// 0.3 (as a number)


var num11 = 11.05;
var num12 = 2.4;
var total3 = num11 + num12;
console.log(parseInt(total3.toFixed(3)));// 13 (as a number )
console.log(parseFloat(total3.toFixed(3)));//13.45 (as a number)



// COMMENT: Infinity -Infinity
console.log('********** Infinity -Infinity **********');
console.log(1 / 0);//Infinity
console.log(-1 / 0);//-Infinity




// COMMENT: isNaN
console.log('********** isNaN **********');
var aa = isNaN(11)
console.log(aa);//false


var a = isNaN('11')
console.log(a);//false

var b = isNaN('hello')
console.log(b);//true

var c = isNaN(2-10)
console.log(c);//false

//COMMENT: NaN
console.log('********** NaN **********');
var d = NaN;
console.log(d);//NaN





//COMMENT: null
console.log('********** null **********');
var d = null;
console.log(d);//null

//COMMENT: undefined
console.log('********** NaN **********');
var e;
console.log(e);//undefined
