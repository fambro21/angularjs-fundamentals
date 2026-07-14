(function () {
  "use strict";

  describe("Built-In ngChecked", function () {
    let scope;
    let checkbox;
    let checkbox2;

    beforeEach(module("ngCheckedApp"));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();

      scope.someProperty = true;
      scope.anotherProperty = false;

      const element = $compile(`
          <input
            type="checkbox"
            ng-checked="someProperty"
          />
        `)(scope);

      const element2 = $compile(`
          <input
            type="checkbox"
            ng-checked="anotherProperty"
          />
        `)(scope);

      scope.$digest();

      checkbox = element[0];
      checkbox2 = element2[0];
    }));

    it("should initialize someProperty as true", function () {
      expect(scope.someProperty).toBe(true);
    });

    it("should initially check the someProperty checkbox", function () {
      expect(checkbox.checked).toBe(true);
    });

    it("should uncheck the someProperty checkbox when someProperty is false", function () {
      scope.someProperty = false;
      scope.$digest();

      expect(scope.someProperty).toBe(false);
      expect(checkbox.checked).toBe(false);
    });

    it("should initialize anotherProperty as false", function () {
      expect(scope.anotherProperty).toBe(false);
    });

    it("should initially leave the anotherProperty checkbox unchecked", function () {
      expect(checkbox2.checked).toBe(false);
    });

    it("should check the anotherProperty checkbox when anotherProperty is true", function () {
      scope.anotherProperty = true;
      scope.$digest();

      expect(scope.anotherProperty).toBe(true);
      expect(checkbox2.checked).toBe(true);
    });
  });
})();
