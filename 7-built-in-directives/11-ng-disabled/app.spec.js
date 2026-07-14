(function () {
  describe("myApp ngDisabled examples", function () {
    "use strict";

    var $rootScope;
    var $compile;
    var $timeout;
    var scope;

    beforeEach(module("NgDisabled"));

    beforeEach(inject(function (_$rootScope_, _$compile_, _$timeout_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
      $timeout = _$timeout_;

      scope = $rootScope.$new();
    }));

    afterEach(function () {
      if (scope) {
        scope.$destroy();
      }
    });

    describe("Demo 1", function () {
      var element;
      var input;
      var button;

      beforeEach(function () {
        element = $compile(`
        <div>
          <input
            type="text"
            ng-model="someProperty"
            placeholder="Type to Enable"
          />

          <button ng-disabled="!someProperty">
            A Button
          </button>
        </div>
      `)(scope);

        scope.$digest();

        input = element.find("input");
        button = element.find("button");
      });

      it("should disable the button when the input is empty", function () {
        expect(scope.someProperty).toBeUndefined();
        expect(button.prop("disabled")).toBe(true);
      });

      it("should enable the button when text is entered", function () {
        input.val("AngularJS");
        input.triggerHandler("input");

        scope.$digest();

        expect(scope.someProperty).toBe("AngularJS");
        expect(button.prop("disabled")).toBe(false);
      });

      it("should disable the button when the input is cleared", function () {
        input.val("AngularJS");
        input.triggerHandler("input");
        scope.$digest();

        expect(button.prop("disabled")).toBe(false);

        input.val("");
        input.triggerHandler("input");
        scope.$digest();

        expect(scope.someProperty).toBe("");
        expect(button.prop("disabled")).toBe(true);
      });
    });

    describe("Demo 2", function () {
      var textarea;

      beforeEach(function () {
        textarea = $compile(`
        <textarea ng-disabled="isDisabled">
          Wait 1 second
        </textarea>
      `)(scope);

        scope.$digest();
      });

      it("should set isDisabled to true initially", function () {
        expect($rootScope.isDisabled).toBe(true);
      });

      it("should disable the textarea initially", function () {
        expect(textarea.prop("disabled")).toBe(true);
      });

      it("should remain disabled before one second", function () {
        $timeout.flush(999);
        scope.$digest();

        expect($rootScope.isDisabled).toBe(true);
        expect(textarea.prop("disabled")).toBe(true);
      });

      it("should enable the textarea after one second", function () {
        $timeout.flush(1000);
        scope.$digest();

        expect($rootScope.isDisabled).toBe(false);
        expect(textarea.prop("disabled")).toBe(false);
      });
    });
  });
})();
