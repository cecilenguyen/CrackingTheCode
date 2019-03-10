/* 2.1 Remove Dupes: Write code to remove duplicates from an unsorted linked list. FOLLOW UP
How would you solve this problem if a temporary buffer is not allowed? */


/*
	1. Create a set of seen node values
	2. Loop through the list
	3. If a node has a value int he seen set, remove it
	4. Else if it's a never before seen value, add it to the set
*/

class Node {
	constructor(val, next) {
		this.val = value;
		this.next = next;
	}
}

function removeDupes(node) {
	let previous = null;
	let seen = new Set();

	while (node) {
		if (seen.has(node.val)) {
			previous.next = node.next;
		} else {
			seen.add(node.val);
			previous = node;
		}
		node = node.next;
	}
}