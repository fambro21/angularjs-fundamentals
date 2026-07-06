(function () {
  const app = angular.module("BuiltInFilterApp", []);
  app.controller("DemoController", function ($scope, $filter) {
    $scope.name = "Ari Lerner";
    $scope.lowercaseName = $filter("lowercase")("Ari");
    $scope.today = new Date();
    $scope.isCapitalized = function (str) {
      return str[0] == str[0].toUpperCase();
    };
  });
})();
