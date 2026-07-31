(function () {
  angular
    .module("ngRepeatApp", [])
    .controller("PeopleController", function ($scope) {
      $scope.people = [
        { name: "Ari", city: "San Francisco" },
        { name: "Erik", city: "Seattle" },
      ];
    });
})();
