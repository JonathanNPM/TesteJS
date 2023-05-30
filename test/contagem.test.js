const contagem = require('../funcoes/contagem');

test('contagem inteiros [1, 2.1, 3.2, 4, 5] = 3', () => {
    expect(contagem([1, 2.1, 3.2, 4, 5])).toBe(3);
});

test('contagem inteiros [1.7, 2.1, 3.2, 4.9, 5.7] = 0', () => {
    expect(contagem([1.7, 2.1, 3.2, 4.9, 5.7])).toBe(0);
});