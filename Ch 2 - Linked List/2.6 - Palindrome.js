/* Palindrome: Implement a function to check if a linked list is a palindrome. 
	ex. 0 -> 1 -> 2 -> 1 -> 0
*/

/*
	1. Recursively walk down the linked list
	2. On the way down, save each node's value into a string
	3. On the way back up the stack, save each node's value into a second string
	4. Compare if the two strings are equal

*/


class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function isPalindrome(node) {
	let str1 = '';
	let str2 = '';


	function palindromeHelper(node) {
		if (!node) {
			return;
		}

		str1 += node.val;
		palindromeHelper(node.next);
		str2 += node.val;	 
	}

	palindromeHelper(node);

	return str1 == str2;
}



let zero = new Node(0);
let one = new Node(1);
let two = new Node(2);
let secondOne = new Node(1);
let secondZero = new Node(0);

zero.next = one;
one.next = two;
two.next = secondOne;
secondOne.next = secondZero;

console.log(isPalindrome(zero));