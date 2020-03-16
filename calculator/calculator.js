const add = (...n) => n.reduce((r,e) => r += e, 0);

const subtract = (n, m) => n - m;

const sum = n => add(...n);

const multiply = n => n.reduce((r,e) => r *= e);

const power = (base, exp) => exp === 1 ? base : base * power(base, --exp);

const factorial = n => n < 2 ? 1 : n * factorial(--n);

module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial
}