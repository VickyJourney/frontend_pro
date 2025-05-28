/*Створіть клас BankAccount, який буде представляти банківський рахунок. 
Додайте властивість балансу та методи для внесення та зняття грошей.*/

class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  deposit(amount) {
    if (amount < 0) {
      console.log("Amount should be a positive number to deposit it");
    } else {
      return (this.balance += amount);
    }
  }
  withdraw(amount) {
    if (amount > this.balance) {
      console.log("Not enough funds on the account");
    } else {
      return (this.balance -= amount);
    }
  }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); // 1000

account1.deposit(500);

console.log(account1.getBalance()); // 1500

account1.withdraw(200);

console.log(account1.getBalance()); // 1300
