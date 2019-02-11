/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
	var odd = []
	var even = []
	for (var i = 0; i < A.length; i++) {
		var a = A[i]
		if (a % 2 == 0) {
			even.push(a)
		} else {
			odd.push(a)
		}
	}
	var result = []
	while (odd.length != 0 || even.length != 0) {
		result.push(even.pop())
		result.push(odd.pop())
	}
	return result
};
