/* 1.1 Is Unique: Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures? */

/* 
	1. Create a set of letters that have been seen
	2. Loop through the string, check if the letter is in the set of seen letters
	3. Return if seen before
	3. Else, add it to the set of seen letters and keep going
	4. If you make it through the whole string without returning, that means all characters are unique so return true

	Another solution would be to sort the two strings and compare if they are the same or not
*/


// with additional data structure assuming all lowercase
function isUnique(str) {
	let lettersSeen = new Set();
	for (let i = 0; i < str.length; i++) {
		let letter = str.charAt(i);
		if (lettersSeen.has(letter)) {
			return false;
		} else {
			lettersSeen.add(letter);
		}
	}

	return true;
}

/* with no additional data structure: could sort the string, loop through and see if any characters side by side match. Sorting
method could take up some space depending on which is used*/