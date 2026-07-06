(function () {
  describe("DemoController", function () {
    let $controller;
    let $rootScope;
    let $filter;
    let $compile;

    beforeEach(module("BuiltInFilterApp"));

    beforeEach(inject(function (
      _$compile_,
      _$controller_,
      _$rootScope_,
      _$filter_,
    ) {
      $compile = _$compile_;
      $controller = _$controller_;
      $rootScope = _$rootScope_;
      $filter = _$filter_;
    }));

    it("should initialize the name", function () {
      let $scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: $scope,
        $filter: $filter,
      });

      expect($scope.name).toBe("Ari Lerner");
    });

    it("should initialize today's date", function () {
      let $scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: $scope,
        $filter: $filter,
      });

      expect($scope.today instanceof Date).toBe(true);
    });

    it("should return true for capitalized strings", function () {
      let $scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: $scope,
        $filter: $filter,
      });

      expect($scope.isCapitalized("Angular")).toBe(true);
    });

    it("should return false for lowercase strings", function () {
      let $scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: $scope,
        $filter: $filter,
      });

      expect($scope.isCapitalized("angular")).toBe(false);
    });

    it("should render the uppercase filter", function () {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      var element = $compile("<div>{{name | uppercase}}</div>")(scope);

      scope.$digest();

      expect(element.text()).toBe("ARI LERNER");
    });

    it("should render ng-bind with lowercaseName", function () {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ 123.456789 | number: 2 }}</div>")(scope);

      scope.$digest();

      expect(element.text()).toBe("123.46");
    });

    it("should render the currency filter", function () {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ 123 | currency }}</div>")(scope);

      scope.$digest();

      expect(element.text()).toBe("$123.00");
    });

    it("should render today's date in medium format", function () {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'medium'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "medium"));
    });

    it("should render today's date in the short format", function () {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'short'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "short"));
    });

    it("should render today's date in the full date format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'fullDate'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "fullDate"));
    });

    it("should render today's date in the long date format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'longDate'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "longDate"));
    });

    it("should render today's date in the medium date format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'mediumDate'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "mediumDate"));
    });

    it("should render today's date in the short date format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'shortDate'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "shortDate"));
    });

    it("should render today's time in the medium time format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'mediumTime'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "mediumTime"));
    });

    it("should render today's time in the short time format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{today | date:'shortTime'}}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "shortTime"));
    });

    it("should render month format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile(
        "<div>Month in year: {{today | date:'MMMM'}}</div>",
      )(scope);
      scope.$digest();

      expect(element.text()).toContain($filter("date")(scope.today, "MMMM"));
    });

    it("should render short month format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile(
        "<div>Short month in year: {{today | date:'MMM'}}</div>",
      )(scope);
      scope.$digest();

      expect(element.text()).toContain($filter("date")(scope.today, "MMM"));
    });

    it("shold render padded month format", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile(
        "<div>Padded month in year: {{today | date:'MM'}}</div>",
      )(scope);
      scope.$digest();

      expect(element.text()).toContain($filter("date")(scope.today, "MM"));
    });

    it("should render month in year", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile(
        "<div>Month in year: {{ today | date:'M' }}</div>",
      )(scope);
      scope.$digest();

      expect(element.text()).toContain($filter("date")(scope.today, "M"));
    });

    it("should render padded day in month", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'dd' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "dd"));
    });

    it("should render day in month", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'d' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "d"));
    });

    it("should render full day in week", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'EEEE' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "EEEE"));
    });

    it("should render short day in week", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'EEE' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "EEE"));
    });

    it("should render padded hour in day", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'HH' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "HH"));
    });

    it("should render hour in day", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'H' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "H"));
    });

    it("should render padded hour in am/pm", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'hh' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "hh"));
    });

    it("should render hour in am/pm", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'h' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "h"));
    });

    it("should render padded minute in hour", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'mm' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "mm"));
    });

    it("should render minute in hour", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'m' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "m"));
    });

    it("should render padded second in minute", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'ss' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "ss"));
    });

    it("should render second in minute", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'s' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "s"));
    });

    it("should render padded millisecond in second", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'.sss' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, ".sss"));
    });

    it("should render am/pm character", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'a' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "a"));
    });

    it("should render timezone offset", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'Z' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "Z"));
    });

    it("should render custom date format MMM d, y", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'MMM d, y' }}</div>")(scope);
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "MMM d, y"));
    });

    it("should render custom date format EEEE, d, M", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'EEEE, d, M' }}</div>")(
        scope,
      );
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "EEEE, d, M"));
    });

    it("should render custom time format hh:mm:ss.sss", () => {
      let scope = $rootScope.$new();

      $controller("DemoController", {
        $scope: scope,
        $filter: $filter,
      });

      let element = $compile("<div>{{ today | date:'hh:mm:ss.sss' }}</div>")(
        scope,
      );
      scope.$digest();

      expect(element.text()).toBe($filter("date")(scope.today, "hh:mm:ss.sss"));
    });

    it("should filter array values containing e", () => {
      let scope = $rootScope.$new();

      let element = $compile(
        "<div>{{ ['Ari', 'Lerner', 'Likes', 'To', 'Eat', 'Pizza'] | filter:'e' }}</div>",
      )(scope);

      scope.$digest();

      expect(element.text()).toContain("Lerner");
      expect(element.text()).toContain("Likes");
      expect(element.text()).toContain("Eat");
      expect(element.text()).not.toContain("Ari");
      expect(element.text()).not.toContain("To");
    });
  });
})();
