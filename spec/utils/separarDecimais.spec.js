const separarDecimal = require("../../src/utils/separarDecimal");

describe("`utils/separarDecimal`", () => {
  it("deve separar um número pelas vírgulas", () => {
    expect(separarDecimal("3,14")).toEqual(["3", "14"]);
  });
});
