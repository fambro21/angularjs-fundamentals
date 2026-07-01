(function () {
  const app = angular.module("basicApp", []);
  app.controller("MyController", function ($scope) {
    $scope.person = {
      name: "Ari Lerner",
    };
  });
})();
