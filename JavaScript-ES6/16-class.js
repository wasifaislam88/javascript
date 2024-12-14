// IMPORTANT: explore kora hoyni.
// in future i should explore more

// similar object make korar jonno class use kora hoy. 

/*
In JavaScript, a class is a blueprint for creating objects. It encapsulates data and functions (called methods) that operate on that data. Classes were introduced in ES6 (ECMAScript 2015) and provide a cleaner, more concise way to create object-oriented programs.
*/
//NOTE: must see example 2

//class name should be PascalCase (First letter should be capital)
//class namme first letter capital na diye small letter dile jodi output correct ase tao eta bad practice..
//so we should use capital letter for class name


console.log('----------------example 1-----------------')


//has some properties, method
//class
class Product{
    country = 'Bangladesh'
    constructor(name){
        this.name = name;
    }
    speak(talk){
        console.log(`talking about ${talk}`)//output: talking about hi hello
    }
}

const lenevo = new Product('Le Le Lenevo')
console.log(lenevo)//output: Product { country: 'Bangladesh', name: 'Le Le Lenevo' }
lenevo.speak('hi hello')







console.log('----------------example 2-----------------')

// class er moddhe 2 ta jinis thakte pare,,, property and method
//lecture(){} eta method
//constructor(){} eta function
class Teacher{
    constructor(name, subject){
        this.name = name;
        this.subject = subject
    }
    lecture(){
        console.log('Sir is teachind Math')
    }
}

const tapan = new Teacher('Tapan Sir', 'Physics')
console.log(tapan)//output: Teacher { name: 'Tapan Sir', subject: 'Physics' }

const rashid = new Teacher('Rashid Sir', 'English')
console.log(rashid)//output: Teacher { name: 'Rashid Sir', subject: 'English' }




