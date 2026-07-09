(function () {
  describe("myApp rootScope behavior", function () {
    let $rootScope;

    beforeEach(module("ngApp2"));

    beforeEach(inject(function (_$rootScope_) {
      $rootScope = _$rootScope_;
    }));

    it("should initialize someProperty", function () {
      expect($rootScope.someProperty).toBe("hello computer");
    });

    it("should define someAction", function () {
      expect(typeof $rootScope.someAction).toBe("function");
    });

    it("should update someProperty when someAction is called", function () {
      $rootScope.someAction();

      expect($rootScope.someProperty).toBe("hello human");
    });
  });
})();
