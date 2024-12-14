// Array er moddhe Array o  Object thakte pare
// array te upper case lower case kora jaina but string e jai
// Array
const numbersss = []
const numbers = [10, 11, 12];
const friends = ['Abul', 'Babul', 'bulbul', 'Kabul'];
const passed = [true, false, true, false, true];
const mixedArray = [12, 'Satkhira', true, 45.566]; // not Recommended, bad prictice

console.log(numbersss)// []
console.log(numbers);// [ 10, 11, 12 ]
console.log(friends);// [ 'Abul', 'Babul', 'bulbul', 'Kabul' ]
console.log(passed);// [ true, false, true, false, true ]
console.log(mixedArray);// [ 12, 'Satkhira', true, 45.566 ]

console.log(typeof numbers)//output: objece (all array are object)
console.log(typeof numbersss)//output: objece (all array are object)

//get element value by index
console.log(numbersss[0]);//undefined
console.log(numbers[0]);// 10
console.log(numbers[1]);// 11

const secondArrayThirdIndex = numbers[2];
console.log(secondArrayThirdIndex);// output: 12

//length
console.log(numbers.length);// 3
console.log(friends.length);// 4
console.log(passed.length);// 5
console.log(mixedArray.length);// 4





//set or update element value by index
console.log('********** set or update/replace element balue by index ***************');
//66 replace by 'hello'
let arr = [55, 66, 77]
arr[1] = 'hello'
console.log(arr);// [ 55, 'hello', 77 ]





//NOTE: push last add, unshift first add
//NOTE: pop last out, shift first out
//set or update element value by index
//IMPORTANT:

console.log('*************************')
console.log('******* video 17.3 push, pop shift, unshift *********')
console.log('********* Push ********')
//push last add
const ages1 = [];
const nums1 = [20, 21, 22];// [20, 21, 22]
console.log(nums1);
nums1.push(23);
nums1.push(24, 25, 26);
console.log(nums1);// [ 20, 21, 22, 23, 24, 25, 26 ]




console.log('************* pop() **************');
//pop last out
const nams1 = ['rohim', 'korim', 'kamal', 'jamal'];
console.log(nams1);// [ 'rohim', 'korim', 'kamal', 'jamal' ]
nams1.pop();
console.log(nams1);//[ 'rohim', 'korim', 'kamal' ]  
nams1.pop();
nams1.pop();
console.log(nams1);//[ 'rohim' ]


//pop example 2
const nams2 = ['john', 'jack', 'kane', 'donald']
console.log(typeof nams2);// object
nams2.pop();
console.log(nams2); // [ 'john', 'jack', 'kane' ]
console.log(typeof nams2);// object
//const out = nams2.pop();//BAD PRACTICE
//console.log(nams2);// [ 'john', 'jack' ] as a object //BAD PRACTICE
//console.log(out);// kane as a string //BAD PRACTICE
nams2.pop()
const out = nams2
console.log(nams2);// [ 'john', 'jack' ]
console.log(out); //[ 'john', 'jack' ]
console.log(typeof nams2); // object


/*
/// je line e pop() korbo oi line ei seta onno kono variableE store kora jabe na.
/// dorkar porle pop korar new line e variable assign kora jabe...
/// wrong process given bellow
/// wrong: const out = nams2.pop();
/// wrong: console.log(out);//jack
/// wrong: console.log(typeof out);// string

eta keno wrong process?
karon ekhane out variable e kane bad array theke bad jabe thikI tobe seta bad giye out variable  store hobe string hisebe and
john , jack nams2 array te object hisebe theke jabe....

/// const out = nams2.pop();
/// console.log(out);//kane as a string
/// console.log(nams2);// [ 'john', 'jack' ] as a object

*/


/*
NOTE:
In JavaScript, the pop() method only removes one element at a time from the end of an array.
If we want to remove multiple elements, we can either call pop() multiple times in loop or use other methods like splice().

*/



console.log('********* unshift() ********');
//first add
const nams4 = ['rohim', 'korim'];
console.log(nams4); // [ 'rohim', 'korim' ]
nams4.unshift('john');
console.log(nams4); //[ 'john', 'rohim', 'korim' ]


console.log('*************** shift() ************');
// first out
const nams3 = ['rohim', 'korim', 'jamal'];
console.log(nams3) // [ 'rohim', 'korim', 'jamal' ]
nams3.shift();
console.log(nams3);// [ 'korim', 'jamal' ]





console.log('********* includes() ********');
// kono object ba element array te ache kina seta check kore includes, output ase true , false
const frnd = ['rohim', 'korim', 'jamal']
console.log(frnd.includes('rohim'))//output: true
console.log(frnd.includes('jhon'))//output: false
if(frnd.includes('Irene')){
    console.log('I will go to the park')
}
else{
    console.log('I will not go the park')// I will not go the park
}




console.log('********* indexOf() ********');
// kono object koto number index e ache eta check korar jonne eta use hoy
const frnd2 = ['rohim', 'korim', 'jamal']
console.log(frnd2.indexOf('jamal'));//output: 2 ( 2 means jamal 3number index e exist kore)
console.log(frnd2.indexOf('john'));//output: -1  (negative value means not exist the object in the array)




console.log('********* Array.isArray() ********');
// array or not array eta check korar jonne eta use hoy
const frnd3 = ['balam', 'kamal', 'salam'];
const frnd4 = [];
const food = 'kacchi monglai porata';
console.log(Array.isArray(frnd3));//output: true  (true means  Array)
console.log(Array.isArray(frnd4));//output: true
console.log(Array.isArray(food));//output: false (false means not Array)




console.log('********* join() ********');
//array er object gulo pasa pasi ak line output er jonno use hoy
// only () dile by default , bose and '' er vitor ja debo seta bosbe
const frnd5 = ['rohim', 'korim', 'john'];
console.log(frnd5.join());//rohim,korim,john
console.log(frnd5.join(' and '));//rohim and korim and john       
console.log(frnd5.join('|'));//rohim|korim|john
console.log(frnd5.join('  || '));//rohim  || korim  || john       
console.log(frnd5.join('+'));//rohim+korim+john

console.log('********* concat() ********');
// 2 ta array marge korar jonne use hoy
const frnd6 = ['my', 'name'];
const frnd7 = ['is', 'John'];
console.log(frnd6.concat(frnd7));//[ 'my', 'name', 'is', 'John' ] 




console.log('********* slice() ********');
// kono array er kon index theke kon index print hobe eta dekhanor jonne eta use hoy
//NOTE: suppose (0,3) that means index 0 to index 2 print
const numbers1 = [1,2,3,4,5,6];
const r = numbers1.slice(1,3);
console.log(r);// [ 2, 3 ]
console.log(typeof r);// object

console.log(numbers1);//[ 1, 2, 3, 4, 5, 6 ]
console.log(numbers1.slice(2,4));// NOTE: [ 3, 4 ]// index 2 theke start and index 4 er purbo porjonto that means ager ta porjonto

/*
r orthat alada variable e rekhe proint kora jai othoba console.log diyeo direct print kora jai. pop er moto jhamela nai ekhane...
*/




console.log('************ splice() **************');
//splice() er 5 ta use case niche dewa holo

/*
1. Removing Elements:
To remove elements from an array, specify the start index and the number of elements to remove (deleteCount).
*/
let fruits1 = ['apple', 'banana', 'orange', 'grape', 'mango'];

let removed = fruits1.splice(2, 2); // Removes 'orange' and 'grape'
console.log(fruits1); // Output: ['apple', 'banana', 'mango']
console.log(removed); // Output: ['orange', 'grape']


//want to delete 5
const numberss = [3,4,21,5,67,32]
numberss.splice(3,1) // splice (start index, deletecount)
//numbers.splice(3,2) // splice (start, deletecount)
console.log(numberss);


/*
2. Adding Elements:
You can insert new elements into an array at the start index without removing any existing elements by setting deleteCount to 0.
*/
let fruits2 = ['apple', 'banana', 'mango'];

fruits2.splice(1, 0, 'orange', 'grape'); // Inserts 'orange' and 'grape' at index 1
console.log(fruits2); // Output: ['apple', 'orange', 'grape', 'banana', 'mango']


/*
3. Replacing Elements:
To replace elements, specify the start index, the number of elements to remove (deleteCount), and the new elements to add.
*/
let fruits3 = ['apple', 'banana', 'orange', 'mango'];

fruits3.splice(1, 2, 'grape', 'pear'); // Removes 'banana' and 'orange', adds 'grape' and 'pear'
console.log(fruits3); // Output: ['apple', 'grape', 'pear', 'mango']



/*
4. Removing All Elements After a Certain Index:
If you want to remove all elements from a specific index to the end of the array, omit the deleteCount.
*/
let fruits4 = ['apple', 'banana', 'orange', 'grape', 'mango'];

fruits4.splice(2); // Removes all elements from index 2 onward
console.log(fruits4); // Output: ['apple', 'banana']



/*
5. Using Negative start Index:
If the start index is negative, it counts from the end of the array.
*/
let fruits5 = ['apple', 'banana', 'orange', 'grape', 'mango'];

fruits5.splice(-2, 1); // Removes 'grape' (2nd last element)
console.log(fruits5); // Output: ['apple', 'banana', 'orange', 'mango']

