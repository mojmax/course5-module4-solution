(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http','RestaurantBasePath']
  function MenuDataService($http,restaurantBasePath) {
    var service = this;

    service.getAllCategories = function () {

      var response = $http({
        method: "GET",
        url: (restaurantBasePath + "/categories.json")
      });
      return response;
    };

    service.getItemsForCategory = function (categoryShortName) {
      var response = $http({
        method: "GET",
        url: (restaurantBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      });
      return response;
    };
  };
})();
