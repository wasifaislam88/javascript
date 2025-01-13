
class person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sleep(){
        console.log(`sleeping now ${this.name}`)
    }

    activity(){
        this.sleep();
    }
}


const kodom = new person('kodom ali',21)
console.log(kodom)

kodom.sleep();
const badam = new person('kacha badam',23)
badam.sleep();

//bejal

const lazy = kodom.sleep;
lazy()