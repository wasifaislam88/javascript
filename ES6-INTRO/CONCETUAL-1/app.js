
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
    name:'mihi',
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
    name:'nahian',
    age:25,
    occuption:'manager',
    contact:{
        email:'jane.smiler@example.com',
        phone:'6766554443'
    },

    hobbies:['drawing','traveling']
},
];


// console.log("connected js")


const peopleList = document.getElementById("people-list");
const personInfo = document.getElementById("person-info");


// const peopleList = document.getElementById("people-list");
// console.log(peopleList)


const renderPeopleList = (people) => {

    people.map((person) => {
        // console.log(person.name)

        const li = document.createElement("li");
        li.classList.add("cursor-pointer","text-blue-500","p-2");
        li.textContent = person.name;

        li.addEventListener("click",() => {
            handlePersonClick(person.id)
        })
        peopleList.appendChild(li);
    });
};

const displayPersonInfo = (person) => {
    personInfo.classList.remove("hidden");
    document.getElementById("no-selection").classList.add("hidden");

    // console.log(personInfo)
    personInfo.innerHTML=`
    <h2 class="text-2xl font-bold mb-2"> ${person.name} </h2>
    <p>Number: ${person?.adress.phone || "N/A"}</p>
    <P>Hobbies: ${person?.hobbies?.map((hobby) => hobby)}</P>
    `;
};



const handlePersonClick = (id) => {
    const person = people.find((p) => p.id == id);
    // console.log(person)
    displayPersonInfo(person);

};
renderPeopleList(people);
// handlePersonClick(2)