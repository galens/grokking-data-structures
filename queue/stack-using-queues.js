class Queue {
  constructor(queue = []) {
    this.items = [...queue];
    this.frontIndex = 0;
  }

  enqueue(element) {
    this.items.push(element);
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('Queue is empty');
    }
    const element = this.items[this.frontIndex];
    this.frontIndex++;
    return element;
  }

  peek() {
    return this.items[this.frontIndex];
  }

  isEmpty() {
    return this.frontIndex >= this.items.length;
  }

  length() {
    return this.items.length - this.frontIndex;
  }
}

class Solution {
  // Constructor to initialize the queues
  constructor() {
    this.queue1 = new Queue();
    this.queue2 = new Queue();
  }

  // Push element x onto the stack
  push(x) {
    // Add the element to queue2
    this.queue2.enqueue(x);

    // Move all elements from queue1 to queue2 to maintain stack order
    while (!this.queue1.isEmpty()) {
      this.queue2.enqueue(this.queue1.dequeue());
    }

    // Swap the names of queue1 and queue2
    let temp = this.queue1;
    this.queue1 = this.queue2;
    this.queue2 = temp;
  }

  // Pop element from the stack
  pop() {
    return this.queue1.dequeue(); // Remove and return the front of queue1, which is the stack's top
  }

  // Get the top element
  top() {
    return this.queue1.peek(); // Peek at the front of queue1, which is the stack's top
  }

  // Check if the stack is empty
  empty() {
    return this.queue1.isEmpty(); // Check if queue1 is empty
  }
}

// Main method to test the stack implementation
const myStack = new Solution();
myStack.push(5);
myStack.push(10);
console.log(myStack.pop()); // 10
console.log(myStack.top()); // 5
console.log(myStack.pop()); // 5
console.log(myStack.empty()); // true

// time complexity push O(n)
// time complexity pop O(1)
// time complexity top O(1)
// time complexity empty O(1)

// space complexity O(n)
