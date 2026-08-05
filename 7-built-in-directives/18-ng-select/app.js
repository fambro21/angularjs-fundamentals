(function () {
  angular.module("ngSelectApp", []).controller("CityController", [
    "$scope",
    function CityController($scope) {
      $scope.cities = [
        { name: "Seattle" },
        { name: "San Francisco" },
        { name: "Chicago" },
        { name: "New York" },
        { name: "Boston" },
      ];
    },
  ]);
})();
