var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){
var record1;

  beforeEach(function(){
    record1 = new Record("Zola Jesus", "Okiva", "Goth Pop", 1000);
  });

  it("should have an artist", function(){
    assert.strictEqual(record1.artist, "Zola Jesus");
  })

  it("should have a title", function(){
    assert.strictEqual(record1.title, "Okiva");
  });

  it("should have a genre", function(){
    assert.strictEqual(record1.genre, "Goth Pop");
  });

  it("should have a price", function(){
    assert.strictEqual(record1.price, 1000);
  });

  it("should print out properties as a string", function(){
    assert.strictEqual(record1.printProperties(record1),
    "Artist: Zola Jesus, Title: Okiva, Genre: Goth Pop, Price: 1000");
  });

});
