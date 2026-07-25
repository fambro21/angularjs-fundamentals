(function () {
  angular.module("ngHref", []).run(function ($rootScope, $timeout) {
    $timeout(function () {
      $rootScope.myHref = "http://google.com";
    }, 2000);
  });
})();
