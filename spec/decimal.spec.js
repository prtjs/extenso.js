const decimal = require("../src/decimal.js");

describe("decimal", () => {
  it("deve escrever números decimais", () => {
    expect(decimal("1")).toBe("décimo");
    expect(decimal("2")).toBe("décimos");
    expect(decimal("01")).toBe("centésimo");
    expect(decimal("001")).toBe("milésimo");
    expect(decimal("000001")).toBe("milionésimo");
    expect(decimal("0000001")).toBe("décimo de milionésimo");
    expect(decimal("00000001")).toBe("centésimo de milionésimo");
    expect(decimal("00000002")).toBe("centésimos de milionésimo");
  });
});
