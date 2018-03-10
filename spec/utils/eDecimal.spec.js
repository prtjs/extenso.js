const eDecimal = require("../../src/utils/eDecimal");

describe("utils/eDecimal", () => {
  it("deve verificar se um número é decimal", () => {
    expect(eDecimal("3,14")).toBeTruthy();
    expect(eDecimal("42")).toBeFalsy();
  });
});
