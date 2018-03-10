const eInteiroValido = require("../../src/utils/eInteiroValido");

describe("utils/eInteiroValido", () => {
  it("deve verificar se um número inteiro é valido", () => {
    expect(eInteiroValido(42)).toBeTruthy();
    expect(eInteiroValido("1.000.000")).toBeTruthy();
    expect(eInteiroValido("12.000.000")).toBeTruthy();
    expect(eInteiroValido("123.000.000")).toBeTruthy();
    expect(eInteiroValido(42.1)).toBeFalsy();
  });
});
