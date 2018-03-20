const a999 = require("../src/a999");

describe("`a999`", () => {
  it("deve escrever números até 999", () => {
    expect(a999(100)).toBe("cem");
    expect(a999(150)).toBe("cento e cinquenta");
    expect(a999(200)).toBe("duzentos");
    expect(a999(225)).toBe("duzentos e vinte e cinco");

    // feminino
    expect(a999(221, true)).toBe("duzentos e vinte e uma");
    expect(a999(222, true)).toBe("duzentos e vinte e duas");
  });
});
