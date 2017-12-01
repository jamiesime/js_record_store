var assert = require('assert');
var Record = require('../record.js');

describe('Record', function(){

  beforeEach(function(){
    record1 = new Record("Zola Jesus", "Okiva", "Goth Pop", 1000);
  });

  it("should have an artist", function(){
    assert.strictEqual(record1.artist, "Zola Jesus");
  })


});
