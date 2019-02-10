var flipAndInvertImage = function(A) {
	return A.map(function(a) {
		return a.reverse().map(function(e) {
			return Math.abs(e - 1)
		})
	})
}
