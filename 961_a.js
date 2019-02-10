var repeatedNTimes = function(A) {
	var map = {}
	for (var i = 0; i < A.length; i++) {
		var a = A[i]
		if (map[a]) {
			return a
		} else {
			map[a] = true
		}
	}    
}
