function inputField(inputId){
    const inputField = document.getElementById(inputId);
    const inputValueString = inputField.value;
    const inputValue = parseFloat(inputValueString);
    inputField.value = '';
    return inputValue;
}
function elementField(elementId){
    const elementField = document.getElementById(elementId);
    const elementTextString = elementField.innerText;
    const elementInnerText = parseFloat(elementTextString);
    elementField.value = '';
    return elementInnerText;
}
function setBtn(btnId,newValue){
    const btnElement = document.getElementById(btnId);
    btnElement.innerText = newValue;

}
document.getElementById('btn-deposit').addEventListener('click',function(){
    const newDepositInput = inputField('input-deposit');
    const previousTotal = elementField('deposit');
    const totalElement = previousTotal + newDepositInput;
    setBtn('deposit',totalElement);
    const previousBalanceTotal = elementField('total-balance');
    const balanceTotal = previousBalanceTotal + newDepositInput;
    setBtn('total-balance',balanceTotal);
});
document.getElementById('btn-withdraw').addEventListener('click',function(){
    const newWithdrawInput = inputField('input-withdraw');
    const previousTotal = elementField('withdraw');
    const totalElement = previousTotal + newWithdrawInput;
    setBtn('withdraw',totalElement);
    const previousBalanceTotal = elementField('total-balance');
    const balanceTotal = previousBalanceTotal - newWithdrawInput;
    setBtn('total-balance',balanceTotal);
});
document.getElementById('geometry').addEventListener('click',function(){
    window.location.href= 'geometry.html'
})

