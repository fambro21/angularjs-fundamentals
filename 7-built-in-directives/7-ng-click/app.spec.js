(function () {
  describe("CounterController", function () {
    let scope;
    beforeEach(module("clickDirectiveApp"));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();

      $controller("CounterController", {
        $scope: scope,
      });
    }));

    it("should set the count initially", function () {
      expect(scope.count).toBe(0);
    });

    it("should increment the count", function () {
      scope.increment();

      expect(scope.count).toBe(1);
    });

    it("should decrement the count", function () {
      scope.decrement();

      expect(scope.count).toBe(-1);
    });
  });
})();
