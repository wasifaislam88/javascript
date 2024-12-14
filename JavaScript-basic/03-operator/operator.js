
/*

Operator	Description
+	         Addition
-	        Subtraction
*	       Multiplication
**	     Exponentiation (ES2016)
/	        Division
%      	  Modulus (Remainder)
++	       Increment
--       	Decrement

*/





/*

    Operator	 Example	     Same As
    =	          x = y	          x = y
    +=	          x += y	    x = x + y
    -=	          x -= y 	    x = x - y
    *=            x *= y    	x = x * y
    /=            x /= y        x = x / y
    %=	          x %= y      	x = x % y
    **=	         x **= y       x = x ** y

*/





/*

COMPARISON
1. bigger: >
2. less: <
3. greater than or equal: >=
4. less than or equal: <= 
5. equal: ==
6. not equal: !=
7. Strictly equal: ===
8. Strictly not equal: !==
9. logical and: &&
10. logical or: ||
11. not: !
12. ternary: ? :
13. nullish: ??


*/

// COMMENT: Comparison 
console.log('********** Comparison **********');
console.log(10==10);//true (= =)
console.log(10== '10');//true (= = only value check kore)
console.log(10==='10');// false (= = = value and type check kore)
console.log(10!=='10');// true (! = = value and type)

var man = '100'
var woman = '100'
console.log(man === woman);//true


console.log('************************')

var mangoPrice = 40;
var applePrice = 50;
console.log(mangoPrice > applePrice);//Output false


console.log('************************')

console.log(5>10);//output false
console.log(5<10);//output true
console.log(5==10);//output false
console.log(10==10);//output true
console.log(10==10.1);//output false
console.log(15>=10);//output true
console.log(15<=10);//output false
console.log(10<=10);//output true



console.log('********** Logical not  ! !!  ************')
// ! means not
// !! means not er not that means ja ache tai mane not korar por ager ta anbe
const isPassed = true;
if(!isPassed){
    console.log('bad')
}
else{
    console.log('good')//good
}



/*
 !true; // returns false
 !false; // returns true
 !""; // returns true
 !"Cat"; // returns false
 */






 
console.log('********** ternary *********** ')
console.log('********** Conditional (ternary) operator *********** ')
// IMPORTANT:
//TERNARY -->
//  ?    :
// condition  ?  do something when true  :  do something when false

console.log('*****1*****');

const age1 = 18;
age1 >= 18 ? console.log('Sabalok') : console.log('Nabalok');



console.log('*****2*****');


let  pricePicnic= 1000;
const isLeader = true;
pricePicnic = isLeader === true ? 0 : price + 100;
console.log(pricePicnic);//output 0

//isLeader jodi true hoy tahole pricePicnic e 0 assign hobe
//isLeader jodi false hoy tahole pricePicnic e 500+100=600 assign hobe
//first '= is assign operator




console.log('*****3*****');


// complex lavel er ternary operator 
const age = 3;

age >= 18 ? 
    age >= 40 ? console.log('old') : console.log('young')
: console.log('Baby') //baby







console.log('*****4*****');


const normalPrice = 1000;
const child = true

const finalPrice = child == true ? normalPrice/2 : normalPrice + 100



//example complex level ternary operator
let score = 85;
let grade = score >= 90 ? 'A' :
            score >= 80 ? 'B' :
            score >= 70 ? 'C' :
            score >= 60 ? 'D' : 'F';

console.log(grade); // Output: 'B'
