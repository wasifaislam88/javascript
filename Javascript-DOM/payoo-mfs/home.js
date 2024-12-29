

// console.log('home added')


//add money to the account
// s-1:add event hanlder prevent page reload after form submit
//s-2:get money to be added to the account balance
//s-3;verify the pin number

//step-1: add an event haldler to the money button inside the form

document.getElementById('button-add-money').addEventListener('click',function(event){
//prevent page reload after form submit 

event.preventDefault();
    // console.log('money add butch clicked');

    //step-2:get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value;

    console.log(addMoneyInput);

    //get the pin number provided

    const pinNumberInput = document.getElementById('pin-number').value;
    console.log(typeof pinNumberInput);

    //step- 3;verify pin number

    //wrong way to validate pin number

    if(pinNumberInput === '1234'){
        console.log('adding money to your account');

        //step-4;get the current balance

        const balance = document.getElementById('account-balance').innerText;
        
        console.log(typeof balance)


        //step-5:add addmoneyinput with balance
        // const newBalance = balance + addMoneyInput;
        const addMoneyNumber = parseFloat(addMoneyInput);

        const balanceNumber = parseFloat(balance);
        // console.log(typeof balanceNumber)
        
        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance);


        //step-6:update the balance in the UI/DOM

        document.getElementById('account-balance').innerText = newBalance;

    }

    else{
        alert('failed to add money! please try again.')
    }
});