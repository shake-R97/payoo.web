document.getElementById('cash-btn')
.addEventListener('click', function(event){
    const pin = document.getElementById('cashout-pin').value;
    const figures = document.getElementById('cash-out-figures').value;
    const convertFigures = parseFloat(figures);
    const balanceM = document.getElementById('balance-main').innerText;
    const convertBalanceM = parseFloat(balanceM);
    const numberAccount = document.getElementById("account-number").value;

    
    if( convertFigures > convertBalanceM){
        alert('Invaild Amount Figures');
        return;
    }

    if(pin === '9797Z'){
        const sum = convertBalanceM - convertFigures;
        const newBalance = document.getElementById('balance-main').innerText =  sum;




        const transactionCon = document.getElementById("transection-history");

        
        const p = document.createElement('p');
        p.innerText = `
        Cash Outed Taka $${figures} from this Account No : ${numberAccount}
        `
        transactionCon.appendChild(p)

    }
    else{
        alert("Wrong Credential's or Password");
    }
})