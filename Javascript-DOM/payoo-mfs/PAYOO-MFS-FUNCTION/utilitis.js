// console.log('utilitis file added');


/**
 * common shared function here
 * console.log('utilities loadedd)
 */

// function getInputFieldValueById(){

//     console.log('will get value by id');
//     const addMoney = document.getElementById('input-add-money').ariaValueMax;
//     return addMoney;
// }


function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    return inputValue;
}