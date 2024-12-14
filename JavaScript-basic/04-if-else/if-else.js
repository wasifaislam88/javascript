// COMMENT: if, else if, else
/**


if (condition){
excute code if condition is true
}

else if (condition){
excute code if condition is true
}
else{
excute code if condition is false
}

*/

console.log('************ If else *****************')
const salary = 25000;
const isBCS = true;//boolean


console.log(isBCS);//true
console.log(typeof isBCS);//boolean

if (salary > 25000 && isBCS == true ){
    console.log('Su-------patro')
}
else{
    console.log('onno patro khuji')
}




console.log('************ (Complex condition) If else  *****************')
const phy = 60;
const math = 60;
const english = 60;
const isPass = true;
//IMPORTANT:
if ((phy > 50  && isPass == true) && math >=70){
    console.log('get a good job')
}
else{
    console.log('try next time');//try next time
}


console.log('************** if, else if, else  Multi Level *********************')

const price = 5000;

if (price >=5000){
    //Discount 10%
    const discount = price * 10 / 100;
    const payAmount = price - discount;
    console.log(discount);//print 500
    console.log(payAmount);//print 4500
}

else if(price >= 4000){
    //discount 5%
    const discount = price * 5 / 100;
    const payAmount = price - discount;
    console.log(discount);
    console.log(payAmount);
}

else{
    console.log('No Discount')
}



console.log('********** nested if-else condition **********')

const money = 500;

if (money >= 500){
    console.log('bro you are Rich')//bro you are Rich
}

else {
    if (money >= 400){
        console.log('bro you are Medium Rich')
    }
    else if ( money >= 200){
        console.log('bro you are not Rich')
    }
    else {
        if ( money >= 100){
            console.log('bro you are poor')
        }

        else{
            console.log('ja Vag')
        }
    }
}
