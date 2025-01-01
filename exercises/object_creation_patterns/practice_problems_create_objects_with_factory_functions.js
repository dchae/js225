"use strict";

// 1.
// - Each object created by a factory function has its own copy of all its
//   methods, which is memory inefficient.
// - It is difficult to determine whether an object was created by a
//   particular factory function.

// 2.
function makeObj() {
  return {
    propA: 10,
    propB: 20,
  };
}

// 3.
function createInvoice({ phone, internet } = {}) {
  return {
    phone: phone ?? 3000,
    internet: internet ?? 5500,
    paid: 0,
    total() {
      return this.phone + this.internet;
    },
    addPayment(payment) {
      this.addPayments([payment]);
    },
    addPayments(payments) {
      let total = paymentTotal(payments);
      this.paid += total;
    },
    amountDue() {
      return this.total() - this.paid;
    },
  };
}

function invoiceTotal(invoices) {
  let total = 0;
  let i;

  for (i = 0; i < invoices.length; i += 1) {
    total += invoices[i].total();
  }

  return total;
}

let invoices = [];
invoices.push(createInvoice());
invoices.push(
  createInvoice({
    internet: 6500,
  }),
);

invoices.push(
  createInvoice({
    phone: 2000,
  }),
);

invoices.push(
  createInvoice({
    phone: 1000,
    internet: 4500,
  }),
);

console.log(invoiceTotal(invoices)); // => 31000

// 4.
function createPayment({ internet, phone, amount } = {}) {
  return {
    internet,
    phone,
    amount,
    total() {
      return this.amount ?? (this.internet ?? 0) + (this.phone ?? 0);
    },
  };
}

function paymentTotal(payments) {
  let total = 0;
  let i;

  for (i = 0; i < payments.length; i += 1) {
    total += payments[i].total();
  }

  return total;
}

let payments = [];
payments.push(createPayment());
payments.push(
  createPayment({
    internet: 6500,
  }),
);

payments.push(
  createPayment({
    phone: 2000,
  }),
);

payments.push(
  createPayment({
    phone: 1000,
    internet: 4500,
  }),
);

payments.push(
  createPayment({
    amount: 10000,
  }),
);

console.log(paymentTotal(payments)); // => 24000

// 5.
let invoice = createInvoice({
  phone: 1200,
  internet: 4000,
});

let payment1 = createPayment({
  amount: 2000,
});

let payment2 = createPayment({
  phone: 1000,
  internet: 1200,
});

let payment3 = createPayment({
  phone: 1000,
});

invoice.addPayment(payment1);
invoice.addPayments([payment2, payment3]);
console.log(invoice.amountDue()); // this should return 0
