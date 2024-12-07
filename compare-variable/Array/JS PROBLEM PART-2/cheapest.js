

const mobailes = [

    {name: 'Samsung',price:20000,cemera:'12mp',color:'black'},

    {name: 'xoami',price:10000,cemera:'12mp',color:'black'},

    {name: 'oppo',price:15000,cemera:'12mp',color:'black'},

    {name: 'iphone',price:100000,cemera:'12mp',color:'black'},

    {name: 'walton',price:16000,cemera:'12mp',color:'black'},

    {name: 'HTC',price:270000,cemera:'12mp',color:'black'},
]




function getCheapestPhone(phones){

    let min = phones[0];

   for(const phone of phones) {

    if(phone.price< min.price){

        min = phone

    }

   }
   
   return min;

}


const cheap = getCheapestPhone(phones);

console.log('Cheapest phone is :',cheap);