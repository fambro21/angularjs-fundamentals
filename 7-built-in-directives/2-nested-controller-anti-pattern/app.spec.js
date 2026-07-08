(function () {
  describe("NestedControllerAntiPatternApp", () => {
    beforeEach(module("NestedControllerAntiPatternApp"));

    let someScope, childScope;

    beforeEach(inject(function ($rootScope, $controller) {
      someScope = $rootScope.$new();
      $controller("SomeController", { $scope: someScope });
      childScope = someScope.$new();
      $controller("ChildController", { $scope: childScope });
    }));

    it("should set some bare value initial property", function () {
      expect(someScope.someBareValue).toBe("hello computer");
    });

    it("should change the some bare value when the user click Communicate to child button", function () {
      someScope.someAction();

      expect(someScope.someBareValue).toBe("hello human, from parent");
    });

    it("should change the some bare value when the user click Communicate to parent button", function () {
      childScope.childAction();

      expect(childScope.someBareValue).toBe("hello human, from child");
    });
  });
})();
