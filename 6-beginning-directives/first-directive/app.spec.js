(function () {
  describe("Beginning Directive", function () {
    let $compile;
    let $rootScope;

    beforeEach(module("BeginningDirective"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    function createDirective(url) {
      const scope = $rootScope.$new();

      scope.theirUrl = url;

      const element = $compile(`
        <div 
          my-directive
          some-atter="theirUrl"
          my-link-text="Click me to go to Google">
        </div>
      `)(scope);

      scope.$digest();

      return { scope, element };
    }

    it("renders a link", function () {
      const { element } = createDirective("https://google.com");

      const link = element.find("a");

      expect(link.length).toBe(1);
    });

    it("uses the text from myLinkText", function () {
      const { element } = createDirective("https://google.com");

      const link = element.find("a");

      expect(link.text()).toBe("Click me to go to Google");
    });
  });
})();
