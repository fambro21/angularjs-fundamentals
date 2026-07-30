(function () {
  describe("ngReadonlyApps readonly behavior", function () {
    let $compile;
    let $rootScope;
    let scope;
    let element;

    beforeEach(module("ngReadonlyApp2"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;

      scope = $rootScope.$new();

      element = $compile(`
        <div>
          <input class="readonly-controller" type="text" ng-model="someProperty" />
          <input class="readonly-target" type="text" ng-readonly="someProperty" value="Some text here" />
        </div>
      `)(scope);

      scope.$digest();
    }));

    afterEach(function () {
      scope.$destroy();
      element.remove();
    });

    it("should load the ngReadonly", function () {
      expect(element).toBeDefined();
    });

    it("should not make the second input readonly initially", function () {
      const readonlyInput = element[0].querySelector(".readonly-target");

      expect(readonlyInput.readOnly).toBe(false);
    });

    it("should make the second input readonly when someProperty has a value", function () {
      const readonlyInput = element[0].querySelector(".readonly-target");

      scope.someProperty = "make readonly";
      scope.$digest();

      expect(readonlyInput.readOnly).toBe(true);
    });

    it("should remove readonly when someProperty is empty", function () {
      const readonlyInput = element[0].querySelector(".readonly-target");

      scope.someProperty = "make readonly";
      scope.$digest();

      expect(readonlyInput.readOnly).toBe(true);

      scope.someProperty = "";
      scope.$digest();

      expect(readonlyInput.readOnly).toBe(false);
    });

    it("should update the model when the first input changes", function () {
      const controlInput = element[0].querySelector(".readonly-controller");

      controlInput.value = "test value";
      controlInput.dispatchEvent(new Event("input"));

      expect(scope.someProperty).toBe("test value");
    });
  });
})();
