/* 3.3 Stack of Plates: Imagine a (literal) stack of plates. If the stack gets too high, it might topple. Therefore, in real life, we would likely start a new stack when the previous stack exceeds some threshold. Implement a data structure SetOfStacks that mimics this. SetOfStacks should be composed of several stacks and should create a new stack once the previous one exceeds capacity. SetOfStacks. push () and SetOfStacks. pop() should behave identically to a single stack (that is, pop ( ) should return the same values as it would if there were just a single stack).
*/

class Stack {
	
	constructor(n) {
		this.stack = [];
		this.maxSize = n;
	}

	push(element) {
		if (isFull()) {
			return -1;
		} else {
			this.stack.push(element);

			return element;
		}
	}

	pop() {
		if (this.stack.length > 1) {
			let popped = this.stack.pop();

			return popped;
		} else {
			return -1;
		}
	}

	isFull() {
		return this.stack.length == this.maxSize;
	}
}

class StackOfStacks {
	
	constructor(maxStackSize) {
		this.stacks = [];
		this.maxStackSize = maxStackSize
 	}

	push(element) {
		// if there is no stack or the last stack is full, create a new stack
		 if (!this.stacks[length-1] || this.stacks[length-1].isFull()) {
		 	this.stacks.push(new Stack(this.maxStackSize));
		 }

		 let lastStack = this.stacks[length-1];
		 lastStack.push(element);

		 return element;
	}

	pop() {
		// if there is no stack return -1
		if (!this.stacks[length-1]) {
			return -1;
		}

		let lastStack = this.stacks[length-1];
		let popped = lastStack.pop();

		// if the lastStack is now empty, remove it from the stack of stacks
		if (lastStack.length == 0) {
			this.stacks.pop();
		}

		// return element that was popped
		return popped;
	}
}