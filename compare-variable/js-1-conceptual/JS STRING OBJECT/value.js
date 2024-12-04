const person = {
    name: 'Nahian',
    age :25,
    perofession:'developer',
    salary:25000,
    married:true,
    'fav places':['bandorban' , 'sainmartein', 'kouakata']

}


person.salary = 30000;
person['age']=26;
person['fav places'] = ['maldives', 'bali', 'pataya']
console.log(person)




const propName = 'profession';
person[propName] = 'devops'
console.log(person)
