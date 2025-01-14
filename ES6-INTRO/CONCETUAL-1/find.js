const numbers = [12,32,25,75,13,54,97,25];

// let find = null;

// for(let item of numbers){
//     if(item>50){
//         find = item;
//         break;
//     }
// }

// console.log(find)


const result = numbers.find((item)=> item>50&& item % 2 == 0);
console.log(result);