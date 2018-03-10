const eValido = require("../../src/utils/eValido");

describe("utils/eValido", () => {
  it("deve verificar se é um número decimal válido", () => {
    expect(eValido("3,14")).toBeTruthy();
    expect(eValido("3,14.123")).toBeFalsy();
  });
});
