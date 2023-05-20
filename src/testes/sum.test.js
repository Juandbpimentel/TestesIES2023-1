const { describe, test, expect } = require("jest");
const soma = require("../programas/sum");

describe("testando função de soma", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(soma(1, 2)).toBe(3);
  });

  test("somando 1 + 2 esperando resultado 2 - esperado erro", () => {
    expect(soma(1, 2)).toBe(2);
  });
});
