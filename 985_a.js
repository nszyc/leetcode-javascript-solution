/**
 * @param {number[]} A
 * @param {number[][]} queries
 * @return {number[]}
 */
var sumEvenAfterQueries = function(A, queries) {
	var evenSum = 0
	for (var i = 0; i < A.length; i++) {
		var a = A[i]
		if (a % 2 == 0) {
			evenSum += a
		}
	}
	var result = []
	for (var i = 0; i < queries.length; i++) {
		var query = queries[i]
		var value = query[0]
		var index = query[1]
		if (A[index] % 2 == 0) {
			evenSum -= A[index]
		}
		A[index] += value
		if (A[index] % 2 == 0) {
			evenSum += A[index]
		}
		result.push(evenSum)
	}
	return result
};
