(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/restaurant/templates/home.template.html'
  })

  // Categories
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/restaurant/templates/main-categories.template.html',
    controller: 'CategoriesController as categoriesCtrl',
    resolve: {
      categories: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.getAllCategories()
         .then(function (response) {
              return response.data;
           });

      }]
    }
  })
  .state('items',  {
    url:'/items/{shortname}',
    templateUrl: 'src/restaurant/templates/main-items.template.html',
    controller: 'ItemsController as itemsCtrl',
    resolve: {
      items: ['$stateParams','MenuDataService',
      function ($stateParams,MenuDataService) {
        return MenuDataService.getItemsForCategory($stateParams.shortname)
         .then(function (response) {
              return response.data.menu_items;
           });

      }]
    }
  });
  //
  // .state('categories.items', {
  //  url: '/items/{shortname}',
  //   templateUrl: 'src/restaurant/templates/items.template.html',
  //   controller: 'ItemsController as itemsCtrl',
  //   resolve: {
  //     categories: ['MenuDataService', function (MenuDataService) {
  //       var ret = MenuDataService.getAllCategories();
  //       return ret;
  //     }]
  //   }
  // })




}

})();
