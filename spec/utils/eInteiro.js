const eInteiro = require("../../src/utils/eInteiro");

describe("`utils/eInteiro`", () => {
  it("deve verificar se um número é inteiro", () => {

    // true
    expect(eInteiro(42)).toBeTruthy();
    expect(eInteiro("42")).toBeTruthy();
    expect(eInteiro("-123")).toBeTruthy();
    expect(eInteiro("1.000.000")).toBeTruthy();
    expect(eInteiro("12.000.000")).toBeTruthy();
    expect(eInteiro("123.000.000")).toBeTruthy();

    // false
    expect(eInteiro(42.5)).toBeFalsy();
    expect(eInteiro("42.5")).toBeFalsy();
  });
});
