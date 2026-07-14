(function () {
  let scope;

  describe("NgCloak Directive", function () {
    beforeEach(module("NgCloakDirective"));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = $compile(`
        <div ng-init="greeting = 'Hello World'">
          <p>{{greeting}}</p>
        </div>
        `)(scope);
      scope.$digest();
    }));

    it("should initially display the greeting property as", function () {
      expect(scope.greeting).toBe("Hello World");
    });

    it("should render the greeting with ng-bind", function () {
      const paragraph = element.find("p");

      expect(paragraph.text()).toBe("Hello World");
    });
  });
})();
