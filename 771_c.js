var numJewelsInStones = function(J, S) {
	var count = 0
	for (var i = 0; i < S.length; i++) {
		var s = S[i]
		var isJewel = false
		for (var j = 0; j < J.length; j++) {
			if (s == J[j]) {
				isJewel = true
			}
		}
		if (isJewel) {
			count++
		}
	}
	return count
}
