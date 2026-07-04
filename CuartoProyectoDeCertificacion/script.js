class BankAccount{
    constructor() {
        this.balance = 0
        this.transactions = []
    }
    deposit(amount) {
        if (amount > 0) {
            this.transactions.push({ type: "deposit", amount: amount });
            this.balance += amount;
            return `Successfully deposited $${amount}. New balance: $${this.balance}`;
        } else {
            return "Deposit amount must be greater than zero.";
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.transactions.push({ type: "withdraw", amount: amount });
            this.balance -= amount;
            return `Successfully withdrew $${amount}. New balance: $${this.balance}`;
        } else {
            return "Insufficient balance or invalid amount.";
        }
    }
    checkBalance() {
        return `Current balance: $${this.balance}`;
    }
    listAllDeposits() {
        const transactionFilter = this.transactions.filter(transaction => transaction.type === "deposit");
        const montos = transactionFilter.map((t) => {
            return t.amount
        }).join(',')
        return `Deposits: ${montos}`;
    }
    listAllWithdrawals() {
        const transactionFilter = this.transactions.filter(transaction => transaction.type === "withdraw");
        const montos = transactionFilter.map((t) => {
            return t.amount
        }).join(',')
        return `Withdrawals: ${montos}`;
    }
}
const myAccount = new BankAccount()
myAccount.deposit(200);   
myAccount.deposit(150);   
myAccount.withdraw(50);  
myAccount.withdraw(30);   
myAccount.deposit(100);   