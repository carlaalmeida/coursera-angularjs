(function () {
    'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];

function ToBuyController(ShoppingListCheckOffService) {
  var list = this;
  list.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

  list.buyItem = function(index) {
    ShoppingListCheckOffService.buyItem(index);
  };

}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];


function AlreadyBoughtController(ShoppingListCheckOffService) {
  var list = this;
  list.itemsBought = ShoppingListCheckOffService.getBoughtItems();
}


function ShoppingListCheckOffService() {
  var service = this;

// pre-defined list with items to buy
  var itemsToBuy = [
    {
      name: 'apples',
      quantity: '5'
    },
    {
      name: 'bananas',
      quantity: '3'
    },
    {
      name: 'strawberries',
      quantity: '2 boxes'
    },
    {
      name: 'chips',
      quantity: '1 small bag'
    },
    {
      name: 'cookies',
      quantity: '1 bag'
    },
  ];

  //empty list of items already bought
  var boughtItems = [];

  service.getItemsToBuy = function() {
    return itemsToBuy;
  }

  service.getBoughtItems = function() {
    return boughtItems;
  }

  service.buyItem = function(index){
    var item = itemsToBuy[index];
    boughtItems.push(item);
    itemsToBuy.splice(index, 1);

  }
}

})();
