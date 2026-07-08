(function () {
  describe("WIPApp", function () {
    var $compile;
    var $rootScope;

    beforeEach(module("WIPApp"));

    beforeEach(inject(function (_$compile_, _$rootScope_) {
      $compile = _$compile_;
      $rootScope = _$rootScope_;
    }));

    describe("ParentController", function () {
      it("sets the default name to Erik", inject(function ($controller) {
        var scope = $rootScope.$new();

        $controller("ParentController", {
          $scope: scope,
        });

        expect(scope.name).toBe("Erik");
      }));
    });

    describe("ChildController", function () {
      it("can be instantiated", inject(function ($controller) {
        var scope = $rootScope.$new();

        $controller("ChildController", {
          $scope: scope,
        });

        expect(scope).toBeDefined();
      }));
    });

    describe("myDirective", function () {
      it("renders the link text from parent scope", function () {
        var scope = $rootScope.$new();

        scope.name = "Erik";
        scope.myLinkText = "Click here";

        var element = angular.element(`
          <div
            my-directive
            some-attr="myUrl"
            my-link-text="myLinkText"
            some-hello="name"
            another-hello="">
          </div>
          `);

        var compiledElement = $compile(element)(scope);
        scope.$digest();

        expect(compiledElement.text()).toContain("Click here");
      });
    });

    it("renders someController value from some-hello binding", function () {
      var scope = $rootScope.$new();

      scope.name = "Erik";
      scope.myLinkText = "Click here";

      var element = angular.element(`
        <div
          my-directive
          some-attr="myUrl"
          my-link-text="myLinkText"
          some-hello="name"
          another-hello="">
        </div>
        `);

      $compile(element)(scope);
      scope.$digest();

      expect(element.text()).toContain("Erik");
    });
  });
})();
