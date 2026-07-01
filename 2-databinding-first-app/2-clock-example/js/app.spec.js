(function () {
  describe("MyController", function () {
    beforeEach(module("clockApp"));

    let $controller;
    let $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    }));

    it("should initialize clock.now", function () {
      var $scope = $rootScope.$new();

      $controller("MyController", {
        $scope: $scope,
      });

      expect($scope.clock.now).toBeDefined();
      expect($scope.clock.now instanceof Date).toBe(true);
    });
  });
})();
