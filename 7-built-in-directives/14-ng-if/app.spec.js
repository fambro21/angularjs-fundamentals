(function () {
  let $rootScope, element, $compile;
  describe("NgIF", function () {
    beforeEach(module("NgIFApp"));

    beforeEach(inject(function (_$rootScope_, _$compile_) {
      $rootScope = _$rootScope_;
      $compile = _$compile_;
    }));

    it("should not display the html", function () {
      element = $compile(`
        <section>
        <div ng-if="2 + 2 === 5">Won\'t see this DOM node, not even in the source code</div>,
        </section>
        `)($rootScope);
      $rootScope.$digest();

      expect(element.find("div").length).toBe(0);
      expect(element.text()).not.toContain("Hi, I do exist");
    });

    it("should display the html", function () {
      element = $compile(`
        <section>
          <div ng-if="2 + 2 === 4">Hi, I do exist</div>
        </section>
        `)($rootScope);

      $rootScope.$digest();

      expect(element.find("div").length).toBe(1);
      expect(element.text()).toContain("Hi, I do exist");
    });
  });
})();
