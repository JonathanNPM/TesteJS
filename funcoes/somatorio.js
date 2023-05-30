module.exports = somatorio;

function somatorio(arr) {
    let total = 0;

    for (const i of arr) {
        total += i;
    }

    return total;
}