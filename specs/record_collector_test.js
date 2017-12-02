var assert = require("assert");
var RecordCollector = require("../record_collector.js");
var RecordStore = require("../record_store.js");
var Record = require("../record.js");

describe("RecordCollector", function(){
var rc1;


  beforeEach(function(){
    rc1 = new RecordCollector(5000);
    store1 = new RecordStore("Sound Area", "Cairo", 8000);
    record1 = new Record("The Wiggles", "Wiggle Time", "Good Times", 1500);
    record2 = new Record("Dr Dre", "Dr Dre's Here My Friends", "Good Times", 1800);
    record3 = new Record("Doom Crew", "The End Is Here", "Bad Times", 750);
  });

  it("should buy records", function(){
    store1.addRecord(record1);
    rc1.buyRequest(record1, store1);
    assert.strictEqual(rc1.collection[0].title, "Wiggle Time");
  });

  it("should sell records", function(){
    rc1.addRecord(record2);
    rc1.sellRecord(record2, store1);
    assert.strictEqual(rc1.collection.length, 0);
    assert.strictEqual(rc1.funds, 6800);
  });

  it("should calculate the total value of collection", function(){
    rc1.addRecord(record1);
    rc1.addRecord(record2);
    rc1.addRecord(record3);
    assert.strictEqual(rc1.calculateCollectionValue(), 4050);

  });

  it("should return value of all records with given genre", function(){
    rc1.addRecord(record1);
    rc1.addRecord(record2);
    rc1.addRecord(record3);
    assert.strictEqual(rc1.calculateGenreValue("Good Times"), 3300);
  });

  it("should find most valuable record in collection", function(){
    rc1.addRecord(record1);
    rc1.addRecord(record2);
    rc1.addRecord(record3);
    assert.strictEqual(rc1.findMostValuable(), record2);
  });

  it("should be able to sort records by price", function(){
    rc1.addRecord(record1);
    rc1.addRecord(record2);
    rc1.addRecord(record3);
    assert.deepEqual(rc1.sortByPrice("asc"), [record3, record1, record2]);
  });


})
