/**
 * @param {string} S
 * @return {string}
 */
var reverseOnlyLetters = function(S) {
	var letters = []
	var others = []
	for (var i = 0; i < S.length; i++) {
		var c = S.charCodeAt(i)
		var isLowerCase = (c >= 'a'.charCodeAt() && c <= 'z'.charCodeAt())
		var isUpperCase = (c >= 'A'.charCodeAt() && c <= 'Z'.charCodeAt())
		if (isLowerCase || isUpperCase) {
			letters.push(S[i])
		} else {
			others.push(S[i])
		}
	}
	var result = ''
	for (var i = 0; i < S.length; i++) {
		var c = S.charCodeAt(i)
		var isLowerCase = (c >= 'a'.charCodeAt() && c <= 'z'.charCodeAt())
		var isUpperCase = (c >= 'A'.charCodeAt() && c <= 'Z'.charCodeAt())
		if (isLowerCase || isUpperCase) {
			result += letters.pop()
		} else {
			result += others.shift()
		}
	}
	return result
};
