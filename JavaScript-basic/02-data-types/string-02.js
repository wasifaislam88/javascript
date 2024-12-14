// toUpperCase()
// toLowerCase()
// trim() // trim left and right side both
//trimStart() // trim only left side
//trimEnd()  // trim only right side

// Note: Note: dont use trimLeft and trimRight because it is old. left and right repleaced by trimStart and trimEnd


// javascript string is case sensitive

console.log('##################################');

const school = 'ABC Model School'

const subject = 'Chemistry' //Capital C
const book = 'chemistry'  // Small c

console.log('*********normal***********');

if(subject === book){
    console.log('I will read this book');
    
}
else{
    console.log('Not Read');//output: Not Read (because C and c are not same, case sensitive)
    
}

console.log('*********** toLowerCase() **********');

if(subject.toLowerCase() === book.toLowerCase()){
    console.log('I will read this book');// output: I will read this book
}
else{
    console.log('Not Read');
}

console.log('******** toUpperCase() ************');

if(subject.toUpperCase() === book.toUpperCase()){
    console.log('I will read this book'); // output: I will read this book
}
else{
    console.log('Not Read');
}




console.log('############## trim() ##############');
// This method removes whitespace from both the beginning and the end of a string

const drink = "water"
const liquid = "    water "
console.log('*********** normal **********');

if(drink === liquid){
    console.log('I can drink');
}
else{
    console.log('Not drink');
    
}

console.log('*********** trim() **********');
if(drink === drink.trim()){
    console.log('I can drink');
}
else{
    console.log('Not drink');
    
}


console.log('########## trimStart() ##############');
//This method removes whitespace from the beginning (left side) of a string.

const str1 = "   Hello World";
const str2 = "Hello World";

if (str1.trimStart() === str2) {
  console.log("The strings are equal");// output: The strings are equal
} else {
  console.log("The strings are not equal");
}


console.log('############ trimEnd() ###############');
// This method removes whitespace from the end (right side) of a string. Here's an example:

const str3 = "Hello World   ";
const str4 = "Hello World";

if (str3.trimEnd() === str4) {
  console.log("The strings are equal"); // output: The strings are equal
} else {
  console.log("The strings are not equal");
}

