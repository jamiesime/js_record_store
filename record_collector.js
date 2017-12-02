var RecordCollector = function(funds){
  this.funds = funds;
  this.collection = [];
}

RecordCollector.prototype = {

  buyRequest: function(title, store){
    if(store.inventory.includes(title)){
      if(this.funds > title.price){
        this.collection.push(title);
        this.funds -= title.price;
        store.sellRecord(title);
      }
      else {
        return "Not enough money!";
      }
    }
    else {
      return "Not in stock!";
    }
  }

}



module.exports = RecordCollector;
