// looping in array

console.log('********** looping in array **********');

const friends = ['Elon', 'Bill', 'Mark', 'Waren']

for(const friend of friends){
    console.log(friend);
}
/*
Elon
Bill
Mark
Waren
*/


for (let i = 0; i < friends.length; i++){
    console.log(i);
    console.log(friends[i]);
}
/*
0
Elon
1
Bill
2
Mark
3
Waren
*/ 

let i = 0;
while(i < friends.length){
    console.log(i);
    console.log(friends[i]);
    i++;
}
/*
0
Elon
1
Bill
2
Mark
3
Waren
*/


console.log('********** Reverse Array **********');
const num1 = [1,2,3,4,5]
num1.reverse()
console.log(num1);// output: [ 5, 4, 3, 2, 1 ]

const num2 = [10,20,30,40,50]
const num2rev = num2.reverse()
console.log(num2rev);// output: [ 50, 40, 30, 20, 10 ] 

// using for of
const flowers = ['rose', 'tulip', 'sunflower'];
for(const flower of flowers.reverse()){
    console.log(flower);
}
/*
sunflower
tulip
rose
*/

//using for loop 
for(let i = flowers.length-1; i >= 0; i--){
    console.log(flowers[i]);
}
/*
sunflower
tulip
rose
*/





console.log('********** Array Sort **********');
// Sort orginal array ke change kore
//Assending--> Smaller to larger
//Decending--> Larger to smaller

const person = ['rakib', 'nokib', 'akib', 'Akib', 'sakib', 'Nokib', 'bablu']
const personSortAss = person.sort()
console.log(personSortAss);// output: [ 'Akib', 'Nokib', 'akib', 'bablu', 'nokib', 'rakib', 'sakib' ]
// ASCI order onujiyi assending decending kore
// A-Z then a-z , thats why Akib-Nokib-akib-bablu-nokib-rakib-sakib 


const num3 = [2,4,1,3,5]
const num3ass = num3.sort()
console.log(num3ass);// output: [ 1, 2, 3, 4, 5 ]

const num4 = [10,4,30,3,5]
num4.sort()
console.log(num4);// output: [ 10, 3, 30, 4, 5 ]
// number er somoye first number dekhe assending decending kore, tai 10,3,30,4,5



// to overcome Sort ASCI order problem, solutin given below
//ascending solution 
const num4asc = num4.sort(function(a,b){return a-b})
console.log(num4asc);// output: [ 3, 4, 5, 10, 30 ]
// etar explain in future e janbo

// decending solution
const num5 = [10,4,30,3,5]
const num5asc = num5.sort(function(a,b){return b-a})
console.log(num5asc);// output: [ 30, 10, 5, 4, 3 ]
// etar explain in future e janbo



