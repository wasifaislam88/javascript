
document.getElementById('button-cash-out').addEventListener('click',function(event){
    event.preventDefault();

    const cashOut = getInputFieldValueById('input-cash-out');
    const pinNumber = getInputFieldValueById('input-cash-out-pin-number');
    // console.log('inside the click handler',cashOut,pinNumber)

    if(isNaN()){

        alert('Failed to cash out.');
        return;
    }

    if(pinNumber === 1234){
        const balance = getInputFieldValueById('account-balance');

        if(cashOut > balance){
            alert('you do not have enough money to cash out');
            return;
        }

     
        const newBalance = balance - cashOut;

        document.getElementById('account-balance').innerText = newBalance;

        //add to transaction history
        const div = document.createElement('div');
        div.classList.add('bg-yellow-300');
        div.innerHTML = `
        <h4 class = "text-2xl font-bold">Cash out</h4>
        <p>${cashOut} withdraw.New Balance ${newBalance}</p>
        `

        document.getElementById('transection-container').appendChild(div);
    }

    else{
        alert('no money for you....DGM.')
    }
})