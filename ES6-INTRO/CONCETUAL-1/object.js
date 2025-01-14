
// const myInfo = {
//     name : "mehedy",
//     age:25,
//     address:"rajshi",
//     sosurName:"katappa",
//     sosurBari: "B.Baria",
//     contact:{
//     phone:262646,
//     email:"abc@gmail.com"

//     }
// };

// const obj2 = {...myInfo};

// obj2.married = false;
// obj2.age = 26;

// console.log(myInfo);
// console.log(obj2);

// const myName = myInfo.name;
// const myAge = myInfo.age;

// const {age:myAge} = myInfo
// console.log(myAge)

// const {contact :{email}..} = myInfo;
// console.log(contact);
// const{email} = contact;
// console.log(email)




const myInfo = {
    name : "mehedy",
    age:25,
    address:"rajshi",
    sosurName:"katappa",
    sosurBari: "B.Baria",
    // contact:{
    // phone:262646,
    // email:"abc@gmail.com"

    // }
};


//object access: dot notation,bracket notation


for(let key in myInfo){
    console.log(myInfo[key])
}




// const x = "name"
// const s = "sosurName"

// console.log(myInfo[s])
