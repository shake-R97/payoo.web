 // log out btn

 document.getElementById("log-off")
 .addEventListener('click', function () {
     window.location.href='./index.html'
 })


document.getElementById('add-money-btn')
.addEventListener('click', function(event){
    event.preventDefault();
    const numberAccount = document.getElementById("account-number").value;
    const addAmount = document.getElementById('add-figures').value;
    const convertedAddAmount = parseFloat(addAmount);
    const mainBalance = document.getElementById('balance-main').innerText;
    const convertedMainBalance = parseFloat(mainBalance);
    const pin = document.getElementById('pin').value;
    
    if(addAmount < 0 ){
        alert('Invalid Amount');
        return;
    }

    if( pin === "9797Z") {

        const newAmount = convertedMainBalance + convertedAddAmount;
        const newBalance = document.getElementById('balance-main').innerText = newAmount;



        const p = document.createElement('p');
        p.innerText = `
        Added Taka $${addAmount} from this Account No : ${numberAccount}
        `
        const transactionCon = document.getElementById("transection-history");
        transactionCon.appendChild(p)


    }
    else {
        alert('Wrong Password');
    }
})