var numJewelsInStones = function(J, S) {
	var count = 0
	var map = {}
	for (var i = 0; i < J.length; i++) {
		map[J[i]] = 42
	}
	for (var i = 0; i < S.length; i++) {
		if (map[S[i]] == 42) {
			count++
		}
	}
	return count
}
