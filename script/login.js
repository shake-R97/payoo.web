
document.getElementById('login-btn')
.addEventListener('click',function(event){
    event.preventDefault();

    const accountNumber = document.getElementById('account-number').value;
    
    const pin = document.getElementById('pin').value;


    if( accountNumber.length === 11){

        if(pin === '9797Z'){
            window.location.href="./main.html"
        }
        else {
            alert('Wrong Password');
        }
    }
    else {
        alert('No Access - Wrong Credentials! (Check AC Number Again)')
    }
})


