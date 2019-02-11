/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	var s = num.toString(2)
	var array = s.split('').map(function(e) {
		if (e == '0') {
			return '1'
		} else {
			return '0'
		}
	})
	return parseInt(array.join(''), 2)
};
