const mdc = require('../funcoes/MDC');

test('mdc de 42 e 30 = 6', () => {
    expect(mdc(42, 30)).toBe(6);
})

test('mdc de 64 e 128 = 64', () => {
    expect(mdc(64, 128)).toBe(64);
})