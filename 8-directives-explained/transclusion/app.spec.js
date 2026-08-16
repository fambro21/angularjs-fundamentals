describe("sidebox directive", function () {
  var $compile;
  var $rootScope;

  beforeEach(module("TransclusionApp"));

  beforeEach(inject(function (_$compile_, _$rootScope_) {
    $compile = _$compile_;
    $rootScope = _$rootScope_;
  }));

  function createDirective(html) {
    var scope = $rootScope.$new();

    var element = $compile(html)(scope);

    scope.$digest();

    return element;
  }

  it("should compile the sidebox directive", function () {
    var element = createDirective('<div sidebox title="Links"></div>');

    expect(element).toBeDefined();
  });

  it("should create a sidebox container", function () {
    var element = createDirective('<div sidebox title="Links"></div>');

    var sidebox = element[0].querySelector(".sidebox");

    expect(sidebox).not.toBeNull();
  });

  it("should display the title", function () {
    var element = createDirective('<div sidebox title="Links"></div>');

    var header = element.find("h2");

    expect(header.text()).toBe("Links");
  });

  it("should add the header class to the title", function () {
    var element = createDirective('<div sidebox title="Links"></div>');

    var header = element.find("h2");

    expect(header.hasClass("header")).toBe(true);
  });

  it("should transclude content into the directive", function () {
    var element = createDirective(
      '<div sidebox title="Links">' +
        "<ul>" +
        "<li>First link</li>" +
        "<li>Second link</li>" +
        "</ul>" +
        "</div>",
    );

    expect(element.text()).toContain("First link");
    expect(element.text()).toContain("Second link");
  });

  it("should transclude the tag cloud links", function () {
    var element = createDirective(
      '<div sidebox title="TagCloud">' +
        '<div class="tagcloud">' +
        '<a href="">Graphics</a>' +
        '<a href="">AngularJS</a>' +
        '<a href="">D3</a>' +
        '<a href="">Front-end</a>' +
        '<a href="">Startup</a>' +
        "</div>" +
        "</div>",
    );

    var links = element.find("a");

    expect(links.length).toBe(5);

    expect(element.text()).toContain("Graphics");
    expect(element.text()).toContain("AngularJS");
    expect(element.text()).toContain("D3");
    expect(element.text()).toContain("Front-end");
    expect(element.text()).toContain("Startup");
  });

  it("should create a tagcloud element", function () {
    var element = createDirective(
      '<div sidebox title="TagCloud">' +
        '<div class="tagcloud">' +
        '<a href="">AngularJS</a>' +
        "</div>" +
        "</div>",
    );

    expect(element[0].querySelector(".tagcloud")).not.toBeNull();
  });

  it("should render different titles for different sideboxes", function () {
    var linksBox = createDirective('<div sidebox title="Links"></div>');

    var tagCloudBox = createDirective('<div sidebox title="TagCloud"></div>');

    expect(linksBox.find("h2").text()).toBe("Links");
    expect(tagCloudBox.find("h2").text()).toBe("TagCloud");
  });
});
