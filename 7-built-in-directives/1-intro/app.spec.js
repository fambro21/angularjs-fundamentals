(function () {
  describe("Intro", function () {
    let $compile;
    let $rootScope;

    beforeEach(module("directiveApp"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    function createDirective(url) {
      const scope = $rootScope.$new();

      scope.myUrl = url;

      const element = $compile(`
        <div
          my-directive
          some-attr="{{myUrl}}"
          my-link-text="Click me to go to Google">
        </div>        
        `)(scope);

      scope.$digest();

      return { scope, element };
    }

    it("renders a link", function () {
      const { element } = createDirective("https://apple.com");

      expect(element.prop("tagName").toLowerCase()).toBe("a");
    });

    it("uses the text from myLinkText", function () {
      const { element } = createDirective("https://apple.com");

      expect(element.text()).toBe("Click me to go to Google");
    });
  });
})();
