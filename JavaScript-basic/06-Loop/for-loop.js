// amar jokhon jani kokhon start hobe and kokhon end hobe orthat kotokhon cholbe mane sob kichu define thake tokhon for loop use kora jai

const numbers = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
for (const num of numbers) {
  console.log(num);
}

/*
output:
10
11
12
13
14
15
16
17
18
19
20

*/
console.log('********************');

//const use kora jabe na. karon increment kora jaina. karon const er man chenge kora jaina
//tai let use korte hobe
for (let num = 0 ; num <=5 ; num++){
    console.log(num);
    
}
/*
output:
0
1
2
3
4
5
*/

console.log('********* print odd *****1******');

// print odd number from 1 to 10 using for loop
 for (let num = 1 ; num <= 10 ; num+=2){
console.log(num);
 }
/*
1
3
5
7
9
*/

//  OR
console.log('********* print odd ****2*******');

//num %2===1 or num % 2 !== 0
for (let num = 1 ; num <= 10 ; num++){
    if (num % 2 !== 0){
        console.log(num);
    }
}
/*
1
3
5
7
9
*/

// sum 11 to 20 using for loop

console.log('********* sum 11 to 20');

let sum = 0;// have to use let. becaus const er man chenge kora jaina
for (let num = 11 ; num <= 20 ; num++){
    sum += num;
}
console.log('sum of 11 to 20 :', sum);// sum of 11 to 20 : 155


console.log('********** decrement *********');
for (let i = 10 ; i >= 0 ; i--){
    console.log(i);
    
}

/*
output:
10
9
8
7
6
5
4
3
2
1
0
*/
