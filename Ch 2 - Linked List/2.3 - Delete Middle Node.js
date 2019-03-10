/* 2.3 Delete Middle Node: Implement an algorithm to delete a node in the middle (Le., any node but the first and last node, not necessarily the exact middle) of a singly linked list, given only access to that node. */

/* 
	1. Change the node to delete's value to its next node's value
	2. Change the node to delete's next to its next node's next
	3. Delete the node following the one to delete

	You are essentially creating a duplicate of the node following the one to you want to delete and then cutting out the original version. 

	Example: Delete node c
	a -> b -> c -> d -> e -> f

	We would copy node d's value and next onto node c which cuts out node d.
				 ______
				/	   \
	a -> b -> d -> d -> e -> f

	** this will give the illusion of deleting node c but in the context of code that references the linked list, the references to the deleted node or the one we copied over may cause problems **
*/

function deleteMiddleNode(node) {
	if (!node || !node.next) {
		return false;
	}

	let next = node.next;
	node.val = next.val;
	node.next = next.next;
	delete next;

	return true;
}