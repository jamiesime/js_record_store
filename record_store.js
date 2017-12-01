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

  listInventory: function(store){
    var inventoryString = "";
    var inventory = store.inventory;
    var listNumber = 1;
    for (record in inventory){
       inventoryString += listNumber + ". " + inventory[record].title + " by " + inventory[record].artist + " ";
       listNumber++;
    }
    return inventoryString;
  }

}

module.exports = RecordStore;
