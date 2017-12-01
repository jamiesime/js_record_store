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

}

module.exports = RecordStore;
