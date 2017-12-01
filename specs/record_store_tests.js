var assert = require('assert');
var RecordStore = require("../record_store.js");
var Record = require("../record.js");

describe("RecordStore", function(){
var store1;

  beforeEach(function(){
    store1 = new RecordStore("Bobo Sound", "Bingo City", 10000);
    record1 = new Record("The Wiggles", "Wiggle Time", "Good Times", 1500);
    record2 = new Record("Dr Dre", "Dr Dre's Here My Friends", "Good Times", 1800);
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

  it("should have a balance of 10000", function(){
    assert.strictEqual(store1.balance, 10000);
  });

  it("should be able to add records to inventory", function(){
    store1.addRecord(record1);
    store1.addRecord(record2);
    assert.strictEqual(store1.inventory.length, 2);
  });



});
