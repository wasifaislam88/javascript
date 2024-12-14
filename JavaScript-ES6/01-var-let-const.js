// var: no reason to use
// let: used for block scope
// const: used for block scope



//Const: array
//Const: const use korle  array te sorasori re-assign kora jaina, but push pop and kono index er value change kora jai that means modify kora jai
const numbersArray = [1, 2, 3, 4, 5];// let use korle array e value assign koràjabe
numbersArray = [6, 7, 8, 9, 10];
console.log(numbersArray)//error
// but ekhane let use korle output asbe : [6, 7, 8, 9, 10];


//Const: array
const arr= [1,2,3]
arr[1]=10
console.log(arr)//output: [ 1, 10, 3 ]
arr = [7,8,9]
console.log(arr)//error



//const: 
const count = 0
count = count + 10
// console.log(count)// error // but let use korle output asbe 10




//const: object
const student = {
    name: 'John Doe',
    class: 12
}
student = {name: "Taylor Swift"}// worog// let use korle kaz hobe
student.name = "Taylor Swift"// right// karon modify kora jabe


//const: loop

let sum = 0
//ekhane must let i= 0, name must let use korte hobe karon i er valu chenge hobbe
for(let i =0; i<10; i++){
    const num = i;// but nam er valu change howa sotteo const use korechi, karon eta block er moddhe kaz hocche. block theke loop ghure block theke ber howar por num er valu refrest hye jai. tai block er moddhe const koreo porblem nai jodi seta loop ghure. tobe let use kora jai and const o use kora jai ekhane
    sum = sum + num
}



/*
IMPORTANT: example of block scope`
function a(i, j){
    const sum = i + j + k
    return sum
}
const k = 3
const result = a(1,2)
console.log(result)//output: 6

console.log(sum)//ERROR
*/