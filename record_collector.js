var _ = require("lodash");

var RecordCollector = function(funds){
  this.funds = funds;
  this.collection = [];
}

RecordCollector.prototype = {

  addRecord: function(newRecord){
    this.collection.push(newRecord);
  },

  buyRequest: function(record, store){
    if(store.inventory.includes(record)){
      if(this.funds > record.price){
        this.collection.push(record);
        this.funds -= record.price;
        store.sellRecord(record);
      }
      else {
        return "Not enough money!";
      }
    }
    else {
      return "Not in stock!";
    }
  },

  sellRecord: function(record, store){
    if(store.balance > record.price){
      store.addRecord(record);
      store.balance -= record.price;
      var index = this.collection.indexOf(record);
      this.collection.splice(index, 1);
      this.funds += record.price;
    }
    else {
      return "They don't have enough money!";
    }
  },

  calculateCollectionValue: function(){
    var total = 0;
    for(record in this.collection){
      total += this.collection[record].price;
    }
    return total;
  },

  calculateGenreValue: function(calcGenre){
    var total = 0;
    for(record in this.collection){
      if (this.collection[record].genre === calcGenre){
        total += this.collection[record].price;
      }
    }
    return total;
  },

  findMostValuable: function(){
    maxValue = 0;
    var maxRecord;
    for(record in this.collection){
      if(this.collection[record].price > maxValue){
        maxValue = this.collection[record].price;
        maxRecord = this.collection[record];
      }
    }
    return maxRecord;
  },

  sortByPrice: function(order){
    var newOrder = _.orderBy(this.collection, ["price"], [order]);
    this.tasks = newOrder;
    return newOrder;
  }


}



module.exports = RecordCollector;
