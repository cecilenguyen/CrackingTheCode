/* 2.5 Sum Lists: You have two numbers represented by a linked list, where each node contains a single digit. The digits are stored in reverse order, such that the 1's digit is at the head of the list. Write a function that adds the two numbers and returns the sum as a linked list. 

EXAMPLE
Input: (7 -> 1 -> 6) + (5 -> 9 -> 2). That is, 617 + 295. Output: 2 -> 1 -> 9. That is, 912.

FOLLOW UP
Suppose the digits are stored in forward order. Repeat the above problem. Input: (6 -> 1 -> 7) + (2 -> 9 -> 5). That is, 617 + 295. Output: 9 -> 1 -> 2. That is, 912. */

/*
	1. Loop through each LL 
	2. If a node is null, count its value as 0
	3. Add the 2 node's values
	4. If it is greater than 9, the carry over is always 1
	5. Save the digit's value which is sum % 10
	6. return the head of the sum LL
*/

class Node {
	constructor(val) {
		this.val = val;
		this.next = null;
	}
}

function sumLists(l1, l2) {
	let sumLL;
	let tail;    
	let carryOver = 0;

	while (l1 || l2) { // l1 = null, l2 = null
		let val1 = l1 ? l1.val : 0;      
		let val2 = l2 ? l2.val : 0;      

		let sum = val1 + val2 + carryOver;    
		console.log(sum);   
		carryOver = sum > 9 ? 1 : 0; 		

		if (!sumLL) {
			sumLL = new Node(sum % 10);				
			tail = sumLL;
		} else {
			tail.next = new Node(sum % 10);
			tail = tail.next;
		}

		l1 = l1 ? l1.next : null;
		l2 = l2 ? l2.next : null;
	}

	return sumLL;
}

let six = new Node(6);
let one = new Node(1);
let seven = new Node(7);

seven.next = one;
one.next = six;

let two = new Node(2);
let nine = new Node(9);
let five = new Node(5);

five.next = nine;
nine.next = two;

console.log(sumLists(seven, five));


