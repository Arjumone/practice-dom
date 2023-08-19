document.getElementById('calculate-btn').addEventListener('click',function(){
    const incomeInput = inputField('income');
    const foodInput = inputField('food');
    const rentInput = inputField('rent');
    const clothesInput = inputField('clothes');

    const totalExpenses = foodInput + rentInput + clothesInput;
   
    const balance = incomeInput -totalExpenses;

    setBtn('total-expenses', totalExpenses);
    setBtn('balance',balance);
});
function saveClick(target){
    const balanceInput = elementField('balance');
    const saveDiscount = inputField('save');
    const savingAmount = balanceInput  * saveDiscount / 100;
    const remainingBalance = savingAmount -balanceInput;
    setBtn('saving-amount', savingAmount);
    setBtn('remaining-balance', remainingBalance)
}