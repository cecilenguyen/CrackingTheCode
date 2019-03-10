/* 3.2 Stack Min: How would you design a stack which, in addition to push and pop, has a function min
which returns the minimum element? Push, pop and min should all operate in 0(1) time. */

/*
	1. Keep an internal array of minimums in the stack class -- called 'minimums';
	2. If a new element is pushed onto the stack, push it onto minimums
	3. if the current min gets popped off the stack, pop it from minimums
	4. The minimun of the stack will always the last element of minimums
*/

class Stack {

	constructor() {
		this.stack = [];
		this.minimums = [];
	}


	push(element) {
		this.stack.push(element);

		if (this.minimums.length === 0 || element <= this.minimums[this.minimums.length-1]) {
			this.minimums.push(element);
		}

		return element;
	}

	pop() {
		// if stack is empty and nothing can be popped, return -1
		if (this.stack.length === 0) {
			return -1;
		}

		let popped = this.stack.pop();

		if (popped == this.minimums[this.minimums.length-1]) {
			this.minimums.pop();
		}

		return popped;
	}

	getMin() {
		// if stack is empty and there is no min, return -1
		if (this.minimums.length === 0) {
			return -1;
		}

		return this.minimums[this.minimums.length-1];
	}
}