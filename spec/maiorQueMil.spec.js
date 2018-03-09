const maiorQueMil = require("../src/maiorQueMil.js");

describe("maiorQueMil", () => {
  it("deve escrever números até 9", () => {
    expect(maiorQueMil(1)).toBe("um");
  });
  it("deve escrever números até 99", () => {
    expect(maiorQueMil(15)).toBe("quinze");
    expect(maiorQueMil(50)).toBe("cinquenta");
    expect(maiorQueMil(55)).toBe("cinquenta e cinco");
  });
  it("deve escrever números até 999", () => {
    expect(maiorQueMil(100)).toBe("cem");
    expect(maiorQueMil(150)).toBe("cento e cinquenta");
    expect(maiorQueMil(200)).toBe("duzentos");
    expect(maiorQueMil(225)).toBe("duzentos e vinte e cinco");
  });
  it("deve escrever números maiores que 1000", () => {
    expect(maiorQueMil(1000)).toBe("mil");
    expect(maiorQueMil("1001")).toBe("mil e um");
    expect(maiorQueMil(1000100)).toBe("um milhão e cem");
    expect(maiorQueMil(2000100)).toBe("dois milhões e cem");
    expect(maiorQueMil(1100100001)).toBe("um bilhão, cem milhões, cem mil e um");
    expect(maiorQueMil(1100100100)).toBe("um bilhão, cem milhões, cem mil e cem");
    expect(maiorQueMil(1100100101)).toBe("um bilhão, cem milhões, cem mil cento e um");
    expect(maiorQueMil("1.100.100.101")).toBe("um bilhão, cem milhões, cem mil cento e um");
  });
});
