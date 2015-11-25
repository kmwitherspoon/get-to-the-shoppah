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
      function SumCtrl($scope) {

        $scope.total = function() {
          var total = 0;
          angular.forEach($scope.items, function(item) {
              total += item.count * item.price;
          })

          return total;
      }
    };
        });


})();
