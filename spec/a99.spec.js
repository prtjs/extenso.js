const a99 = require("../src/a99");

describe("a99", () => {
  it("deve escrever números até 9", () => {
    expect(a99(1)).toBe("um");
  });
  it("deve escrever números até 99", () => {
    expect(a99(15)).toBe("quinze");
    expect(a99(50)).toBe("cinquenta");
    expect(a99(55)).toBe("cinquenta e cinco");
  });
});
