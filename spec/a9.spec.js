const a9 = require("../src/a9");

describe("a9", () => {
  it("deve escrever números até 9", () => {
    expect(a9(0)).toBe("zero");
    expect(a9(1)).toBe("um");
    expect(a9(2)).toBe("dois");
    expect(a9(5)).toBe("cinco");
    expect(a9(1, true)).toBe("uma");
    expect(a9(2, true)).toBe("duas");
  });
});
