module.exports = contagem;

function contagem(arr) {
	let cont = 0;
	if (!(arr instanceof Object)) return arr;
	for (const i of arr) {
		if (i - (i | 0) === 0) cont++;
	}
	return cont;
}