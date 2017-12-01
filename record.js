var Record = function(artist, title, genre, price){
  this.artist = artist;
  this.title = title;
  this.genre = genre;
  this.price = price;
}

Record.prototype = {

  printProperties: function(record){
    var string = ('Artist: ' + record.artist + ', Title: ' + record.title + ', Genre: ' + record.genre + ', Price: ' + record.price);
    return string;
  }

}

module.exports = Record;
