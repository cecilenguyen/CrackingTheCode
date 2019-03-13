/* 4.3 List of Depths: Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (e.g., if you have a tree with depth D, you'll have Dlinked lists). */

  
/*
	1. Initialize a listOfDepths, currentLevel and a nextLevel array
	2. Add the root to currentLevel and add its left and right children to nextLevel
	3. While the currentLevel is not empty, create a new level list
		3a. Dequeue an element from the currentLevel
		3b. Add its children to the nextLevel
		3c. Push the dequeued element onto the levels array
		3d. Once the currentLevel is empty, push the level list into the listOfDepths array, set the currentLevel to the nextLevel, and set the nextLevel to an empty list and start back at step 3a
*/


class Node {
	
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function listOfDepths(node) {
	let listOfDepths = [];
	let currentLevel = [node];
	let nextLevel = [];

	while (currentLevel.length) {

		let level = [];

		currentLevel.forEach(currNode => {
			level.push(currNode);

			if (currNode.left) {
				nextLevel.push(currNode.left);
			}

			if (currNode.right) {
				nextLevel.push(currNode.right);
			}
		});

		currentLevel = nextLevel;
		nextLevel = [];
		listOfDepths.push(level);
	}

	return listOfDepths;

}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node3.left = node2;
node3.right = node4;
node2.left = node1;
node4.right = node5;

console.log(listOfDepths(node3));

