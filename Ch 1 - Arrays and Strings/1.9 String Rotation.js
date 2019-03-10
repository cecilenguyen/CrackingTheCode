/* 1.9 String Rotation: Assume you have a method isSubstring which checks ifone word is a substring of another. Given two strings, 51 and 52, write code to check if str1 is a rotation of str2 using only one call to isSubstring (e.g., waterbottle is a rotation of erbottlewat). */

/* 
	1. Check that str1 and str2 are the same length. If not return false;
	2. Concatentate str1 + str1
	3. Check if str2 is a substring of the concatenation

	This works regardless where the rotation point is. Ex: erbottlewat is a substring of waterbottlewaterbottle
*/

function strRotation(str1, str2) {
	if (str1.length !== str2.length) {
		return false;
	}

	let concatStr1 = str1 + str1;
	return isSubstring(str2, concatStr1);
}

function isSubstring(sub, fullString) {
	return fullString.includes(sub);
}

console.log(strRotation('waterbottle', 'erbottlewat'));
console.log(strRotation('waterbottle', 'erbottlewar'));