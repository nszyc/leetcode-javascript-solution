/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	var s1 = x.toString(2)
	var s2 = y.toString(2)
	while (s1.length != s2.length) {
		if (s1.length < s2.length) {
			s1 = '0' + s1
		} else {
			s2 = '0' + s2
		}
	}
	var hd = 0
	for (var i = 0; i < s1.length; i++) {
		if (s1[i] != s2[i]) {
			hd++
		}
	}
	return hd
};
