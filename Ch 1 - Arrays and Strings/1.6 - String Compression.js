/* 1.6 String Compression: Implement a method to perform basic string 
compression using the counts of repeated characters. For example, the 
string aabcccccaaa would become a2blc5a3. If the "compressed"string 
would not become smaller than the original string, your method should 
return the original string. You can assume the string has only uppercase 
and lowercase letters (a - z). */

/* 
	1. Create new empty string
	2. Loop through string
	3. Copy current letter to new string
	4. Count occurances of current letters until reach new letter
	5. Repeat steps 3 & 4
	6. Return the shorter of compressed string and original string
*/

function stringCompression(str) {
	let compressedStr = str.charAt(0);
	let currLetter = str.charAt(0);
	let count = 1;

	for (let i = 1; i < str.length; i++) {
		if (str.charAt(i) === currLetter) {
			count++;
		} else {
			compressedStr += count;
			currLetter = str.charAt(i);
			compressedStr += currLetter;
			count = 1;
		}
	}

	compressedStr += count;

	return str.length <= compressedStr.length ? str : compressedStr;
}

console.log(stringCompression('aabcccccaaa'));