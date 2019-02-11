/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

var array

var reverseString = function(s) {
	array = s

	var p1 = 0
	var p2 = s.length - 1
	while (p1 < p2) {
		swap(p1, p2)
		p1++
		p2--
	}
};

var swap = function(index1, index2) {
	if (array[index1] && array[index2]) {
		var temp = array[index1]
		array[index1] = array[index2]
		array[index2] = temp
	}
}
