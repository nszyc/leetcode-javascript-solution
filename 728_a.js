var selfDividingNumbers = function(left, right) {
	var result = []
	for (var i = left; i <= right; i++) {
		if (isSelfDividingNumber(i)) {
			result.push(i)
		}
	}   
	return result 
}

var isSelfDividingNumber = function(number) {
	var s = number.toString(10)
	for (var i = 0; i < s.length; i++) {
		var n = parseInt(s[i], 10)
		if (n == 0) {
			return false
		}
		if (number % n != 0) {
			return false
		}
	}
	return true
}
