module.exports = fibonacci;

function fibonacci(n) {
	const termos = [];
	let n1 = 0,
		n2 = 1;

	for (let i = 0; i < n; i++) {
		termos[i] = n1;
		n2 += n1;
		n1 = n2 - n1;
	}

	return termos;
}