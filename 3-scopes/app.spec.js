(function () {
  describe("MyController", function () {
    beforeEach(module("myApp"));

    let $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    }));

    it("should set movie on the scope ", function () {
      var $scope = $rootScope.$new();
      $controller("MyController", { $scope: $scope });
      expect($scope.movie).toBe("Duck Tails");
    });
  });
})();
