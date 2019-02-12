/**
 * @param {number[]} A
 * @return {number[]}
 */
var pancakeSort = function(A) {
	var sorted = Array.from(A).sort(function(a, b) {
		return a - b
	})
	var result = []
	while (sorted.length > 0) {
		var max = sorted.pop()
		var maxIndex = A.indexOf(max)

		result.push(maxIndex + 1)

		var tempArray = []
		for (var i = maxIndex; i >= 0; i--) {
			tempArray.push(A[i])
		}
		for (var i = maxIndex + 1; i < A.length; i++) {
			tempArray.push(A[i])
		}
		A = tempArray

		result.push(sorted.length + 1)

		var tempArray = []
		for (var i = sorted.length; i >= 0; i--) {
			tempArray.push(A[i])
		}
		for (var i = sorted.length + 1; i < A.length; i++) {
			tempArray.push(A[i])
		}
		A = tempArray
	}
	return result
};
