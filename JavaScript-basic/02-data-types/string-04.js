const sentence = 'I am Nahian'

for (const letter of sentence){
    console.log(letter)
}
/*
I
 
a
m
 
N
a
h
i
a
n
*/

// reverse string using for of loop
let r = ''
for (const letter of sentence){
    r = letter + r
}
console.log(r)//naihaN ma I


// reverse string using for loop
let rev = ''
for (let i = 0;  i < sentence.length; i++){
    // console.log(i)
    // console.log(sentence[i]);
    const letter = sentence[i]
    rev = letter + rev
    
}
console.log(rev);//naihaN ma I


// shortcut way
// reverse string using split and reverse and join
const reversed = sentence.split('').reverse().join('')
console.log(reversed)// naihaN ma I





