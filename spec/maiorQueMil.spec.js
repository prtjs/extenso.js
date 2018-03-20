const maiorQueMil = require("../src/maiorQueMil");

describe("`maiorQueMil`", () => {
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
