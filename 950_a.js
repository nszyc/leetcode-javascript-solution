/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {
	var sorted = deck.sort(function(a, b) {
		return a - b
	})
	var result = []
	result.unshift(sorted.pop())
	while (sorted.length > 0) {
		result.unshift(result.pop())
		result.unshift(sorted.pop())
	}
	return result
};
