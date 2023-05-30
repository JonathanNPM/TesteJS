module.exports = mdc;

function mdc(n1, n2) {
	return n2 === 0 ? n1 : mdc(n2, n1 % n2);
}