var RecordStore = function(name, city, balance){
  this.name = name;
  this.city = city;
  this.balance = balance;
  this.inventory = [];
}

RecordStore.prototype = {

  addRecord: function(newRecord){
    this.inventory.push(newRecord);
  },

  listInventory: function(){
    var inventoryString = "";
    var listNumber = 1;
    for (record in this.inventory){
       inventoryString += listNumber + ". " + this.inventory[record].title + " by " + this.inventory[record].artist + " ";
       listNumber++;
    }
    return inventoryString;
  },

  sellRecord: function(record){
    var index = this.inventory.indexOf(record);
    this.inventory.splice(index, 1);
    this.balance += record.price;
  },

  finances: function(){
    var value = 0;
    for(record in this.inventory){
      value += this.inventory[record].price;
    }
    return "Funds: " + this.balance + ", Inventory Value: " + value;
  },

  findByGenre: function(genre){
    var matches = "";
    var listNum = 1;
    for(record in this.inventory){
      if (this.inventory[record].genre === genre){
        matches += (listNum + ". " + this.inventory[record].title + " by " + this.inventory[record].artist);
        listNum++;
      }
    }
    return matches;
  }

}

module.exports = RecordStore;
