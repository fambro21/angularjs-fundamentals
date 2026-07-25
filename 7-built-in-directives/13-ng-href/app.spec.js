(function () {
  let $rootScope, $timeout, $compile;
  describe("Href", function () {
    beforeEach(module("ngHref"));

    beforeEach(inject(function (_$rootScope_, _$timeout_, _$compile_) {
      $rootScope = _$rootScope_;
      $timeout = _$timeout_;
      $compile = _$compile_;
    }));

    it("should start with myHref undefined ", function () {
      expect($rootScope.myHref).toBeUndefined();
    });

    it("should not set myHref before two seconds", function () {
      $timeout.flush(1999);

      expect($rootScope.myHref).toBeUndefined();
    });

    it("should set myHref after two seconds", function () {
      $timeout.flush(2000);

      expect($rootScope.myHref).toBe("http://google.com");
    });

    it("should not add an href attribute while myHref is undefined", function () {
      let element = $compile('<a ng-href="{{myHref}}">I\'m feeling lucky</a>')(
        $rootScope,
      );

      $rootScope.$digest();

      expect(element.attr("href")).toBeUndefined();
    });

    it("should add the href after myHref is defined", function () {
      let element = $compile('<a ng-href="{{myHref}}">I\m feeling lucky</a>')(
        $rootScope,
      );

      $rootScope.$digest();

      $timeout.flush(2000);
      $rootScope.$digest();

      expect(element.attr("href")).toBe("http://google.com");
    });

    it("should initially contain the unresolved interopolation value", function () {
      let element = $compile('<a href="{{myHref}}">I\'m feeling 404</a>')(
        $rootScope,
      );

      $rootScope.$digest();

      expect(element.attr("href")).toBeUndefined;
    });

    it("should update the href after myHref is defined", function () {
      let element = $compile('<a href="{{myHref}}">I\'m feeling 404</a>')(
        $rootScope,
      );

      $rootScope.$digest();

      $timeout.flush(2000);

      $rootScope.$digest();

      expect(element.attr("href")).toBe("http://google.com");
    });
  });
})();
