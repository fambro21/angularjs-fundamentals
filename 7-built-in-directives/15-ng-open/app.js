(function () {
  angular.module("NgOpenApp", []).controller("MainController", [
    "$scope",
    function MainController($scope) {
      $scope.open = false;
    },
  ]);
})();
