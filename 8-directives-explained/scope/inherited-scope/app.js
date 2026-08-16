(function () {
  angular
    .module("inheritedApp", [])
    .controller("SomeController", function ($scope) {})
    .controller("SecondController", function ($scope) {})
    .directive("myDirective", function () {
      return {
        restrict: "A",
        scope: true,
      };
    });
})();
