/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
var smallestRangeI = function(A, K) {
	var max = Math.max.apply(null, A)
	var min = Math.min.apply(null, A)
	if (max - min <= K * 2) {
		return 0
	} else {
		console.log(max)
		console.log(min)
		console.log(K)
		return max - min - K * 2
	}
};
