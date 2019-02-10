var numJewelsInStones = function(J, S) {
	var count = 0
	for (var i = 0; i < S.length; i++) {
		var s = S[i]
		for (var j = 0; j < J.length; j++) {
			if (s == J[j]) {
				count++
				continue
			}
		}
	}
	return count
}
