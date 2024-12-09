//amr name mehedy, amar baba basa rajshahi


// function showInfo(info){



//     if(typeof info !== 'object'){

//         return "please provide a valid object..!";
//     }

//     const result = "amr naam"+info.name+",amr basa"+info.address;

//     return result;
// }





const person = {
    nam:"mehedy",
    address:"rajshahi"
}


// const x = showInfo(person)

// console.log(x)

//output:mehedy@rajshahi.com



function createEmail(info){

    if(typeof info !== "object"){

        return "invalid object"
    }

    const result = info.name+"@"+info.address+".com";

    return result
}

console.log(createEmail(person))



