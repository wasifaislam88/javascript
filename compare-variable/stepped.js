/******multiple level condition */


const price =5000;
//10% discount

if(price >= 5000){

    const discount=price *10 /100;

    const payamount=price -discount;
    
    console .log(payamount);


}
//5% discount
else if(price >2500){
    const discount=price *5/100;

    const payamount = price-discount;

    console.log(payamount);
}

else{

    console.log(price);
}