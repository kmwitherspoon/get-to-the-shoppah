(function () {
  "use strict";
  angular
    .module('grinch')
    .factory('GrinchService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/grinch';

      var addItem = function (newItem) {
        $http.post(url, newItem).then(function (res) {
          console.log(res);
        });
      };

      var getItems = function () {
        return $http.get(url);
      };
      var deleteItem = function (items) {
        console.log("deleteItem");
        $http.delete(url + "/" + items._id);
      };


      return {
        createItem: addItem,
        getItems: getItems,
        deleteItem: deleteItem
      };

    })

    .factory('ConsumerService', function ($http) {
      var url = 'http://tiny-tiny.herokuapp.com/collections/consumer';

      var addCartItem = function (newItem) {
        $http.post(url, newItem).then(function (res) {
          console.log(res);
        });
      };

      var getCartItems = function () {
        return $http.get(url);
      };

      var deleteCartItem = function (items) {
        console.log("deleteCartItem");
        $http.delete(url + "/" + items._id);
      };

    //   var caculateTotal = function (items) {
    //     total = 0;
    //     total += items;
    //     return total;
    //   };
    //
    //   it('should click ng-show / ng-hide', function() {
    //   expect(mustShow.isDisplayed()).toBeFalsy();
    //   expect(thumbsDown.isDisplayed()).toBeTruthy();
    //
    //   element(by.model('mustShow')).click();
    //
    //   expect(thumbsUp.isDisplayed()).toBeTruthy();
    //   expect(thumbsDown.isDisplayed()).toBeFalsy();
    // });

      return {
        createCartItem: addCartItem,
        getCartItems: getCartItems,
        deleteCartItem: deleteCartItem
      };

    });
})();
