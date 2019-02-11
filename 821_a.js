/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function(S, C) {
	var charIndex = []
	for (var i = 0; i < S.length; i++) {
		var char = S[i]
		if (char == C) {
			charIndex.push(i)
		}
	}
	var result = []
	for (var i = 0; i < S.length; i++) {
		result.push(Math.min.apply(null, charIndex.map(function(e) {
			return Math.abs(e - i)
		})))
	}
	return result
};
