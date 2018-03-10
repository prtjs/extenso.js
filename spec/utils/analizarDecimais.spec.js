const analizarDecimal = require("../../src/utils/analizarDecimal");

describe("utils/analizarDecimal", () => {
  it("deve separar string por vírgulas", () => {
    expect(analizarDecimal("3,14")).toEqual(["3", "14"]);
  });
});
