/* 2.2 Return Kth to Last: Implement an algorithm to find the kth to last element of a singly linked list. */

/* 
	1. Create a fast and slow runner
	2. Run the fast one k nodes
	3. Then start running the slow runner and fast runner at the same pace
	4. When the fast runner hits the end of the list, that means the slower one is k from the end
*/

function kToLast(node, k) {
	let fast = node;
	let slow = node;

	for (let i = 0; i < k; i++) {
		fast = fast.next;
	}

	while (fast) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow;
}
