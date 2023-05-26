const { describe, test, expect } = require("@jest/globals");
const {
  soma,
  divisao,
  multiplicacao,
  subtracao,
} = require("../programas/aritimetico");

describe("testando as função de cálculo aritimético", () => {
  test("somando 1 mais 2, resultado é para ser 3", () => {
    expect(soma(1, 2)).toBe(3);
    expect(soma(2, 1)).not.toBe(4);
    expect(soma(2, 1)).not.toBeLessThan(2);
    expect(soma("2", 1)).not.toBe(3);
  });

  test("subtraindo 2 por 1", () => {
    expect(subtracao(2, 1)).toBe(1);
    expect(subtracao(2, 1)).not.toBe(2);
    expect(subtracao(2, 1)).toBeLessThan(2);
  });

  test("dividindo 2 por 1, resultado é para ser 2", () => {
    expect(divisao(2, 1)).toBe(2);
  });

  test("multiplicando 1 por 2, resultado é para ser 2", () => {
    expect(multiplicacao(1, 2)).toBe(2);
  });
});
