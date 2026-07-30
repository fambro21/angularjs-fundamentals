(function () {
  describe("ng-open directive", function () {
    let $compile;
    let $rootScope;
    let scope;
    let controller;

    beforeEach(module("NgOpenApp"));

    beforeEach(inject(function (_$compile_, _$rootScope_, $controller) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
      $controller = $controller;

      scope = $rootScope.$new();

      $controller("MainController", {
        $scope: scope,
      });
    }));

    it("should initally be close", function () {
      expect(scope.open).toBe(false);
    });

    it("should allow open to be changed to true", function () {
      scope.open = true;

      const element = $compile(
        `
        <details ng-open="open">
          <summary>Show/Hide</summary>
          <p>Content</p>
        </details>
        `,
      )(scope);

      scope.$digest();
      expect(element[0].open).toBe(true);
    });

    it("should update when the model changes", function () {
      scope.open = false;

      const element = $compile(`
        <details ng-open="open">
          <summary>Show/Hide</summary>
        </details>
        `)(scope);

      scope.$digest();

      expect(element[0].open).toBe(false);

      scope.open = true;
      scope.$digest();

      expect(element[0].open).toBe(true);
    });
  });
})();
