const decimal = require("../src/decimal.js");

describe("decimal", () => {
  it("deve escrever números decimais", () => {
    expect(decimal("1")).toBe("um décimo");
    expect(decimal("2")).toBe("dois décimos");
    expect(decimal("01")).toBe("um centésimo");
    expect(decimal("001")).toBe("um milésimo");
    expect(decimal("000001")).toBe("um milionésimo");
    expect(decimal("0000001")).toBe("um décimo de milionésimo");
    expect(decimal("00000001")).toBe("um centésimo de milionésimo");
    expect(decimal("00000002")).toBe("dois centésimos de milionésimo");
  });
});
