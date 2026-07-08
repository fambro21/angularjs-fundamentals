(function () {
  angular.module("directiveApp", []).directive("myDirective", function () {
    return {
      restrict: "A",
      replace: true,
      scope: {
        myUrl: "@someAttr",
        myLinkText: "@",
      },
      template: "<a href='{{myUrl}}'>{{myLinkText}}</a>",
    };
  });
})();
