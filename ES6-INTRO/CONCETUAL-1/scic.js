
const students = [

{name:'mahedy bro',email:'mehedy@gmail.com',avg:56,fiftyPercent:true},
{name:'fahad bro',email:'fahad@gmail.com',avg:57,fiftyPercent:false},
{name:'mahin bro',email:'mahin@gmail.com',avg:42,fiftyPercent:false},
{name:'fahim bro',email:'fahim@gmail.com',avg:52,fiftyPercent:true},
{name:'eyad bro',email:'eyad@gmail.com',avg:32,fiftyPercent:false},
{name:'poros bro',email:'poros@gmail.com',avg:37,fiftyPercent:true},
{name:'raiyan bro',email:'raiyan@gmail.com',avg:56,fiftyPercent:true},


{

name:"jackia",
email : "jakia@gamil.com",
avg:57,
fiftyPercent:true,

},

];

//scic = avg = 48, fiftyPercentnt = true
// const scic = students.filter((person)=> person.avg >=48&&fiftyPercent === true)

// const findSCIC = (students) => {
//     const scic = students.filter(
//         (person) =>person.avg >=48 && person.fiftyPercent === true
//     );
//     // console.log(scic);
//     const names = scic.map((p)=> p.name)
//     return names;

// };


const findSCIC = (students) => students.filter((person)=>person.avg > 48 && person.fiftyPercent).map((p)=>p.name);
const results = findSCIC(students);
console.log(results);

