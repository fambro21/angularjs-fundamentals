(function () {
  angular
    .module("clickDirectiveApp", [])
    .controller("CounterController", function ($scope) {
      $scope.count = 0;
      $scope.increment = function () {
        $scope.count = $scope.count + 1;
      };

      $scope.decrement = function () {
        $scope.count = $scope.count - 1;
      };
    });
})();
