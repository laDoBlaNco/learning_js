let myAccount = {
    name: 'ladoblanco',
    expenses: 0,
    income: 0
}

let addExpense = (account,total)=>{
    account.expenses+=total;
}
let addIncome = (account,amount)=>{
    account.income+=amount;
}
let resetAccount = (account)=>{
    account.income = 0;
    account.expenses = 0;
}
let getAccountSummary = (account)=>{
    return `Account for ${account.name} has $${account.income - account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`;
}

// addExpense(myAccount,2.50);
// console.log(myAccount);

addIncome(myAccount,1000);
addExpense(myAccount,75);
addExpense(myAccount,25);
let summary = getAccountSummary(myAccount);
console.log(summary);
resetAccount(myAccount);
summary = getAccountSummary(myAccount);
console.log(summary);


