//array te upper case lower case kora jaina but string e jai

console.log('********** String    slice() **********');

const address ='abcdefg'
const part = address.slice(2,4)
console.log(part)//cd

const address2 = '01234567'
const part2 = address2.slice(2,4)// 2 means 2number index theke start hobe. and 4 means endBefore 4number index
console.log(part2)//23


console.log('********** split example **********');

const sentence = 'I am a good and hardworking person.'
console.log(sentence.split());// output given below serial (1)
console.log(sentence.split(''));// output given below serial (2)
console.log(sentence.split(' '));// output given below serial (3)
console.log(sentence.split('a'));// output given below serial (4)

/*
split() --> Returns the entire string as a single element in an array: ["I am a good and hardworking person"]

split('') --> Splits the string into individual characters: ["I", " ", "a", "m", " ", "a", " ", "g", "o", "o", "d", " ", "a", "n", "d", " ", "h", "a", "r", "d", "w", "o", "r", "k", "i", "n", "g", " ", "p", "e", "r", "s", "o", "n"]

split(' ') --> Splits the string into substrings separated by spaces: ["I", "am", "a", "good", "and", "hardworking", "person"]

split('a') --> jekhane a character pabe oi jaiga thekei split hobe. Splits the string into substrings separated by the character 'a': ["I ", "m ", " good ", "nd h", "rdworking person"]

*/

/*

output(1):
    [ 'I am a good and hardworking person.' ]

output(2):
[
  'I', ' ', 'a', 'm', ' ', 'a', ' ',
  'g', 'o', 'o', 'd', ' ', 'a', 'n',
  'd', ' ', 'h', 'a', 'r', 'd', 'w',
  'o', 'r', 'k', 'i', 'n', 'g', ' ',
  'p', 'e', 'r', 's', 'o', 'n', '.'
]

output(3):
    [ 'I', 'am', 'a', 'good', 'and', 'hardworking', 'person.' ]

output(4):
    [ 'I am a good and hardworking person.' ]

*/




const ss = 'rohim korim kamal';
const numbers = ss.split(' ');// ['rohim', 'korim', 'kamal']
console.log(numbers); 

const abc = 'rohim,korim,kamal';
const names = abc.split(',');
console.log(names);// ['rohim', 'korim', 'kamal']

const cc = 'amixtumixshextui'
const words = cc.split('x');
console.log(words);// [ 'ami', 'tumi', 'she', 'tui' ]

const dd = 'amiztumi hizhello hellozworld'
const words2 = dd.split('z');
console.log(words2); //[ 'ami', 'tumi hi', 'hello hello', 'world' ]





console.log('********** string split example **********');
const friends = 'abul,babul,bulbul,kabul'

const newFriends = friends.split(',')// jekhane , comma pabe oi jaiga theke split hobe
console.log(newFriends)//[ 'abul', 'babul', 'bulbul', 'kabul' ]



console.log('********** join() **********');
// ekhane array theke output string er somoy data vinno vabe show krar example dewa hoyeche
const fruits = ['apple', 'banana', 'orange']
console.log(fruits);// [ 'apple', 'banana', 'orange' ]

// console.log(fruits.join());
// console.log(fruits.join(''));
// console.log(fruits.join(' '));
// console.log(fruits.join(','));
// console.log(fruits.join('|'));
// console.log(fruits.join('-'));
//           OR

const newfruit1 = fruits.join()
console.log(newfruit1);// apple,banana,orange

const newfruit2 = fruits.join('')
console.log(newfruit2);// applebananaorange

const newfruit3 = fruits.join(' ')
console.log(newfruit3);// apple banana orange

const newfruit4 = fruits.join(',')
console.log(newfruit4);// apple,banana,orange

const newfruit5 = fruits.join('|')
console.log(newfruit5);// apple|banana|orange

newfruit6 = fruits.join(' |   #      +')
console.log(newfruit6);// apple |   #      +banana |   #      +orange

const newfruit7 = fruits.join('-')
console.log(newfruit7);// apple-banana-orange



console.log('********** concat **********');
// stgring concatenation different way
const firstName = 'John'
const lastName = 'Doe'

const f1Name = firstName + lastName
console.log(f1Name);// JohnDoe

const f2Name = firstName + ' ' + lastName
console.log(f2Name);// John Doe


const f3Name = firstName.concat(lastName)
console.log(f3Name);// JohnDoe

const f4Name = firstName.concat(' ', lastName)
console.log(f4Name);// John Doe

const f5Name = firstName.concat(' ').concat(lastName)
console.log(f5Name);// John Doe





console.log('********** includes **********');
// includes return true or false
const flower = 'rose'
console.log(flower.includes('s'));// true



console.log('********** substring **********');
//string.substring(startIndex, endIndex);
/*
startIndex: The index at which to start extraction. This is required.
endIndex (optional): The index before which to end the extraction. If omitted, substring() will extract to the end of the string.
*/
let text = "Hello, World!";
let result = text.substring(7, 12);// 7 start and 12 endBefore
console.log(result); // Output: "World"

