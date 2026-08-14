(function () {
  describe("NgShowHide", function () {
    let $compile;
    let $rootScope;

    beforeEach(module("NgShowHide"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    describe("ng-show", function () {
      it("should hide the element when the expression is false", function () {
        let element = $compile(
          "<div ng-show=\"2 + 2 == 5\">2 + 2 isn't 5, don' t show</div>",
        )($rootScope);

        $rootScope.$digest();

        expect(element.hasClass("ng-hide")).toBe(true);
      });

      it("should show the element when the expression is true", function () {
        let element = $compile(
          '<div ng-show="2 + 2 == 4">2 + 2 is 4, do show</div>',
        )($rootScope);

        $rootScope.$digest();

        expect(element.hasClass("ng-hide")).toBe(false);
      });
    });

    describe("ng-hide", function () {
      it("should show the element when the expression is false", function () {
        let element = $compile(
          "<div ng-hide=\"2 + 2 == 5\">2 + 2 isn\'t 5, don\'t hide</div>",
        )($rootScope);

        $rootScope.$digest();

        expect(element.hasClass("ng-hide")).toBe(false);
      });

      it("should hide the element when the expression is true", function () {
        var element = $compile(
          '<div ng-hide="2 + 2 == 4">2 + 2 is 4, do hide</div>',
        )($rootScope);

        $rootScope.$digest();

        expect(element.hasClass("ng-hide")).toBe(true);
      });
    });
  });
})();
