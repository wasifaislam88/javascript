function greeting(greetingHandler){
     greetingHandler(name);
}

// greeting('halim mama')
// const numbers = [45, 54, 78];

const laptop = {price:45000, brand:'lenovo', memory:'8gb'}

function greetingHandler(name){
    console.log('good morning',name);
}

function greetiEvening(name){
    console.log('good evening',name)
}


function greetNight(name){
    console.log('good night',name)
}


greeting(greetingHandler,'tom hanks')
greeting(greetingHandler,'tom brady')
greeting(greetingHandler,'tom cruise')
greeting(greetiEvening,'tom solaiman')
greeting(greetiEvening,'tom salman')
greeting(greetNight,'rasel')


function submitHandler(){
    console.log('submit button clicked')
}
document.getElementById('btn-submit').addEventListener('click',submitHandler)



