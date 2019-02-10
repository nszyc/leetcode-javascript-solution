/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
	var negativeNumbers = []
	var otherNumbers = []
 	for (var i = 0; i < A.length; i++) {
 		var n = A[i]
 		if (n < 0) {
 			negativeNumbers.push(n)
 		} else {
 			otherNumbers.push(n)
 		}
 	}
 	var square1 = negativeNumbers.reverse().map(function(e) {
 		return e * e
 	})
 	var square2 = otherNumbers.map(function(e) {
 		return e * e
 	})
 	return mergeTwoSortedArray(square1, square2)
}

var mergeTwoSortedArray = function(array1, array2) {
	var result = []
	while (!(array1.length == 0 && array2.length == 0)) {
		if (array1.length == 0) {
			result.push(array2.shift())
		} else if (array2.length == 0) {
			result.push(array1.shift())
		} else if (array1[0] < array2[0]) {
			result.push(array1.shift())
		} else {
			result.push(array2.shift())
		}
	}
	return result
}
