// object non-primitive
// , use korte hobe but last er tai comma na dileo cholbe dileo somossa nai
// name is property/key and John Doe is value
//kono dey er moddhe space use korle must '' siggle quote ba "" double quote use korte hobe.. but `` back tick use kora jabe na. and bracket notation er maddhome key er value access korte hobe jodi key er moddhe space thake tobe.

const person = {
  name: 'John Doe',
  age: 50,
  profession: "developer",
  salary: 70000,
  married: true,
  children: ['jane', 'Jack', 'Mary'],
  'favourite places': ['dhaka', 'sylhet', 'rajshahi'],
  address: {
    city: 'Dhaka',
    country: 'Bangladesh',
  },
};

console.log(person);

/*
output:
{
  name: 'John Doe',
  age: 50,
  profession: 'developer',
  salary: 70000,
  married: true,
  children: [ 'jane', 'Jack', 'Mary' ],
  address: { city: 'Dhaka', country: 'Bangladesh' }
}
*/

console.log('**********  **********');

//COMMENT: Using dot notation
console.log(person.profession);//output: developer
console.log(person.salary);// output: 70000
const income = person.salary
console.log(income);// output: 70000


console.log('**********  **********');

console.log(person.address);

console.log('**********  **********');


//COMMENT: Using bracket notation
console.log(person['salary']);// output: 70000
const income2 = person['salary']
console.log(income2);// output: 70000
console.log(person['favourite places']);// output: [ 'dhaka', 'sylhet', 'rajshahi' ]


//COMMENT: update kery er valu eusing dot noteation
console.log('********** key er value update by dot noteation **********');
// salary 70000 theke bonus diye 80000 korte chaile....
person.salary = 75000
console.log(person.salary);// output: 75000





//COMMENT: update kery er value using bracket noteation
console.log('********** key er value update by bracket noteation **********');

person['salary'] = 85000
console.log(person.salary);// output: 85000

person["favourite places"]= ["coxsbazar", "kuakata", "potenga"]
console.log(person["favourite places"]);// output: [ 'coxsbazar', 'kuakata', 'potenga' ]

console.log(person);

/*
output:
{
  name: 'John Doe',
  age: 50,
  profession: 'developer',
  salary: 85000,
  married: true,
  children: [ 'jane', 'Jack', 'Mary' ],
  'favourite places': [ 'coxsbazar', 'kuakata', 'potenga' ],
  address: { city: 'Dhaka', country: 'Bangladesh' }
}

*/
console.log('**********  **********');

//COMMENT: update using new variable or same key are same
const keyName = 'profession'
console.log(person['profession']);//output: developer
console.log(person[keyName]);//output: developer



// person['profession']= 'devops'
// OR same
person[keyName] = 'devops'
console.log(person[keyName]);//output: devops
console.log(person['profession']);//output: devops

//NOTE: person['profession']= 'devops'   OR  person[keyName] = 'devops' Both outpur are same

console.log(person);
/*
output: 
{
  name: 'John Doe',
  age: 50,
  profession: 'devops',
  salary: 85000,
  married: true,
  children: [ 'jane', 'Jack', 'Mary' ],     
  'favourite places': [ 'coxsbazar', 'kuakata', 'potenga' ],
  address: { city: 'Dhaka', country: 'Bangladesh' }
}
*/




