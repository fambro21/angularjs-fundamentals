(function () {
  describe("FormController", function () {
    var $controller;
    var $rootScope;
    var $compile;

    beforeEach(module("NgSubmitApp"));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$compile_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;
    }));

    var scope;
    var controller;

    beforeEach(function () {
      scope = $rootScope.$new();

      controller = $controller("FormController", {
        $scope: scope,
      });
    });

    it("should create person object", function () {
      expect(scope.person).toBeDefined();
      expect(scope.person.name).toBeNull();
    });

    it("should initialize an empty people array", function () {
      expect(scope.people).toEqual([]);
    });

    it("should add a person when submit() is called", function () {
      scope.person.name = "John";

      scope.submit();

      expect(scope.people.length).toBe(1);
      expect(scope.people[0].name).toBe("John");
    });

    it("should clear the input after submit()", function () {
      scope.person.name = "John";

      scope.submit();

      expect(scope.person.name).toBe("");
    });

    it("should not add a person when the name is empty", function () {
      scope.person.name = "";

      scope.submit();

      expect(scope.people.length).toBe(0);
    });

    it("should allow multiple people to be submitted", function () {
      scope.person.name = "John";
      scope.submit();

      scope.person.name = "Jane";
      scope.submit();

      expect(scope.people.length).toBe(2);
      expect(scope.people[0].name).toBe("John");
      expect(scope.people[1].name).toBe("Jane");
    });

    it("should display submitted names in the DOM", function () {
      var element = $compile(
        "<ul>" +
          '<li ng-repeat="object in people">{{object.name}}</li>' +
          "</ul>",
      )(scope);

      scope.person.name = "John";
      scope.submit();

      scope.$digest();

      expect(element.text()).toContain("John");
    });
  });
})();
