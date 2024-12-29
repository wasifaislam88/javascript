
/**
 * 
 * 
 * 1. add event listener to the add money button (form submit)
 * 
 * make sure to preventdefault so that page does'nt reloads
 * 
 * 2.get the money user wants to add
 * 
 * also,get the pin number provided
 * 
 * 3.verify the pin number.for,wrong pibn number ==> failed to add for right pin number,allow to addd  the number to the account balance
 * 
 * 4.get the current balance 
 * 
 * 5.add money to be added with the current balance
 * 
 * 
 * 6.display/update the balance in the dom/ui
 */

document.getElementById('button-add-money').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added the event handler');

    //get money and the pin number 


const addMoney = document.getElementById('input-add-money').value;
const pinNumber = document.getElementById('input-add-money').value;
// console.log(addMoney,pinNumber)

if(pinNumber === '1234'){
    //add money to the account

    const balance = document.getElementById('account-balance').innerText;
    // console.log(balance);
    const balanceNumber = parseFloat(balance);

    //new balance

    const newBalance = balanceNumber + addMoneyNumber;

    //update the dom with updated balance

    document.getElementById('account-balance').innerText = newBalance;

}
else{
    alert('failed to add money.please try again later.')
}
});


