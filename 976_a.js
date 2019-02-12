/**
 * @param {number[]} A
 * @return {number}
 */
var largestPerimeter = function(A) {
	A.sort(function(a, b) {
		return a - b
	})
	if (A.length < 3) {
		return 0
	}
	var x3 = A.length - 1
	var x2 = x3 - 1
	var x1 = x2 - 1
	while (x1 >= 0) {
		if (A[x1] + A[x2] > A[x3]) {
			return A[x1] + A[x2] + A[x3]
		}
		x3--
		x2--
		x1--
	}
	return 0
};
