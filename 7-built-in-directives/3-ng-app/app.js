(function () {
  angular.module("ngApp2", []).run(function ($rootScope) {
    $rootScope.someProperty = "hello computer";
    $rootScope.someAction = function () {
      $rootScope.someProperty = "hello human";
    };
  });
})();
