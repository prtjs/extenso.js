const extenso = require("../src/index.js");

describe("extenso", () => {
  it("deve escrever qualquer número por extenso", () => {
    expect(extenso(1)).toBe("um");
    expect(extenso(1000)).toBe("mil");
    expect(extenso("1.000.001")).toBe("um milhão e um");
    expect(extenso("3,1")).toBe("três inteiros e um décimo");
    expect(extenso("3.000,1")).toBe("três mil inteiros e um décimo");
    expect(extenso("3.001,1")).toBe("três mil e um inteiros e um décimo");
    expect(extenso("3.001,10")).toBe("três mil e um inteiros e dez centésimos");
    expect(extenso("3,14")).toBe("três inteiros e quatorze centésimos");
  });
});
