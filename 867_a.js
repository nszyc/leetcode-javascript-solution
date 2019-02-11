/**
 * @param {number[][]} A
 * @return {number[][]}
 */
var transpose = function(A) {
	var R = []
	for (var i = 0; i < A[0].length; i++) {
		R.push([])
		for (var j = 0; j < A.length; j++) {
			R[i][j] = A[j][i]
		}
	}
	return R
};
