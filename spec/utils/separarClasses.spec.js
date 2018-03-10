const separarClasses = require("../../src/utils/separarClasses");

describe("utils/separarClasses", () => {
  it("deve separar as classes de um número", () => {
    expect(separarClasses("1000")).toEqual(["1", "000"]);
    expect(separarClasses("1000123")).toEqual(["1", "000", "123"]);
    expect(separarClasses("123000123")).toEqual(["123", "000", "123"]);
  });
});
