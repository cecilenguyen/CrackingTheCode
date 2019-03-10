
/* 3.5 Sort Stack: Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array).The stack supports the following operations: push, pop, peek, and isEmpty. */

/* 
	1. Create a new stack which will be the sorted stack
	2. Push the first item of the unsorted stack onto the sorted stack
	3. Loop through the unsorted stack until it's empty
	4. Pop the unsorted stack and save to a temp variable, if that element is less than or equal the top of the sorted stack, push it onto the sorted stack
	5. If that element is greater than the top of the sorted stack,
		5a. Push everything from the sorted stack back to the unsorted stack
		5b. Push the saved element onto the sorted stack
		5c. Go back to step 4 and continue until unsorted stack is empty
*/


class Stack {

	constructor() {
		this.stack = [];
	}

	push(element) {
		this.stack.push(element);

		return element;
	}

	pop() {
		if (!this.stack.length) {
			throw 'No elements to pop';
			
		}

		let popped = this.stack.pop();
		
		return popped;	
	}

	peek() {
		return this.stack[this.stack.length - 1];
	}
}

function sortStack(unsortedStack) {
	// initialize sorted stack
	let sortedStack = new Stack();
	sortedStack.push(unsortedStack.pop());


	while (unsortedStack.stack.length) {
		let popped = unsortedStack.pop();


		if (popped > sortedStack.peek()) {
			moveStack(sortedStack, unsortedStack);
		} 

		sortedStack.push(popped);
	}
	
	return sortedStack;
}

function moveStack(stack1, stack2) {
	while (stack1.stack.length) {
		stack2.push(stack1.pop());
	}
}


let unsortedStackTest = new Stack();
unsortedStackTest.push(7);
unsortedStackTest.push(10);
unsortedStackTest.push(12);
unsortedStackTest.push(8);

console.log(sortStack(unsortedStackTest));
