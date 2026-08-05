(function () {
  describe("CityController", function () {
    let $controller;
    let $rootScope;
    let $compile;
    let scope;
    let element;

    beforeEach(module("ngSelectApp"));

    beforeEach(inject(function (_$controller_, _$rootScope_, _$compile_) {
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $compile = _$compile_;

      scope = $rootScope.$new();

      $controller("CityController", {
        $scope: scope,
      });

      element = $compile(`
        <div>
        <select
         ng-model="city"
         ng-options="city.name for city in cities">
         <option value="">Choose City</option>
        </select>

        <span class="selected">
          Best City: {{city.name}}
        </span>
        </div>
      `)(scope);

      scope.$digest();
    }));

    it("should create the controller", function () {
      expect(scope).toBeDefined();
    });

    it("should initialize five cities", function () {
      expect(scope.cities.length).toBe(5);
    });

    it("should contain Seattle", function () {
      expect(scope.cities[0].name).toBe("Seattle");
    });

    it("should contain Boston", function () {
      expect(scope.cities[4].name).toBe("Boston");
    });

    it("should render six options including the placeholder", function () {
      const options = element[0].querySelectorAll("option");

      expect(options.length).toBe(6);
    });

    it("should render the placeholder option", function () {
      const firstOption = element[0].querySelector("option");
      expect(firstOption.textContent.trim()).toBe("Choose City");
    });

    it("should update the displayed city", function () {
      scope.city = scope.cities[3];

      scope.$digest();

      const text = element[0].querySelector(".selected").textContent.trim();
      expect(text).toBe("Best City: New York");
    });
  });
})();
