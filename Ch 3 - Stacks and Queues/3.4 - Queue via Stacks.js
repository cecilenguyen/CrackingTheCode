/ * 3.4 Queue via Stacks: Implement a MyQueue class which implements a queue using two stacks.*/


/*

Queue FIFO
Stack LIFO
	1. Create 2 stacks (stack1 and stack2)
	2. stack1 is always used for enqueing. Anytime you want to enqueue, push element on to stack1
	3. stack2 is always used for dequeing. Anytime you want to dequeue, it must to be popped off of stack2
	4. You can always enqueue by pushing on to stack1, regardless of the state of either stack
	5. If you are trying to dequeue and stack2 is empty, move everything over from stack1 to stack2 in reverse order before dequeing
*/


class MyQueue {
	constructor() {
		this.stack1 = [];
		this.stack2 = [];
	}

	enqueue(element) {
		this.stack1.push(element);

		return element;
	}

	dequeue() {
		if (!this.stack1.length && !this.stack2.length) {
			throw 'There is nothing to dequeue';
		} else if (!this.stack2.length) {
			this.moveStack();
		}

		let dequeued = this.stack2.pop();
		return dequeued;
	}

	moveStack() {
		while(this.stack1.length) {
			this.stack2.push(this.stack1.pop());
		}
	}

	toString() {
		return this.stack1.concat(this.stack2.reverse());
	}
}


let queue = new MyQueue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.toString());
queue.dequeue();
queue.dequeue();
console.log(queue.toString());