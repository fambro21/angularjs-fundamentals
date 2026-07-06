describe("capitalize filter", function () {
  let capitalize, blankIfNegative;

  beforeEach(module("CustomFilterApp.filters"));

  beforeEach(inject(function ($filter) {
    capitalize = $filter("capitalize");
    blankIfNegative = $filter("blankIfNegative");
  }));

  it("should capitalize the first letter", function () {
    expect(capitalize("jonathan")).toBe("Jonathan");
  });

  it("should keep the rest of the word the same", function () {
    expect(capitalize("jONATHAN")).toBe("JONATHAN");
  });

  it("should make the input blank if the number", function () {
    expect(blankIfNegative(-15)).toEqual(" ");
  });

  it("should keep the same input if the number", function () {
    expect(blankIfNegative(15)).toEqual(15);
  });
});
