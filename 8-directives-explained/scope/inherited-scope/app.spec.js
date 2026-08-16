(function () {
  describe("myDirective", function () {
    var $compile;
    var $rootScope;

    beforeEach(module("myApp"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    function compileDirective(html) {
      var scope = $rootScope.$new();
      var element = $compile(html)(scope);

      scope.$digest();

      return {
        element: element,
        scope: scope,
      };
    }

    it("should compile the directive", function () {
      var result = compileDirective("<div my-directive></div>");

      expect(result.element).toBeDefined();
    });

    it("should create an inherited child scope", function () {
      var scope = $rootScope.$new();

      var element = $compile("<div my-directive></div>")(scope);

      scope.$digest();

      var directiveScope = element.scope();

      expect(directiveScope.$parent).toBeDefined();
      expect(directiveScope.$parent).not.toBeNull();
    });

    it("should inherit properties from the parent scope", function () {
      var scope = $rootScope.$new();

      scope.aThirdProperty = "data for 3rd property";

      var element = $compile("<div my-directive>{{ aThirdProperty }}</div>")(
        scope,
      );

      scope.$digest();

      expect(element.text()).toContain("data for 3rd property");
    });

    it("should allow the directive child scope to define its own property", function () {
      var result = compileDirective(
        "<div my-directive " +
          "ng-init=\"myProperty = 'wow, this is cool'\">" +
          "{{ myProperty }}" +
          "</div>",
      );

      expect(result.element.text()).toContain("wow, this is cool");
    });

    it("should create an inherited child scope", function () {
      var scope = $rootScope.$new();

      var element = $compile("<div my-directive></div>")(scope);

      scope.$digest();

      var directiveScope = element.scope();

      expect(directiveScope.$parent).toBeDefined();
      expect(directiveScope.$parent).not.toBeNull();
    });

    it("should place myProperty on the directive child scope", function () {
      var result = compileDirective(
        "<div my-directive " +
          "ng-init=\"myProperty = 'wow, this is cool'\">" +
          "</div>",
      );

      var directiveScope = result.element.scope();

      expect(directiveScope.myProperty).toBe("wow, this is cool");
    });
  });
})();
