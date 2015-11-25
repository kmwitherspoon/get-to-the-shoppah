(function () {


  angular
    .module('grinch')
    .controller('MainController', function ($scope, GrinchService) {
      GrinchService.getItems().success(function (items) {
        console.log(items);
        $scope.allItems = items;
        });
        $scope.addItem = function (newItem) {
          console.log(newItem);
          GrinchService.createItem(newItem);
        };
        $scope.deleteItem = function (newItem) {
          console.log(newItem);
          GrinchService.deleteItem(newItem);
        };

    })
    .controller('ConsumerController', function ($scope, ConsumerService, GrinchService) {
      GrinchService.getItems().success(function (items) {
        console.log(items);
        $scope.allItems = items;
        });

      ConsumerService.getCartItems().success(function (items) {
        console.log(items);
        $scope.allCartItems = items;
      });
      $scope.addCartItem = function (newItem) {
        console.log(newItem);
        ConsumerService.createCartItem(newItem);
      };
      $scope.deleteCartItem = function (newItem) {
        console.log(newItem);
        ConsumerService.deleteCartItem(newItem);
      };
    });


})();
