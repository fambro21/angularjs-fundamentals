describe("HelloUser component", function () {
  let $compile;
  let $rootScope;

  beforeEach(module("helloApp"));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  it("should display the bound name", function () {
    const scope = $rootScope.$new();

    scope.name = "Jonathan";

    const element = $compile(
      `<input ng-model="name" />
      <h1>Hello {{ name }}</h1>
      `,
    )(scope);

    scope.$digest();

    expect(element.text()).toContain("Hello Jonathan");
  });
});
