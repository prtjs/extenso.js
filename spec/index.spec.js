const index = require("../src/index");

describe("`index`", () => {
  it("deve escrever valores simples", () => {
    expect(index(1)).toBe("um");
    expect(index(1000)).toBe("mil");
    expect(index("1.000.001")).toBe("um milhão e um");
  });
  it("deve escrever os valores em feminino", () => {
    expect(index("1", {feminino: true})).toBe("uma");
    expect(index("2", {feminino: true})).toBe("duas");
  });
  it("deve escrever valores decimais", () => {
    expect(index("0,1")).toBe("um décimo");
    expect(index("1,1")).toBe("um inteiro e um décimo");
    expect(index("2,1")).toBe("dois inteiros e um décimo");
  });
  it("deve escrever valores negativos", () => {
    expect(index("-0")).toBe("menos zero");
    expect(index("-1")).toBe("menos um");
    expect(index("-2")).toBe("menos dois");
  });
  it("deve escrever os valores em reais", () => {
    expect(index("0", {real: true})).toBe("zero real");
    expect(index("1", {real: true})).toBe("um real");
    expect(index("2", {real: true})).toBe("dois reais");
    expect(index("-25", {real: true})).toBe("menos vinte e cinco reais");
  });
  it("deve ser NaN", () => {
    expect(index("hello")).toEqual(NaN);
    expect(index("1.2.3.4.5")).toEqual(NaN);
  });
});
