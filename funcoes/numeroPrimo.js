module.exports = checarPrimo;

function checarPrimo(n) {
	n = Math.abs(n);
	if (n <= 1) return false;
	else if (n <= 3) return true;
	else if (!(n % 2) || !(n % 3)) return false;
	let i = 5;
	while (i * i <= n) {
		if (!(n % i) || !(n % (i + 2))) return false;
		i += 6;
	}
	return true;
}