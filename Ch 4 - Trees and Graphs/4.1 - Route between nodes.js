/* 
4.1 Route Between Nodes: Given a directed graph, design an algorithm to find out whether there is a route between two nodes. */

/*
	1. BFS
	2. Start at first node
	3. Add its adjacent nodes to a queue
	4. Loop through the queue until it's empty or route is found
	5. Dequeue an element and check that it's not already visited and if its the node we are looking for a route to
	6. If the node has been visited, move on to the next element in the queue
	7. If it is the node we are looking for, return true
	8. If it isn't, mark the node as visited and add that node's adjacent nodes to the queue
	9. Continue on until the queue is empty. If it we hit the end of the queue, that makes no routes were found so return false
*/

class Node {

	constructor(val) {
		this.val = val;
		this.adjacentNodes = [];
		this.visited = false;
	}

	setAdjacentNodes(nodes) {
		this.adjacentNodes = nodes;
	}

	getAdjacentNodes() {
		return this.adjacentNodes;
	}

	addAdjacentNode(node) {
		this.adjacentNodes.push(node);
	}
}

function findRoute(node1, node2) {
	let queue = [].concat(node1.getAdjacentNodes());
	while (queue.length) {
		let currNode = queue.shift();
		if (currNode == node2) {
			return true;
		}

		if (!currNode.visited) {
			currNode.visited = true;
			queue.push.apply(queue, currNode.getAdjacentNodes());
		}
	}

	return false;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);

node1.setAdjacentNodes([node2, node4]);
node2.setAdjacentNodes([node3, node4]);
node4.setAdjacentNodes([node5]);

console.log(findRoute(node1, node5));  // should return true;
node1.visited = false;
node2.visited = false;
node3.visited = false;
node4.visited = false;
node5.visited = false;

console.log(findRoute(node2, node5));  // should return false;
node1.visited = false;
node2.visited = false;
node3.visited = false;
node4.visited = false;
node5.visited = false;

console.log(findRoute(node3, node1));  // should return true;