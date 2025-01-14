
const polapain =[
    {name:'abul',job:'sorkari',salary:17000},
    {name:'bbul',job:'sorkari',salary:27000},
    {name:'kbul',job:'sorkari',salary:37000},
    {name:'mbul',job:'sorkari',salary:21000},
    {name:'akbul',job:'sorkari',salary:22000},
    {name:'mukbul',job:'sorkari',salary:23000},
];


// sorkari >=20000 or besorkari >=40000

const jamais = polapain.filter(
    (pola) => 
    (pola.job === "sorkari" && pola.salary >=20000)
    (pola.jib === "besorkari" && pola.salary >= 40000)

);


const lottery =Math.floor(Math.random()*jamais.length)
console.log(lottery)


console.log(jamais[lottery].name, 'tumi jitso....!')