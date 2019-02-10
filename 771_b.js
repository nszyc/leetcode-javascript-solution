var numJewelsInStones = function(J, S) {
	var count = 0
	var map = {}
	for (var i = 0; i < J.length; i++) {
		map[J[i]] = true
	}
	for (var i = 0; i < S.length; i++) {
		if (map[S[i]]) {
			count++
		}
	}
	return count
}
