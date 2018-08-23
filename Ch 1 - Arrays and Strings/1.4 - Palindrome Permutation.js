/* 1.4 Palindrome Permutation: Given a string, write a function to check if it is a permutation of a palindrome. A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters. The palindrome does not need to be limited to just dictionary words. */

/* 
	1. create a set (a set lets you store unique values). Adding/deleting is constant time
	2. remove all whitespace and turn letters to lowercase to ignore casing
	3. for each letter in the string, if it is not in the set, add it
	4. if a letter is already in the set, delete
	5. if a letter appears an even number of times, the adding/deleting should cancel eachother out and the letter will not be in the set at the end
	6. if a letter appears an odd number of times, the adding/deleting will not cancel out and
	the letter will appear in the set at the end
	7. return whether the set contains more than one letter or not. If it has more than 1,
	that means it has more than one character that shows up an odd number of times, making it
	not a palindrome

*/
function palindromePermutation(str) {
	str = str.toLowerCase().replace(/\s/g, '');
	let chars = new Set();
	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);
		if (chars.has(letter)) {
			chars.delete(letter);
		} else {
			chars.add(letter);
		}
	}

	return chars.size <= 1;
}