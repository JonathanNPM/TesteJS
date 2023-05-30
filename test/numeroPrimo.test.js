const checarPrimo = require('../funcoes/numeroPrimo');

test('23 é primo', () => {
    expect(checarPrimo(23)).toBe(true);
})

test('27 não é primo', () => {
    expect(checarPrimo(27)).not.toBe(true);
})