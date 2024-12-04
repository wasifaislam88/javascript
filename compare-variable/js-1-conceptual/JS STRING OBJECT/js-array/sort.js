
const persons = ['rakib', 'sakib', 'akib','dakib', 'nokib'];

const sortedPersons = persons.sort();

console.log(sortedPersons);



//sort--->


// const numbers = [4, 7, 12, 38, 43, 6];

//ascending------------->smaller to large:[2,3,4,6,7,8]

//desending ---> larger to smaller [8, 7,6,5,,4,3]

// const numbers_asc = numbers.sort()

// console.log(numbers_asc);




const numbers = [4, 7, 12, 8, 43, 6,1];

// const numbers_asc = numbers.sort()//not working


const numbers_asc = numbers.sort(function(a,b){return a - b})

const numbers_dsc = numbers.sort(function(a,b){return b - a})



console.log(numbers_asc);

console.log(numbers_dsc);



