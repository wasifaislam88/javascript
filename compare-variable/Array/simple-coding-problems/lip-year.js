

/***
 * year will be a leap year if the year is divisible by 4
 * 
 */


function isLeapYear (year){
    if(year % 4 === 0)
    {
        return true;
    }

    else{

        return false;

    }
}


const isLipi = isLeapYear(2043);

console.log(isLipi);

/***
 * 1. those year that is not divisble by 100,and  if the year is divisible by 4: 
 * than it will be a leap year
 * 
 * 2.if the year is divisible by 400, then it is a leap year
 * 
 * 3.else it is not a leap year
 */


function isLeapYear2(year){

    if (year % 100 !== 0 && year % 4 === 0){
        return true;
    }



    if(year % 100 === 0 && year % 400 === 0){
        return true;
    }

    else{
        return false;
    }
  
}


const isLeap = isLeapYear2(2100);

const isLeap2 = isLeapYear2(2400);

const isLeap3 = isLeapYear2(1900);

const isLeap4 = isLeapYear2(2052);

console.log(isLeap,isLeap2, isLeap3, isLeap4);


