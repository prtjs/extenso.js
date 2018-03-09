const a999 = require("../src/a999.js");

describe("a999", () => {
  it("deve escrever números até 9", () => {
    expect(a999(1)).toBe("um");
  });
  it("deve escrever números até 99", () => {
    expect(a999(15)).toBe("quinze");
    expect(a999(50)).toBe("cinquenta");
    expect(a999(55)).toBe("cinquenta e cinco");
  });
  it("deve escrever números até 999", () => {
    expect(a999(100)).toBe("cem");
    expect(a999(150)).toBe("cento e cinquenta");
    expect(a999(200)).toBe("duzentos");
    expect(a999(225)).toBe("duzentos e vinte e cinco");
  });
});
