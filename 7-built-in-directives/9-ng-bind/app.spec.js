(function () {
  let scope;

  describe("Greeting Directive", function () {
    beforeEach(module("greetingDirectiveApp"));

    beforeEach(inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      element = $compile(
        `<div ng-init="greeting = 'Hello World'">
          <p ng-bind="greeting"></p>
         </div>
      `,
      )(scope);
      scope.$digest();
    }));

    it("should initialize greeting with ng-init", function () {
      expect(scope.greeting).toBe("Hello World");
    });

    it("should render the greeting with ng-bind", function () {
      const paragraph = element.find("p");

      expect(paragraph.text()).toBe("Hello World");
    });
  });
})();
