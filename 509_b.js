/**
 * @param {number} N
 * @return {number}
 */

var map = {}

var fib = function(N) {
	if (map[N] >= 0) {
		return map[N]
	}
	if (N <= 1) {
		map[N] = N
		return map[N]
	} else {
		map[N] = fib(N - 1) + fib(N - 2)
		return map[N]
	}
};
