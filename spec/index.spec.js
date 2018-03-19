const extenso = require("../src/index");

describe("extenso", () => {
  it("deve escrever qualquer número simples", () => {
    expect(extenso(1)).toBe("um");
    expect(extenso(1000)).toBe("mil");
    expect(extenso("1.000.001")).toBe("um milhão e um");
  });
  it("deve escrever os valores em feminino", () => {
    expect(extenso("1", {feminino: true})).toBe("uma");
    expect(extenso("2", {feminino: true})).toBe("duas");
  });
  it("deve escrever valores decimais", () => {
    expect(extenso("3,1")).toBe("três inteiros e um décimo");
    expect(extenso("3.000,1")).toBe("três mil inteiros e um décimo");
    expect(extenso("3.001,1")).toBe("três mil e um inteiros e um décimo");
    expect(extenso("3.001,10")).toBe("três mil e um inteiros e dez centésimos");
    expect(extenso("3,14")).toBe("três inteiros e quatorze centésimos");
    expect(extenso("1,0")).toBe("um");
    expect(extenso("1,000")).toBe("um");
  });
  it("deve escrever valores negativos", () => {
    expect(extenso("-3,1")).toBe("menos três inteiros e um décimo");
    expect(extenso("-3.000,1")).toBe("menos três mil inteiros e um décimo");
    expect(extenso("-3.001,1")).toBe("menos três mil e um inteiros e um décimo");
    expect(extenso("-3.001,10")).toBe("menos três mil e um inteiros e dez centésimos");
    expect(extenso("-3,14")).toBe("menos três inteiros e quatorze centésimos");
    expect(extenso("-1,0")).toBe("menos um");
    expect(extenso("-1,000")).toBe("menos um");
  });
  it("deve escrever os valores em reais", () => {
    expect(extenso("0", {real: true})).toBe("zero real");
    expect(extenso("1", {real: true})).toBe("um real");
    expect(extenso("2", {real: true})).toBe("dois reais");
    expect(extenso("10,0", {real: true})).toBe("dez reais");
    expect(extenso("10,1", {real: true})).toBe("dez reais e um centavo");
    expect(extenso("10,2", {real: true})).toBe("dez reais e dois centavos");
    expect(extenso("0,10", {real: true})).toBe("dez centavos");
    expect(extenso("0,10", {real: true})).toBe("dez centavos");
    expect(extenso("1,100", {real: true})).toBe(undefined);
  });
  it("deve ser NaN", () => {
    expect(extenso("hello")).toEqual(NaN);
    expect(extenso("1.2.3.4.5")).toEqual(NaN);
  });
});
