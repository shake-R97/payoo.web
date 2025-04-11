document.getElementById('cash-out').style.display = 'none';



document.getElementById('out-cash')
.addEventListener('click' , function(){
    document.getElementById('cash-out').style.display = 'block';
    document.getElementById('add-monetary').style.display = 'none';
   
})

document.getElementById('money-adds')
.addEventListener('click' , function(){
    document.getElementById('add-monetary').style.display = 'block';
    document.getElementById('cash-out').style.display = 'none';
    
})