var diStringMatch = function(S) {
	var numberOfI = 0
	for (var i = S.length - 1; i >= 0; i--) {
		var c = S[i]
		if (c == 'I') {
			numberOfI++
		}
	}
	var array = []
	for (var i = 0; i <= S.length; i++) {
		array.push(i)
	}
	var result = []
	if (S[0] == 'I') {
		result.push(array.shift())
	} else {
		result.push(array.pop())
	}
	var bigger = []
	for (var i = 0; i < numberOfI; i++) {
		bigger.push(array.pop())
	}
	for (var i = 0; i < S.length; i++) {
		var c = S[i]
		if (c == 'I') {
			result.push(bigger.pop())
		} else if (c == 'D') {
			result.push(array.pop())
		}
	}
	return result
}
