(function () {
  angular
    .module("ngIsolateScopeApp", [])
    .directive("myDirective", function () {
      return {
        restrict: "A",
        scope: {},
      };
    })
    .directive("myInheritScopeDirective", function () {
      return {
        restrict: "A",
        scope: true,
      };
    });
})();
