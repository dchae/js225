"use strict";

let invoices = {
  unpaid: [],
  paid: [],

  add(name, amount) {
    this.unpaid.push({ name, amount });
  },

  totalDue() {
    return this.unpaid.reduce((acc, { amount }) => acc + amount, 0);
  },

  totalPaid() {
    return this.paid.reduce((acc, { amount }) => acc + amount, 0);
  },

  payInvoice(name) {
    let newUnpaid = [];
    for (let invoice of this.unpaid) {
      if (invoice.name === name) this.paid.push(invoice);
      else newUnpaid.push(invoice);
    }
    this.unpaid = newUnpaid;
  },
};

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.5);
invoices.add("Slough Digital", 300);

console.log(invoices);
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
console.log(invoices.totalPaid());
console.log(invoices.totalDue());
