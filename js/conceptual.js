// let total = 0;
// function handleClickBtn(target){
// const selectCart = document.getElementById('selected-item');
// // console.log(selectCart);
// const cartName = target.parentNode.childNodes[1].innerText;
// // console.log(cartName);
// const li = document.createElement('li');
// li.innerHTML = cartName;
// selectCart.appendChild(li);
// const price = target.parentNode.parentNode.childNodes[3].innerText.split(' ')[1];
// // console.log(price);
// total = parseInt(total) + parseInt(price);
// document.getElementById('total').innerText=total;
// } 

// 2nd system
let priceOneTotal = 0
document.getElementById('btn-one').addEventListener('click',function(){
    const priceElement = elementField('price-one')
    priceOneTotal = priceOneTotal + priceElement
    const totalPriceOne = document.getElementById('total').innerText = priceOneTotal + priceTwoTotal + priceThreeTotal;
     const discountElementText = elementField('discount')
    document.getElementById('grand-total').innerText = totalPriceOne *discountElementText / 100
});
let priceTwoTotal = 0
document.getElementById('btn-two').addEventListener('click',function(){
    const priceElementTwo = elementField('price-two');
    priceTwoTotal = priceTwoTotal + priceElementTwo;
    const totalPriceTwo = document.getElementById('total').innerText = priceOneTotal + priceTwoTotal + priceThreeTotal;
    const discountElementText = elementField('discount')
   document.getElementById('grand-total').innerText = totalPriceTwo *discountElementText / 100
});
let priceThreeTotal = 0
document.getElementById('btn-three').addEventListener('click',function(){
    const priceElementThree = elementField('price-three')
    priceThreeTotal = priceThreeTotal + priceElementThree;
     const totalPriceThree = document.getElementById('total').innerText = priceOneTotal + priceTwoTotal + priceThreeTotal;
     const discountElementText = elementField('discount')
    document.getElementById('grand-total').innerText = totalPriceThree *discountElementText / 100
});
document.getElementById('money').addEventListener('click',function(){
    window.location.href ='moneyMaster.html';
})