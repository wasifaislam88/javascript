const computer = {
    brand : 'ASUS',
    price : 75000,
    processor: 'intel',
    Ram: '16GB',

}

const keys = Object.keys(computer);
console.log(keys);// output: [ 'brand', 'price', 'processor', 'Ram' ]


const values = Object.values(computer);
console.log(values);// output: [ 'ASUS', 75000, 'intel', '16GB' ]


console.log("**********  **********");


const college = {
    name : 'XYZ College',
    class : ['10', '11', '12'],
    events: ['science fair', 'cultural fest', 'arts fest'],
    unique:{
        color: 'blue',
        rank: "1st",
        result:{
            gpa: 5,
            merit: 'top'
        }

    }
}
// print output by using dot notation
console.log(college.name);// output: XYZ College
console.log(college.unique);// output: { color: 'blue', rank: '1st' } (as a string)
//NOTE: dot and bracket notation both use here
console.log(college.unique['color']);// output: blue

console.log(college.unique.result.merit);// output: top

// update value by using dot notation
college.unique.result.merit = 'top top most'
console.log(college.unique.result.merit);// output: top top most

console.log('**********  **********');

//IMPORTANT: object er kono key array hole oi array er index number onujayi specific kono value access kora jai and array er value index onujayi update kora jai
console.log(college.events);// output[ 'science fair', 'cultural fest', 'arts fest' ]
console.log(college.events[1]);//output: cultural fest
college.events[1] = 'changed 16th December'
console.log(college.events);// output: [ 'science fair', 'changed 16th December', 'arts fest' ]

console.log(college.events[1]);//output: changed 16th December

console.log('**********  **********');
console.log(college);

/*
output: 
{
  name: 'XYZ College',
  class: [ '10', '11', '12' ],
  events: [ 'science fair', 'changed 16th December', 'arts fest' ],
  unique: {
    color: 'blue',
    rank: '1st',
    result: { gpa: 5, merit: 'top top most' }
  }
}
*/

//COMMENT:delete object key
console.log('********** delete objects key **********');
//delete events key
delete college.events
console.log(college);
/*
output:
{
  name: 'XYZ College',
  class: [ '10', '11', '12' ],
  unique: {
    color: 'blue',
    rank: '1st',
    result: { gpa: 5, merit: 'top top most' }
  }
}
*/



//COMMENT: dot notation and bracket notation both use
console.log('********** dot notation and bracket notation both use  **********');

const person = {
    name: 'John Doe',
    age: 50,
    occupation: 'Software Developer'
  };
  
  console.log(person.name + ' is ' + person['age'] + ' years old and works as a ' + person.occupation);// John Doe is 50 years old and works as a Software Developer











