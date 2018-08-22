/* Check Permutation: Given two strings, write a method to decide if one is a permutation of the other. */

/* 
	This solution assumes the chars are in unicode,, case doesn't matter, and no whitespace
	1. check if lengths are the same. If they're different we'll say they're not permutations
	2. make empty array of 26 filled with 0s to signify count of each letter in the alphebet
	3. loop through the first string and count up the number of times each letter appears
	4. loop through the second string and decrement each letter's count as we see them
	5. if a letter's count is 0, that means there weren't any of that letter in str1 or
	str1 has less appearances of that letter than string 2 so its not a permutation

	Another solution would be to sort the two strings and compare if they are the same or not
*/
function checkPermutation(str1, str2) {

	if (str1.length !== str2.length) {
		return false;
	}

	let chars = new Array(26).fill(0);

	for (let i = 0; i < str1.length; i++) {
		let index = str1.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
		chars[index] = chars[index] + 1;
	}

	for (let i = 0; i < str2.length; i++) {
		let index = str2.charAt(i).charCodeAt(0) - 'a'.charCodeAt(0);
		if (chars[index] > 0) {
			chars[index] = chars[index] - 1;
		} else {
			return false;
		}
	}

	return true;
}