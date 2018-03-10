const normalizar = require("../../src/utils/normalizar");

describe("utils/normalizar", () => {
  it("deve normalizar um número inteiro", () => {
    expect(normalizar("3")).toBe("3");
    expect(normalizar("3.14")).toBe("314");
    expect(normalizar("0")).toBe("0");
    expect(normalizar("00042")).toBe("42");
  });
});
