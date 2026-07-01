(function () {
  describe("state", function () {
    let mainScope, childScope;

    beforeEach(module("inheritanceApp"));

    beforeEach(inject(function ($rootScope, $controller) {
      mainScope = $rootScope.$new();
      $controller("ParentController", { $scope: mainScope });
      childScope = mainScope.$new();
      $controller("ChildController", { $scope: childScope });
    }));

    it("should set the person greeted initialy", function () {
      expect(mainScope.person.greeted).toBe(false);
    });

    it("should change the person greeted to", function () {
      childScope.sayHello();

      expect(childScope.person.greeted).toBe(true);
    });
  });
})();
