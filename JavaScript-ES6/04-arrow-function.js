// function decalaration
function add(a,b){
    return a + b
}
const sum = add(10,20)
console.log(sum)//output: 30





// function expression (function ta variable er moddhe rakha hoyeche, ekhane function name 'abc' is optional)
const add2 = function abc(a,b){
    return a + b
}
const sum2 = add2(10,20)
console.log(sum2)// output: 30




// function expression (function ta variable er moddhe rakha hoyeche but function er kono nam dewa hoyni so eta annoniymus function bole)
const add3 = function(a,b){
    return a + b
}
const sum3 = add3(10,20)
console.log(sum3)// output: 30


console.log('--------------- Arrow Function -------------------')


// arrow function (arrow function er khetre function er kono nam dite hoy na)
const add4 = (a,b) => a + b
const sum4 = add4(10,20)
console.log(sum4)// output: 30



const add5 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4
const sum5 = add5(10,20,30,40)
console.log(sum5)// output: 100


//single or one parameter
//NOTE: person1 is single parameter. single parameter thakle () bracket use korleo hobe, () use na korleo hobe.... ekhane use korechi. next example e use korini. multiple parameter thakle must () bracket use korte hobe
const getAge1 = (person1) => person1.age;
const student1 = {
    name: 'John',
     age: 20
}
const age1 = getAge1(student1)
console.log(age1)// output: 20


//single or one parameter
// person2 () er moddhe rakhini. () use korleo hobe na korleo hobe jodi single parameter hoy tobe. multiple parameter thakle must () bracket use korte hobe
const getAge2 = person2 => person2.age;
const student2 = {
    name: 'John',
     age: 20
}
const age2 = getAge1(student2)
console.log(age2)// output: 20


const getThird = numbers => numbers[2]
const third = getThird([0,1,2,3,4,,5])
console.log(third)// output: 2




// no parameter
const getPI = () => Math.PI
console.log(getPI()) //output: 3.141592653589793




// arrow function with multiple line. function er moddhe multiple line thakle return keyword and {} carlly bracket use korte hobe
const doMath = (x,y,z) => {
    const sum = x + y + z
    const mult = x * y * z
    const result = sum + mult
    return result
}
console.log(doMath(1,2,3)) //output: 12 



