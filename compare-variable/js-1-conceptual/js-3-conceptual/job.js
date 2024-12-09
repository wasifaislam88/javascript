

const person1 = {
    name:"abul kasem",
    honors:40,
    hsc:30,
    isFFfamily:true

}



const person2 = {
    name:"mokbor miah",

    honors:30,

    hsc:30,

    isFFfamily:true

}


function jobSelection(info){



    if (typeof info !== "object"){


        return "invalid object"
    }


   let total_marks = info.honors + info.hsc;

   if(info.isFFfamily){

    total_marks = total_marks + (total_marks*0.2)
   }

   console.log(total_marks)

   if(info.isFFfamily && total_marks >= 80){

    return "Aho vatija aho....chakri to tomati...!"
   }

   else if(info.isFFfamily && total_marks < 80){

    return "bad luck vatijaa...next time ...!"

   }

   else if(!info.isFFfamily && total_marks >= 80){

    return "you got the job..."

   }

   else if(!info.isFFfamily && total_marks <80){


    return "rajakaar rajakaar...!"

   }



// console.log(jobSelection(person1))

console.log(jobSelection(person2))

}
