const age =17;

const price =500;

if (age >=60){

    console.log('you can eat for free');

}

else if (age >=60){
    //50% discount

    const discount = price*50 /100;
    const payamount = price - discount;

    console .log(payamount);
}

else{

    console.log(price)
}

