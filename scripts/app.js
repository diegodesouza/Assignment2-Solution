(function() {
  'use strict';

  angular
    .module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.buyItem = function(itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    }

    toBuy.items = ShoppingListCheckOffService.getAvailableItems();
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var bought = this;

    bought.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var boughtList = [];
    var toBuyList = [
      { name: "cookies",       quantity: 10 },
      { name: "bags of chips", quantity: 3 },
      { name: "sugary drinks", quantity: 10 },
      { name: "pepto bismol",  quantity: 2 }
    ];

    service.buyItem = function(itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

    service.getAvailableItems = function() {
      return toBuyList;
    };

    service.getBoughtItems = function() {
      return boughtList;
    };
  }
})();
