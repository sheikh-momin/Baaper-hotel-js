document.getElementById('deposit-button').addEventListener('click', function(){
  const depositField = document.getElementById('deposit-input')
  const newDepositString = depositField.value;
  const newDeposit = parseFloat(newDepositString);

  depositField.value = '';
  if(isNaN(newDeposit)){
    alert('Please provide a valid number!')
  }

  const depositTotal = document.getElementById('deposit-total')
  const previousDepositTotalString = depositTotal.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotalString);
  depositTotal.innerText = previousDepositTotal + newDeposit;

  const balanceTotal = document.getElementById('balance-total')
  const balanceTotalString = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalString);
  balanceTotal.innerText = previousBalanceTotal + newDeposit;
  


  
})


document.getElementById('withdraw-button').addEventListener('click', function(){
  const withdrawField = document.getElementById('withdraw-input')
  const newWithdrawString = withdrawField.value;
  const newWithdraw = parseFloat(newWithdrawString);

  withdrawField.value = '';
  if(isNaN(newWithdraw)){
    alert('Please provide a valid number!')
  }

  const withdrawTotal = document.getElementById('withdraw-total')
  const previousWithdrawTotalString = withdrawTotal.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
  withdrawTotal.innerText = previousWithdrawTotal + newWithdraw;

  const balanceTotal = document.getElementById('balance-total')
  const balanceTotalString = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalString);
  balanceTotal.innerText = previousBalanceTotal - newWithdraw;
  


  withdrawField.value = ''
})