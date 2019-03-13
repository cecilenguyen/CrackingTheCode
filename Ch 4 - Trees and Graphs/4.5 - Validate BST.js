
/* 4.5 Validate BST: Implement a function to check ifa binary tree is a binary search tree. */

/*
	1. Do a preorder traversal of the tree, saving each node visited into an array
	2. Loop through the array and make sure the array is in order
	3. If it is, then it is a BST and return true, otherwise return false
*/

class Node {
	constructor(val) {
		this.val = val;
		this.left = null;
		this.right = null;
	}
}

function validateBST(root) {
	if (!root) {
		throw 'Root doesnt exist';
	}

	let arr = [];

	preOrderTraversal(root, arr);

	for (let i = 0; i < arr.length - 1; i++) {
		if (arr[i] > arr[i+1]) {
			return false;
		}
	}

	return true;
}

function preOrderTraversal(root, arr) {
	if (!root) {
		return;
	}

	preOrderTraversal(root.left, arr);
	arr.push(root.val);
	preOrderTraversal(root.right, arr);
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

node3.left = node2;
node3.right = node5;
node2.left = node1;
node5.left = node4;
node5.right = node6;

console.log(validateBST(node3)); // should log true

node5.right = node4;
node5.left = node6;

console.log(validateBST(node3)); // should log false

