/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
	var codes = []
	for (var i = 0; i < words.length; i++) {
		var word = words[i]
		codes.push(codeFromWord(word))
	}
	return unique(codes).length
}

var codeFromWord = function(word) {
	var code = ''
	for (var i = 0; i < word.length; i++) {
		var c = word[i]
		code += codeFromChar(c)
	}
	return code
}

var codeFromChar = function(char) {
	var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
	var result = morse[char.charCodeAt() - 'a'.charCodeAt()]
	return result
}

var unique = function(array) {
	return Array.from(new Set(array))
}
