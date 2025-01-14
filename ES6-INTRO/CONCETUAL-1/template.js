// const Name = 'mahedy'
// const age = 43
// const job = "bekar"

//amr name mehedy.amr boyos 43.ami akhn bekar

// const sentence = "amr name" +Name+".amr boyos"+age+".ami akhn" +job;
// const sentence1 = `amr name ${Name}. amr boyos ${age}.ami akhn ${job}`;

// console.log(sentence)
// console.log(sentence1)

const myInfo ={
    name:"mehedy",
    age:25,
    address:"b-baria",
    sosurName:"katappan",
    sosurBari:"b-baria",
    subjects:["bangla","english","math"]

};


const sentence = `amr naam ${myInfo.name}.amr subjects gulo ${myInfo.subjects.map((sub)=>sub).join(" ")}`

console.log(sentence)