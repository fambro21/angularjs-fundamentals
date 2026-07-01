(function () {
  describe("MyController", () => {
    beforeEach(module("basicApp"));

    let $controller, $rootScope;

    beforeEach(inject(function (_$controller_, _$rootScope_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
    }));

    it("set the scope on the person", function () {
      let $scope = $rootScope.$new();
      $controller("MyController", { $scope: $scope });
      expect($scope.person.name).toBe("Ari Lerner");
    });
  });
})();
