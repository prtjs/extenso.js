const emDecimal = require("../src/emDecimal");

describe("`emDecimal`", () => {
  it("deve escrever números decimais", () => {

    // === 0
    expect(emDecimal("0,1")).toBe("um décimo");
    expect(emDecimal("0,2")).toBe("dois décimos");
    expect(emDecimal("0,01")).toBe("um centésimo");
    expect(emDecimal("0,001")).toBe("um milésimo");
    expect(emDecimal("0,000001")).toBe("um milionésimo");
    expect(emDecimal("0,0000001")).toBe("um décimo de milionésimo");
    expect(emDecimal("0,00000001")).toBe("um centésimo de milionésimo");
    expect(emDecimal("0,00000002")).toBe("dois centésimos de milionésimo");
  });
  it("deve escrever números inteiros e decimais", () => {

    // === 1
    expect(emDecimal("1,1")).toBe("um inteiro e um décimo");
    expect(emDecimal("1,2")).toBe("um inteiro e dois décimos");
    expect(emDecimal("1,01")).toBe("um inteiro e um centésimo");
    expect(emDecimal("1,001")).toBe("um inteiro e um milésimo");
    expect(emDecimal("1,000001")).toBe("um inteiro e um milionésimo");
    expect(emDecimal("1,0000001")).toBe("um inteiro e um décimo de milionésimo");
    expect(emDecimal("1,00000001")).toBe("um inteiro e um centésimo de milionésimo");
    expect(emDecimal("1,00000002")).toBe("um inteiro e dois centésimos de milionésimo");

    // > 1
    expect(emDecimal("2,1")).toBe("dois inteiros e um décimo");
    expect(emDecimal("2,2")).toBe("dois inteiros e dois décimos");
    expect(emDecimal("2,01")).toBe("dois inteiros e um centésimo");
    expect(emDecimal("2,001")).toBe("dois inteiros e um milésimo");
    expect(emDecimal("2,000001")).toBe("dois inteiros e um milionésimo");
    expect(emDecimal("2,0000001")).toBe("dois inteiros e um décimo de milionésimo");
    expect(emDecimal("2,00000001")).toBe("dois inteiros e um centésimo de milionésimo");
    expect(emDecimal("2,00000002")).toBe("dois inteiros e dois centésimos de milionésimo");
  });
});
