describe("FormController", function () {
  let $controller;
  let $rootScope;
  let scope;

  beforeEach(module("ngFormApp"));

  beforeEach(inject(function (_$controller_, _$rootScope_) {
    $controller = _$controller_;
    $rootScope = _$rootScope_;

    scope = $rootScope.$new();

    $controller("FormController", {
      $scope: scope,
    });
  }));

  afterEach(function () {
    scope.$destroy();
  });

  it("should create three form fields", function () {
    expect(scope.fields.length).toBe(3);
  });

  it("should create a required username field", function () {
    let usernameField = scope.fields[0];

    expect(usernameField.placeholder).toBe("Username");
    expect(usernameField.isRequired).toBe(true);
  });

  it("should create a password field", function () {
    let passwordField = scope.fields[1];

    expect(passwordField.placeholder).toBe("Password");
    expect(passwordField.isRequired).toBe(true);
  });

  it("should create an optional email field", function () {
    let emailField = scope.fields[2];

    expect(emailField.placeholder).toBe("Email (optional)");
    expect(emailField.isRequired).toBe(false);
  });

  it("should display an alert when submitForm runs", function () {
    spyOn(window, "alert");

    scope.submitForm();

    expect(window.alert).toHaveBeenCalled();
    expect(window.alert).toHaveBeenCalledWith("it works!");
  });
});
