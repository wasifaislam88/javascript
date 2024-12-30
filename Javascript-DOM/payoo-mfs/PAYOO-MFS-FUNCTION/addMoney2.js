document.getElementById('btn-add-money').addEventListener('click',function (event){

    event.preventDefault();


    const addMoney = getInputFieldValueById('input-add-money');
    const pinNumber = getInputFieldValueById('input-pin-number');
    // console.log('add money inside addMoney2.js', addMoney,pinNumber);

    //wrong way to to verigy.do not try it at your serious website

    if(pinNumber === 1234){
        const balance = getInputFieldValueById('account-balance');
        // console.log(balance,addMoney);
        const newBalance = balance + addMoney;

        document.getElementById('account-balance').innerText = newBalance;

        //add to trnsection history
        const p = document.createElement('p');
        p.innerText = `added:${addmoney} tk.balance: ${newBalance}`;
        console.log('p');

        //should be a commmon function

        document.getElementById('transection-container').appendChild(p);
    }

    else{
        alert('Failed to add the money.')
    }
});