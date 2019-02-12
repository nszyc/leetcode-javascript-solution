/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var fairCandySwap = function(A, B) {
   	var sumA = A.reduce(function(a, v) {
   		return a + v
   	})
   	var sumB = B.reduce(function(a, v) {
   		return a + v
   	})
   	var delta = sumA - sumB
   	var map = {}
   	for (var i = 0; i < A.length; i++) {
   		var v = A[i]
   		map[v - delta * 0.5] = v
   	}
   	for (var i = 0; i < B.length; i++) {
   		var v = B[i]
   		if (map[v]) {
   			return [map[v], v]
   		}
   	}
};
