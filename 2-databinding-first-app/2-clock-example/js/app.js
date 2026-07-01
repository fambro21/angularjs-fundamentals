(function () {
  const app = angular.module("clockApp", []);

  app.controller("MyController", function MyController($scope) {
    $scope.clock = {
      now: new Date(),
    };

    const updateClock = function () {
      $scope.clock.now = new Date();
    };

    setInterval(function () {
      $scope.$apply(updateClock);
    }, 1000);

    updateClock();
  });
})();
