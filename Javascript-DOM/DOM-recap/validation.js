const number = '23';

//string,number,boolean

if(typeof number === 'number'){
    console.log('value is a number')
}

else{
    console.log('value is not a number')
}

const numbers = [3,12,78,90];

const student = {name:'wasifa',job:'kaj a faki dawya'}
// console.log(typeof numbers);
console.log(Array.isArray(numbers));
console.log(Array.isArray(number));
console.log(typeof student);