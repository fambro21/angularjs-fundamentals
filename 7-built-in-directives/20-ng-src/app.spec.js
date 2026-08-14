describe("myApp ng-src example", function () {
  var $compile;
  var $rootScope;
  var $timeout;

  beforeEach(module("NgSrcApp"));

  beforeEach(inject(function (_$compile_, _$rootScope_, _$timeout_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
    $timeout = _$timeout_;
  }));

  it("should not set src initially when using ng-src", function () {
    var element = $compile('<img ng-src="{{imgSrc}}" />')($rootScope);

    $rootScope.$digest();

    expect(element.attr("src")).toBeUndefined();
  });

  it("should set src after timeout", function () {
    var element = $compile('<img ng-src="{{imgSrc}}" />')($rootScope);

    $rootScope.$digest();

    $timeout.flush(2000);

    $rootScope.$digest();

    expect(element.attr("src")).toBe(
      "https://www.google.com/images/srpr/logo11w.png",
    );
  });

  it("should interpolate src after imgSrc is available", function () {
    var element = $compile('<img src="{{imgSrc}}" />')($rootScope);

    $rootScope.$digest();

    $timeout.flush(2000);

    $rootScope.$digest();

    expect(element.attr("src")).toBe(
      "https://www.google.com/images/srpr/logo11w.png",
    );
  });
});
