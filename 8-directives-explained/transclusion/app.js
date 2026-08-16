(function () {
  angular.module("TransclusionApp", []).directive("sidebox", function () {
    return {
      restrict: "EA",
      scope: {
        title: "@",
      },
      transclude: true,
      template: `
      <div class="sidebox">
        <h2 class="header">{{ title }}</h2>
        <span class="content" ng-transclude>
        </span>
      </div>
      `,
    };
  });
})();
