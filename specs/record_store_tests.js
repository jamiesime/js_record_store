var assert = require('assert');
var RecordStore = require("../record_store.js");

describe("RecordStore", function(){
var store1;

  beforeEach(function(){
    store1 = new RecordStore("Bobo Sound", "Bingo City");
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

});
