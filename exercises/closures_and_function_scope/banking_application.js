"use strict";

// function makeAccount(number) {
//   return {
//     number,
//     balance: 0,
//     transactions: [],
//
//     deposit(amount) {
//       this.balance += amount;
//       this.transactions.push({ type: "deposit", amount });
//       return amount;
//     },
//
//     withdraw(amount) {
//       amount = Math.min(amount, this.balance);
//
//       this.transactions.push({ type: "withdraw", amount });
//       this.balance -= amount;
//       return amount;
//     },
//   };
// }

// private variables
function makeAccount(number) {
  let balance = 0;
  let transactions = [];

  return {
    number() {
      return number;
    },

    balance() {
      return balance;
    },

    transactions() {
      return transactions.slice();
    },

    deposit(amount) {
      balance += amount;
      transactions.push({ type: "deposit", amount });
      return amount;
    },

    withdraw(amount) {
      amount = Math.min(amount, balance);

      transactions.push({ type: "withdraw", amount });
      balance -= amount;
      return amount;
    },
  };
}

let generateAccountNumber = (() => {
  let start = 101;
  return () => start++;
})();

// function makeBank() {
//   return {
//     accounts: [],
//
//     openAccount() {
//       let newAccount = makeAccount(generateAccountNumber());
//       this.accounts.push(newAccount);
//       return newAccount;
//     },
//
//     transfer(source, destination, amount) {
//       return destination.deposit(source.withdraw(amount));
//     },
//   };
// }

// private variables
function makeBank() {
  let accounts = [];

  return {
    openAccount() {
      let newAccount = makeAccount(generateAccountNumber());
      accounts.push(newAccount);
      return newAccount;
    },

    transfer(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

let bank = makeBank();
let account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
let secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [{...}]

console.log(bank.accounts);
