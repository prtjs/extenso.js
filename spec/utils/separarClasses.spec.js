const separarClasses = require("../../src/utils/separarClasses");

describe("`utils/separarClasses`", () => {
  it("deve separar as classes de um número", () => {
    expect(separarClasses("1")).toEqual(["1"]);
    expect(separarClasses("1000")).toEqual(["1", "000"]);
    expect(separarClasses("1000000")).toEqual(["1", "000", "000"]);
    expect(separarClasses("123000000")).toEqual(["123", "000", "000"]);
  });
});
