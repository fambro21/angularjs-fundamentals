(function () {
  describe("ngIsolateScopeApp directives", function () {
    var $compile;
    var $rootScope;

    beforeEach(module("ngIsolateScopeApp"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    describe("myInheritScopeDirective", function () {
      it("should compile the inherited scope directive", function () {
        var scope = $rootScope.$new();

        var element = $compile("<div my-inherit-scope-directive></div>")(scope);

        scope.$digest();

        expect(element).toBeDefined();
      });

      it("should create a new child scope", function () {
        var scope = $rootScope.$new();

        var element = $compile("<div my-inherit-scope-directive></div>")(scope);

        scope.$digest();

        var directiveScope = element.scope();

        expect(directiveScope).not.toBe(scope);
        expect(directiveScope.$parent).toBe(scope);
      });

      it("should inherit myProperty from the parent scope", function () {
        var scope = $rootScope.$new();

        scope.myProperty = "wow, this is cool";

        var element = $compile(
          "<div my-inherit-scope-directive>" + "{{ myProperty }}" + "</div>",
        )(scope);

        scope.$digest();

        expect(element.text()).toContain("wow, this is cool");
      });

      it("should allow inherited properties to be accessed from the directive scope", function () {
        var scope = $rootScope.$new();

        scope.myProperty = "wow, this is cool";

        var element = $compile("<div my-inherit-scope-directive></div>")(scope);

        scope.$digest();

        var directiveScope = element.scope();

        expect(directiveScope.myProperty).toBe("wow, this is cool");
      });
    });

    describe("myDirective", function () {
      it("should compile the isolate scope directive", function () {
        var scope = $rootScope.$new();

        var element = $compile("<div my-directive></div>")(scope);

        scope.$digest();

        expect(element).toBeDefined();
      });

      it("should create an isolate scope", function () {
        var scope = $rootScope.$new();

        var element = $compile("<div my-directive></div>")(scope);

        scope.$digest();

        var isolateScope = element.isolateScope();

        expect(isolateScope).toBeDefined();
      });

      it("should not inherit myProperty from the parent scope", function () {
        var scope = $rootScope.$new();

        scope.myProperty = "wow, this is cool";

        var element = $compile(
          "<div my-directive>" + "{{ myProperty }}" + "</div>",
        )(scope);

        scope.$digest();

        var isolateScope = element.isolateScope();

        expect(isolateScope.myProperty).toBeUndefined();
      });
    });
  });
})();
