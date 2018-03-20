const eValido = require("../../src/utils/eValido");

describe("`utils/eValido`", () => {
  it("deve verificar se um número é decimal", () => {
    expect(eValido("3,14")).toBeTruthy();
    expect(eValido("123,456,789")).toBeFalsy();
  });
});
