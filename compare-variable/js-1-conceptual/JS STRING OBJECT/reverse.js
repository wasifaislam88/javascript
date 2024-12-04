const sentence = 'i am learning web dev.'

//const result = '.veD beW gninreal ma i';

//web

//bew

//donal

//od

//d

//nod

//anod

//lanod



let reverse = ''
for (const letter of sentence){

    reverse = letter + reverse ;

}


// console.log(reverse);




//ignore solution

let rev = ''


for (let i = 0; i < sentence.length; i++){

    console.log(i);

    // console.log(sentence[i]);

    const letter = sentence[i];

    rev = letter + rev;

}

// console.log(rev);

//shortcut

const reversed = sentence.split(' ').reverse().join(' ');

console.log(reversed);