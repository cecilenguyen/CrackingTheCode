
/* URLify: Write a method to replace all spaces in a string with '%20: You may assume 
that the string has sufficient space at the end to hold the additional characters, and 
that you are given the "true" length of the string. (Note: If implementing in Java, 
please use a character array so that you can perform this operation in place.) */

/*
	1. loop through each character of the string
	2. if it is a space, concatenate '%20' to the newStr
	3. if it's a letter, concatenate that letter into the new string
*/
function urlify(str) {
	let newStr = '';
	for (let i = 0; i < str.length; i++) {
		if (str.charAt(i) === ' ') {
			newStr += '%20';
		} else {
			newStr += str.charAt(i);
		}
	}
	return newStr;
}

// efficient way using built in JS string functions
function urlify(str) {
	let splitStr = str.split(' ');
	return splitStr.join('%20');
}