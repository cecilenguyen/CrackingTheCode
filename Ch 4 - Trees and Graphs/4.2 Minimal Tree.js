/* 4.2 Minimal Tree: Given a sorted (increasing order) array with unique integer elements, write an algorithm to create a binary search tree with minimal height. */


 /*
 	1. Find node at center of array to split the array --> Math.floor(length/2)) 
 	2. That will be the root node
 	3. Recurse to find the root node of the left subarray and set it as the left of the root
 	4. Recurse to find the root node of the right subarray and set it as the right of the root
 	5. Continue recursing until the final tree is built and return the root
 */

 class Node {

 	constructor(val) {
 		this.val = val;
 		this.left = null;
 		this.right = null;
 	}
 }

 function minimalTree(arr) {
 	if (arr.length == 0) { return null; }

 	let pivot = Math.floor(arr.length/2);
 	let root = arr[pivot];

 	root.left = minimalTree(arr.slice(0, pivot));
 	root.right = minimalTree(arr.slice(pivot + 1));

 	return root;
 }

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);

let arr = [node1, node2, node3, node4, node5, node6];
console.log(minimalTree(arr));