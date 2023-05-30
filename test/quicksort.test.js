const quicksort = require('../funcoes/quicksort');

test('quicksort 5,4,3,1 = 1,3,4,5 ', () => {
    expect(quicksort([5, 4, 3, 1], 0, 4)).toMatchObject([1, 3, 4, 5]);
});

test('quicksort 100,4,3,150 = 3,4,100,150 ', () => {
    expect(quicksort([100, 4, 3, 150], 0, 4)).toMatchObject([3, 4, 100, 150]);
});