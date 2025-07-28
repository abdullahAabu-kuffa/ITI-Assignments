//create bank account
function BankAccount(owner, initialBalance) {
    try {
        if (typeof owner !== "string" || owner.trim() === "") {
            throw new Error("Owner name must be a non-empty string.");
        }
    } catch (error) {
        console.log(error.message)
    }
    let balance = initialBalance || 0;
    let transactions = [];
    this.owner = owner;
    this.deposit = function (amount) {
        try {
            if (typeof amount !== "number" || amount <= 0) {
                throw new Error("Amount NOT Valid!");
            }
            if ((balance + amount) > 30000) {
                throw new Error("Balance limit exceeded!");
            }
            balance += amount;
            logTransaction("+", amount);

        } catch (error) {
            console.error("deposit error:", error.message);
        }
    }
    this.withdraw = function (amount) {
        try {
            if (typeof amount !== "number" || amount <= 0) {
                throw new Error("Amount NOT Valid!");
            }
            if ((balance - amount) < 0) {
                throw new Error("Balance NOT Enough!");
            }
            balance -= amount;
            logTransaction("-", amount);
        } catch (error) {
            console.error("withdraw error:", error.message);
        }
    }
    this.getBalance = function () {
        return `Balance: ${balance}`;
    }
    this.getStatement = function () {
        return "transactions:[ " + transactions + " ]";
    }
    function logTransaction(type, amount) {
        transactions.push(type + amount);
    }
    // bonus======================
    this.tranferTo = function (account, amount) {
        try {
            if (!(account instanceof BankAccount)) {
                throw new Error("Target is NOT a BankAccount!");
            }
            this.withdraw(amount);
            account.deposit(amount);
        }
        catch (error) {
            console.error("transfer error:", error.message);
        }
    }
}
const bank1 = new BankAccount("Abdullah", 0);
const bank2 = new BankAccount("Ahmed", 0);
const bank3 = new BankAccount("Ali", 0);
bank1.deposit(2000)
bank2.deposit(2000)

console.log(bank1.getBalance())
console.log(bank2.getBalance())
bank1.tranferTo(bank2, 200);
console.log(bank1.getBalance())
console.log(bank2.getBalance())

console.log(bank1.getStatement())
console.log(bank2.getStatement())


// const acc1 = new BankAccount("Alice", 1000);
// acc1.deposit(500);
// acc1.withdraw(200);
// console.log(acc1.getBalance());        // 1300
// console.log(acc1.getStatement());      // ["+500", "-200"]
// console.log(acc1.balance);             // undefined
// acc1.balance = 999999;                 // Has no effect
// console.log(acc1.getBalance());        // 1300


