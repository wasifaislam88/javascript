document.getElementById('show-add-money-form').addEventListener('click',function(event){
    // event.preventDefault();
    console.log('show add money button clicked');

    showSectionById('add-money-form');
});

document.getElementById('show-cash-out-form').addEventListener('click',function(){
    showSectionById('cash-out-form');
});


document.getElementById('show-transection-history').addEventListener('click',function(){
    showSectionById('transection-section');
});


