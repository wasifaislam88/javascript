// const inVerified = "";

// // if(isVerified === true){
// //     console.log("user is verified");
// // }

// // else{
// //     console.log("user is not verified");
// // }

// console.log(
//     `${isVerified === true? "user is varified" : "user is not verified"}`
// );


function getTimeString(time){
    //get hour rest seconds 
    const hour = parseInt(time / 3600);
    let remainingSecond=time % 3600;
    const minute =parseInt (remainingSecond / 60);
    return `${hour} hour ${minute} minute ${remainingSecond}second ago`;
}

console.log(getTimeString(7865));