/* One Away: There are three types of edits that can be performed on strings: insert a character, remove a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away. */

/*
	1. Check that the strings are not already the same. If so, return true
	2. Check that the strings' lengths are within 1. If more, then return false as it would take 
		more than 1 edit to make the strings the same
	3. Create a flag to mark when an edit has already been made
	3. Loop through word until find letters that don't match
	4. Check the flag for whether an edit has already been made
	5. If it has, return false otherwise continue to step 5
	4. if the words are the same length, this is case where we would replace a letter
		> mark the flag that an edit has been made and continue through the string
	5. if the words are of different length, this is the case where we would add or delete
		> mark the flag that an edit has been made
		> increase only the index of the longer string

*/

function oneAway(str1, str2) {
	if (str1 === str2) {
		return true;
	}

	if (Math.abs(str1.length - str2.length) > 1) {
		return false;
	}

	let s1 = str1.length < str2.length ? str1 : str2;
	let s2 = str1.length < str2.length ? str2 : str1;

	let index1 = 0;
	let index2 = 0;
	let editMade = false;

	while (index1 < s1.length) {
		if (s1.charAt(index1) !== s2.charAt(index2)) {
			if (editMade) return false;

			editMade = true;

			if (s1.length !== s2.length) {
				index2++;
			} else {
				index1++;
				index2++;
			}
		} else {
			index1++;
			index2++;
		}
	}

	return true;
}



console.log(oneAway('pale', 'ple'));
console.log(oneAway('pales', 'pale'));
console.log(oneAway('pale', 'bale'));
console.log(oneAway('pale', 'bae'));