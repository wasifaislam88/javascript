/**
 * char --> 3 cft
 * 
 * table --> 10 cft
 * 
 * bed ---> 50 cft
 */


function woodQuantity(char,table,bed){

    const perChairWood = 3;

    const perTablerWood = 10;

    const perBedWood = 50;


    const chairTotalWood = chairQuantity * perChairWood;

    const perTotalWood = tableQuantity * perTablerWood;

    const bedTotalWood = bedQuantity * perBedWood;



    const totalWood = chairTotalWood + tableTotalWood+ bedTotalWood;


    return totalwood;


}

const wood = woodQuantity(0,0,1);

console.log('wood needed',wood);


/**
 * shirt price --> 500
 * 
 * 
 * pant price--->300
 * 
 * 
 * shoe price --> 900
 * 
 */