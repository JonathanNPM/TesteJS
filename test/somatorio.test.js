const somatorio = require('../funcoes/somatorio');

test('somatorio 1,2,3,4,5 = 15', () => {
    expect(somatorio([1, 2, 3, 4, 5])).toBe(15);
});

test('somatorio 1,2,3,5,8,13 = 32', () => {
    expect(somatorio([1, 2, 3, 5, 8, 13])).toBe(32);
});