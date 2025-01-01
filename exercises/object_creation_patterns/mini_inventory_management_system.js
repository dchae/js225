"use strict";

// item creator
// - validate input
//  - SKU code
//    - first 3 letters of item name, first 2 letters of category
//  - Item name
//    - length without spaces >= 5
//  - Category
//    - cannot contain spaces
//    - length >= 5
//  - Quantity
//    - cannot be empty
//    - assume valid number will be provided
//  - return {notValid: true}

const ItemCreator = {
  validName(name) {
    return name.replace(/\s/g, "").length > 4;
  },

  validCategory(category) {
    return !/\s/.test(category) && category.length > 4;
  },

  validate(name, category, quantity) {
    return (
      this.validName(name) &&
      this.validCategory(category) &&
      quantity !== undefined
    );
  },

  generateSKU(name, category) {
    return (
      name.replace(/\s/g, "").slice(0, 3) + category.slice(0, 2)
    ).toUpperCase();
  },

  create(name, category, quantity) {
    if (!this.validate(name, category, quantity)) return { notValid: true };

    const SKUCode = this.generateSKU(name, category);
    const item = {
      SKUCode,
      name,
      category,
      quantity,
    };
    return Object.defineProperty(item, "toString", {
      value: function () {
        return this.name;
      },
      enumerable: false,
    });
  },
};

// item manager
// - this.items = [...items]
//
// - create()
// - update(SKUCode, obj)
// - delete(SKUCode)
// - inStock()
//    - logs all items with quantity > 0
// - itemsInCategory(category)
//    - logs all items for a category

const ItemManager = {
  items: [],

  getItemIndex(SKUCode) {
    return this.items.findIndex((item) => item.SKUCode === SKUCode);
  },

  getItem(SKUCode) {
    return this.items[this.getItemIndex(SKUCode)];
  },

  create(name, category, quantity) {
    const newItem = ItemCreator.create(name, category, quantity);
    if (newItem.notValid) return false;

    return this.items.push(newItem);
  },

  update(SKUCode, updateObj) {
    Object.assign(this.getItem(SKUCode), updateObj);
  },

  delete(SKUCode) {
    this.items.splice(this.getItemIndex(SKUCode), 1);
  },

  inStock() {
    return this.items.filter(({ quantity }) => quantity > 0);
  },

  itemsInCategory(target) {
    return this.items.filter(({ category }) => category === target);
  },
};

// reports manager
// - this.items
//
// - init(itemManager) -> assigns itemManager to this.items
// - createReporter(SKUCode) -> returns report object
//    - Report { itemInfo(): log all properties of an object as k:v pairs }
// - reportInStock() -> log all item names for which quantity > 0

const ReportManager = {
  init(ItemManager) {
    this.items = ItemManager;
  },

  createReporter(SKUCode) {
    const item = this.items.getItem(SKUCode);
    return {
      itemInfo() {
        console.log(
          Object.entries(item)
            .map((entry) => entry.join(": "))
            .join("\n"),
        );
      },
    };
  },

  reportInStock() {
    console.log(this.items.inStock().join(","));
  },
};

ItemManager.create("basket ball", "sports", 0); // valid item
ItemManager.create("asd", "sports", 0);
ItemManager.create("soccer ball", "sports", 5); // valid item
ItemManager.create("football", "sports");
ItemManager.create("football", "sports", 3); // valid item
ItemManager.create("kitchen pot", "cooking items", 0);
ItemManager.create("kitchen pot", "cooking", 3); // valid item

console.log(ItemManager.items);
// returns list with the 4 valid items

ReportManager.init(ItemManager);
ReportManager.reportInStock();
// logs soccer ball,football,kitchen pot

ItemManager.update("SOCSP", { quantity: 0 });
console.log(ItemManager.inStock());
// returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// logs football,kitchen pot
console.log(ItemManager.itemsInCategory("sports"));
// returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete("SOCSP");
console.log(ItemManager.items);
// returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter("KITCO");
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 3

ItemManager.update("KITCO", { quantity: 10 });
kitchenPotReporter.itemInfo();
// logs
// skuCode: KITCO
// itemName: kitchen pot
// category: cooking
// quantity: 10
