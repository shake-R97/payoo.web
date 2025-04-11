handleToggle("transection-history", 'none');


document.getElementById('transaction-btn')
.addEventListener('click',function(){

    handleToggle('add-monetary', 'none')
    handleToggle('cash-out', 'none')
    handleToggle("transection-history", 'block');
})