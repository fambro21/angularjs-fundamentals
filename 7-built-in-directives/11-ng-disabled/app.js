(function () {
  angular.module("NgDisabled", []).run(function ($rootScope, $timeout) {
    $rootScope.isDisabled = true;
    $timeout(function () {
      $rootScope.isDisabled = false;
    }, 1000);
  });
})();
