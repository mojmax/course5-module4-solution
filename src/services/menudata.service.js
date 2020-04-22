(function () {
  'use strict';

  angular.module('data')
  .service('MenuDataService', MenuDataService);


  MenuDataService.$inject = ['$http','ApiBasePath']
  function MenuDataService($http,apiBasePath) {
    var service = this;

    service.getAllCategories = function () {

      return $http({
        method: "GET",
        url: (apiBasePath + "/categories.json")
      })
      .then(function (response) {
         return response.data;
      });

    };

    service.getItemsForCategory = function (categoryShortName) {
      return $http({
        method: "GET",
        url: (apiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then( function (response) {
        return response.data;
      });
    };
  };
})();
