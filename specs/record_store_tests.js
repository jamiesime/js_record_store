var assert = require('assert');
var RecordStore = require("../record_store.js");
var Record = require("../record.js");

describe("RecordStore", function(){
var store1;

  beforeEach(function(){
    store1 = new RecordStore("Bobo Sound", "Bingo City", 10000);
    record1 = new Record("The Wiggles", "Wiggle Time", "Good Times", 1500);
    record2 = new Record("Dr Dre", "Dr Dre's Here My Friends", "Good Times", 1800);
    record3 = new Record("Doom Crew", "The End Is Here", "Bad Times", 750);
  });

  it("should have a name", function(){
    assert.strictEqual(store1.name, "Bobo Sound");
  });

  it("should have a city", function(){
    assert.strictEqual(store1.city, "Bingo City");
  });

  it("should have an empty inventory", function(){
    assert.strictEqual(store1.inventory.length, 0);
  });

  it("should have an initial balance of 10000", function(){
    assert.strictEqual(store1.balance, 10000);
  });

  it("should be able to add records to inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.strictEqual(store1.inventory.length, 2);
  });

  it("should list inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.strictEqual(store1.listInventory(), "1. Wiggle Time by The Wiggles 2. Dr Dre's Here My Friends by Dr Dre ");
  });

  it("should sell records", function(){
    store1.addRecord(record1);
    store1.sellRecord(record1);
    assert.strictEqual(store1.balance, 11500);
    assert.strictEqual(store1.inventory.length, 0);
  });

  it("should report on current balance and value of inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.strictEqual(store1.finances(), "Funds: 10000, Inventory Value: 3300");
  });

  it("should return all records in inventory by genre", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    store1.addRecord(record3);
    assert.strictEqual(store1.findByGenre("Bad Times"), "1. The End Is Here by Doom Crew");
  });

  it("should calculate the total value of collection", function(){
    
  });



});
