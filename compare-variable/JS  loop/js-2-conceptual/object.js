
const person = {

    name:"wasifa",

    address:"brahmanbaria",

    age:18
}


console.log (person.name)

console.log (person["name"])


//const keys = object.keys (person)
//const value = object.value(person)



// const keys = Object.keys()





// person.contact = " no contact"

// person.name = "nahian"

// console.log(keys)

// console.log(values)



// console.log(person) //delete person.name;


// console.log(person.address)


// for (let j = 1; j<=5; j++){

//     console.log("hello form j", j)

// }


const x = [1,2,3,4,5,6,7,8];

for(let i = 0; i<x.length; i++){

    // if (x[i] === 5){

    //     break;
    // }

    if (x[i] === 5){
        continue;
    }

    console.log(x[i])

}


