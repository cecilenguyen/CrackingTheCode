/* 2.4 Partition: Write code to partition a linked list around a value x, such that all nodes less than x come before all nodes greater than or equal to x. If x is contained within the list, the values of x only need to be after the elements less than x (see below). The partition element x can appear anywhere in the "right partition"; it does not need to appear between the left and right partitions.

EXAMPLE:
Input: 3 -> 5 -> 8 -> 5 -> 10 -> 2 -> 1 [partition=5] 
Output: 3 -> 1 -> 2 -> 10 -> 5 -> 5 -> 8 */

/*
	1. Make new LL
	2. Loop through LL
	2. if node is less than x, add it to the beginning of the LL
	3. if node is greater than or equal to x, add it at the end
*/

class Node() {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function partition(node, x) {
	if (!node) return;

	let head = node;
	let tail = node;

	while (node) {
		let next = node.next;

		if (node.val < x) {
			node.next = head;
			head = node;
		} else {
			tail.next = node;
			tail = node;
		}

		node = next;
	}

	tail.next = null;

	return head;
}