
const products = [
    {id: 1, name: 'lenovo',price:65000},
    {id: 2, name: 'macbook',price:165000},
    {id: 3, name: 'hp',price:40000},
    {id: 4, name: 'dell',price:45000},
]



//has some properties,method

class product{
    country = 'bangladesh';
    constructor(){
        this.name = name;
    }

    speak(talk){
        console.log(`talking about ${talk}`)
    }
}

const lenovo = new product('le le lenovo')
// console.log(lenovo)
// lenovo.speak('kita kou')

class Teacher {
    constructor(name,subject){
        this.name = name;
        this.subject = subject;
    }
    lecture(){
        console.log('sir is teaching math')
    }
}

const tapan = new Teacher('tapon sir', 'phusics')
console.log(tapan);

const rashid = new Teacher('Rashid',English)

