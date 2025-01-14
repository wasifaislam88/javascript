
const people = [
    {
        id:1,
        name:"wasifa",
        age:30,
        occuption:'software Engineer',
        contact:{
            email:"john.doe@example.com"
        },

        address:{
            street:"123 main st",
            city:'san francisco',
            state:'CA',
            zip:'98766'
        },


        social:{
            twitter:'@john'
        },

        hobbies:['cokking','hinking','phootography']

    },
{
    id:2,
    name:'wasifa',
    age:25,
    occuption:'grapic desiner',
    contact:{
        email:'jane.smiler@example.com',
        phone:'6766554443'
    },

    hobbies:['drawing','traveling']
},

{
    id:3,
    name:'wasifa islam',
    age:25,
    occuption:'manager',
    contact:{
        email:'jane.smiler@example.com',
        phone:'6766554443'
    },

    hobbies:['drawing','traveling']
},
];

// const city = people[0].address.city
// console.log(city)

// people.map((person)=>{
//     const sentence = `person's name is ${person.name}.city:${person?.address?.city || "N/A"}`
//     console.log(sentence)

// })


const x = people.find((person)=>person.age ==40)
console.log(x.name)