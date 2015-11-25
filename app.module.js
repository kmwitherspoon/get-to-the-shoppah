(function () {
  "use strict";

  angular
    .module('grinch', [
      'ngRoute',
      'xeditable'
    ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/grinch/home.html',
          controller: 'MainController'
        })
        .when('/grinch', {
          templateUrl: 'views/grinch/admin/list.html',
          controller: 'MainController'
        })
        .when('/addItem', {
          templateUrl: 'views/grinch/admin/create.html',
          controller: 'MainController'
        })
        .when('/grinch/:placeId/edit', {
          templateUrl: 'views/grinch/admin/edit.html',
          controller: 'MainController'
        })
        .when('/grinchList', {
          templateUrl: 'views/grinch/customer/listConsumer.html',
          controller: 'ConsumerController'
        })
        .when('/grinchCart', {
          templateUrl: 'views/grinch/customer/cart.html',
          controller: 'ConsumerController'
        })
        .when('/grinchCheckout', {
          templateUrl: 'views/grinch/customer/checkout.html',
          controller: 'ConsumerController'
        })
        .when('/grinchList/:placeId', {
          templateUrl: 'views/grinch/show.html',
          controller: 'ConsumerController'
        })
        .when('/404', {
          templateUrl: 'views/404.html'
        })
        .otherwise({ redirectTo: '/404'})

    })
    .run(function(editableOptions) {
      editableOptions.theme = 'bs3';
    });




})();
