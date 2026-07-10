(function () {
  let $rootScope, $scope, $controller;
  describe("LotteryController", function () {
    beforeEach(module("ngClassApp"));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $scope = $rootScope.$new();

      $controller("LotteryController", {
        $scope: $scope,
      });
    }));

    it("should define generateNumber function", function () {
      expect($scope.generateNumber).toBeDefined();
      expect(typeof $scope.generateNumber).toBe("function");
    });

    it("should generate a number between 1 and 10", function () {
      const number = $scope.generateNumber();

      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(10);
    });

    it("should generatre a whole number", function () {
      const number = $scope.generateNumber();

      expect(Number.isInteger(number)).toBe(true);
    });
  });
})();
