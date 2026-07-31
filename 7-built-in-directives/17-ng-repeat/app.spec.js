(function () {
  describe("PeopleController", function () {
    let scope;
    let controller;

    beforeEach(module("ngRepeatApp"));

    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      controller = $controller;

      controller("PeopleController", {
        $scope: scope,
      });
    }));

    it("should have two people", function () {
      expect(scope.people.length).toBe(2);
    });

    it("should display the first person's name as", function () {
      expect(scope.people[0].name).toBe("Ari");
    });

    it("should display the first person's city as", function () {
      expect(scope.people[0].city).toBe("San Francisco");
    });

    it("should display the second person's name as", function () {
      expect(scope.people[1].name).toBe("Erik");
    });

    it("should display the second person's city as", function () {
      expect(scope.people[1].city).toBe("Seattle");
    });
  });
})();
