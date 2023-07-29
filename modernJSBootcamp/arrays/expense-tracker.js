const account = {
    name: 'Kevin Whiteside',
    income: [],
    expenses: [],
    addIncome(desc,amount){
        this.income.push({description:desc,amount:amount})
    },
    addExpense(desc,amount){
        this.expenses.push({description:desc,amount:amount})
    },
    getAccountSummary(){
        let totalExpenses = 0;
        let totalIncome = 0;
        this.income.forEach(income=>totalIncome+=income.amount);
        this.expenses.forEach(expense=>totalExpenses+=expense.amount);
        let balance = totalIncome-totalExpenses;
        return `${this.name} has a balance of $${balance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;    
    }
}

account.addExpense('Rent',950);
account.addExpense('Coffee',2);
account.addIncome('Dev',10000);
console.log(account.getAccountSummary());


