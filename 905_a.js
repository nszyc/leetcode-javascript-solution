var sortArrayByParity = function(A) {
	var result = []
	for (var i = A.length - 1; i >= 0; i--) {
		var a = A[i]
		if (a % 2 == 0) {
			result.unshift(a)
		} else {
			result.push(a)
		}
	}
	return result
}
