// sob jaigai dot use kora jaina. example e 3 ke dod notation e use kora jaina. so etake bracket notation e sue korte hobe
// abar 'hobby' ke dot notation diye access kora jabe na karon '' quotation ache. so ekakeo bracket notation diye access korte hobe
//key te jodi hifen thake  my-name, tahole bracket notation use korte hobe

const person = {
    name: 'kodom ali', 
    job: 'badam khai',
    3:'third',
    'hobby':'singing',
    'last-name': 'khan',
    'final-last-name': 'sardar'
}
//'job' re variable e rakhlam
const prop = 'job'

// dot notation
console.log(person.job)

// bracket notation
// bracket notation "" ba '' er moddhe rakhte hoy
console.log(person['job'])

// bracket notation "" ba '' er moddhe rakhte hoy. tobe variable er moddhe rakhle quotation lage na
console.log(person[prop])


// console.log(person.3)//error
console.log(person['3'])//this is correct

//'' thakle must bracket notation use korte hobe
console.log(person['hobby'])

// key te jodi hyfen thake tahole must bracket notation use korte hobe
console.log(person['last-name'])
console.log(person['final-last-name'])



