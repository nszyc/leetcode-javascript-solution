/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
	return isMonotoneIncreasing(A) || isMonotoneDecreasing(A)
};

var isMonotoneIncreasing = function(array) {
	if (array.length == 1) {
		return true
	}
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] > array[i + 1]) {
			return false
		}
	}
	return true
}

var isMonotoneDecreasing = function(array) {
	if (array.length == 1) {
		return true
	}
	for (var i = 0; i < array.length - 1; i++) {
		if (array[i] < array[i + 1]) {
			return false
		}		
	}
	return true
}
