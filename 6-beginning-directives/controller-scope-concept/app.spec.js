(function () {
  describe("", function () {
    let rootScope, controller;

    beforeEach(module("ScopeConceptApp"));

    beforeEach(inject(function (_$rootScope_, _$controller_) {
      rootScope = _$rootScope_;
      controller = _$controller_;
    }));

    it("sets root scope property", function () {
      expect(rootScope.rootProperty).toBe("root scope");
    });

    it("sets parent scope property", function () {
      const parentScope = rootScope.$new();

      controller("ParentController", {
        $scope: parentScope,
      });

      expect(parentScope.parentProperty).toBe("parent scope");
    });

    it("sets child scope property", function () {
      const childScope = rootScope.$new();

      controller("ChildController", {
        $scope: childScope,
      });

      expect(childScope.childProperty).toBe("child scope");
    });

    it("creates full sentence from child using inherited scope values", function () {
      const parentScope = rootScope.$new();

      controller("ParentController", {
        $scope: parentScope,
      });

      const childScope = parentScope.$new();

      controller("ChildController", {
        $scope: childScope,
      });

      expect(childScope.fullSentenceFromChild).toBe(
        "Same $scope: We can access: root scope and parent scope and child scope",
      );
    });
  });
})();
