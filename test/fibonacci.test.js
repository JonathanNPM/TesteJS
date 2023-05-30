const fibonacci = require('../funcoes/fibonacci');

test('contagem fibonacci 10 = 0, 1, 1, 2, 3, 5, 8, 13, 21, 34', () => {
    expect(fibonacci(10)).toMatchObject([0, 1, 1, 2, 3, 5, 8, 13, 21, 34]);
});

test('contagem fibonacci 2 = 0, 1', () => {
    expect(fibonacci(2)).toMatchObject([0, 1]);
});