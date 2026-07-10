(function () {
  describe("EquationController", function () {
    let $controller;
    let $scope;

    beforeEach(module("ngChangeApp"));

    beforeEach(inject(function (_$controller_, $rootScope) {
      $controller = _$controller_;

      $scope = $rootScope.$new();

      $controller("EquationController", {
        $scope: $scope,
      });
    }));

    it("starts with a equation of", function () {
      expect($scope.equation).toEqual({});
    });

    it("starts with a equation output of", function () {
      expect($scope.equation.output).toBeUndefined;
    });

    it("updates the equation output when change is called", function () {
      $scope.equation.x = 2;

      $scope.change();

      expect($scope.equation.output).toBe(4);
    });
  });
})();
