(function () {
  describe("myApp ngInit", function () {
    let $rootScope;
    let $compile;
    let scope;
    let element;

    beforeEach(module("ngApp3"));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;

      scope = $rootScope.$new();

      element = $compile(`
        <div ng-init="greeting = 'Hello World'">
          {{ greeting }}
        </div>
      `)(scope);

      scope.$digest();
    }));

    it("should initialize greeting", function () {
      expect(scope.greeting).toBe("Hello World");
    });

    it("should render the greeting", function () {
      expect(element.text().trim()).toBe("Hello World");
    });
  });
})();
