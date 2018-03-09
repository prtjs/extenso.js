const acimaMil = require("../src/acimaMil.js");

describe("acimaMil", () => {
  it("deve escrever números até 9", () => {
    expect(acimaMil(1)).toBe("um");
  });
  it("deve escrever números até 99", () => {
    expect(acimaMil(15)).toBe("quinze");
    expect(acimaMil(50)).toBe("cinquenta");
    expect(acimaMil(55)).toBe("cinquenta e cinco");
  });
  it("deve escrever números até 999", () => {
    expect(acimaMil(100)).toBe("cem");
    expect(acimaMil(150)).toBe("cento e cinquenta");
    expect(acimaMil(200)).toBe("duzentos");
    expect(acimaMil(225)).toBe("duzentos e vinte e cinco");
  });
  it("deve escrever números maiores que 1000", () => {
    expect(acimaMil(1000)).toBe("mil");
    expect(acimaMil("1001")).toBe("mil e um");
    expect(acimaMil(1000100)).toBe("um milhão e cem");
    expect(acimaMil(2000100)).toBe("dois milhões e cem");
    expect(acimaMil(1100100001)).toBe("um bilhão, cem milhões, cem mil e um");
    expect(acimaMil(1100100100)).toBe("um bilhão, cem milhões, cem mil e cem");
    expect(acimaMil(1100100101)).toBe("um bilhão, cem milhões, cem mil cento e um");
    expect(acimaMil("1.100.100.101")).toBe("um bilhão, cem milhões, cem mil cento e um");
  });
});
