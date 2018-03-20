const eNegativo = require("../../src/utils/eNegativo");

describe("`eNegativo`", () => {
  it("deve verificar se um número é negativo", () => {
    expect(eNegativo("-1")).toBeTruthy();
    expect(eNegativo("1")).toBeFalsy();
  });
});
